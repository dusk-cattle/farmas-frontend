import axios, { AxiosInstance } from "axios";

import { Connections } from "../../enums";

import { AuthorizationProvider, IAuthorizationProvider } from "../../services";

import { AnalysisServiceWatchdog, IAnalysisServiceWatchdog } from "../Analysis";

import { ISubstanceCache, SubstanceCache } from "./cache";

import { Substance } from "./types";

interface ISubstanceController {
  getSubstances(): Promise<Substance[]>;
}

class InternalSubstanceController implements ISubstanceController {
  private readonly substanceCache: ISubstanceCache;
  private readonly analysisServiceWatchdog: IAnalysisServiceWatchdog;
  private readonly authorizationProvider: IAuthorizationProvider;
  private readonly axiosInstance: AxiosInstance;

  private readonly SERVICE_ENDPOINT = Connections.FARMAS;

  constructor(
    substanceCache: ISubstanceCache,
    analysisServiceWatchdog: IAnalysisServiceWatchdog,
    authorizationProvider: IAuthorizationProvider,
    axiosInstance: AxiosInstance
  ) {
    this.substanceCache = substanceCache;
    this.analysisServiceWatchdog = analysisServiceWatchdog;
    this.authorizationProvider = authorizationProvider;
    this.axiosInstance = axiosInstance;
  }

  public async getSubstances(): Promise<Substance[]> {
    const isServiceOnline =
      await this.analysisServiceWatchdog.isAnalysisServiceOnline();

    if (!isServiceOnline) {
      return await this.substanceCache.getSubstances();
    }

    const requestMetadata =
      this.authorizationProvider.getAuthorizationMetadata();

    const serviceUri = `${this.SERVICE_ENDPOINT}/SubstanceRegistry`;

    const { data } = await this.axiosInstance.get<Substance[]>(
      serviceUri,
      requestMetadata
    );

    await this.substanceCache.saveSubstances(data);

    return data;
  }
}

export const SubstanceController = new InternalSubstanceController(
  SubstanceCache,
  AnalysisServiceWatchdog,
  AuthorizationProvider,
  axios
);
