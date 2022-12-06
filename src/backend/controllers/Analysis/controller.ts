import axios, { AxiosInstance } from "axios";

import { Connections } from "../../enums";

import { AuthorizationProvider, IAuthorizationProvider } from "../../services";

import { RethrowWithMessage } from "../../decorators";

import { AnalysisCreationProps, ProcessedAnalysis } from "./types";

import { AnalysisServiceWatchdog, IAnalysisServiceWatchdog } from "./watchdog";

import { AnalysisCache, IAnalysisCache } from "./cache";

export interface IAnalysisController {
  getAnalysis(): Promise<ProcessedAnalysis[]>;

  postAnalysis(analysis: AnalysisCreationProps): Promise<void>;
}

class InternalAnalysisController implements IAnalysisController {
  private readonly analysisServiceWatchdog: IAnalysisServiceWatchdog;
  private readonly authorizationProvider: IAuthorizationProvider;
  private readonly analysisCache: IAnalysisCache;
  private readonly axiosInstance: AxiosInstance;

  private readonly SERVICE_ENDPOINT = Connections.FARMAS;

  constructor(
    analysisServiceWatchdog: IAnalysisServiceWatchdog,
    authorizationProvider: IAuthorizationProvider,
    axiosInstance: AxiosInstance,
    analysisCache: IAnalysisCache
  ) {
    this.analysisServiceWatchdog = analysisServiceWatchdog;
    this.authorizationProvider = authorizationProvider;
    this.axiosInstance = axiosInstance;
    this.analysisCache = analysisCache;
  }

  @RethrowWithMessage("Erro ao obter análises")
  public async getAnalysis(): Promise<ProcessedAnalysis[]> {
    const isServiceOnline =
      await this.analysisServiceWatchdog.isAnalysisServiceOnline();

    if (!isServiceOnline) {
      return await this.analysisCache.getAnalysis();
    }

    const requestMetadata =
      this.authorizationProvider.getAuthorizationMetadata();

    const serviceUri = `${this.SERVICE_ENDPOINT}/SoilAnalysis`;

    const { data } = await this.axiosInstance.get<ProcessedAnalysis[]>(
      serviceUri,
      requestMetadata
    );

    await this.analysisCache.saveAnalysis(data);

    return data;
  }

  @RethrowWithMessage("Erro ao processar análise")
  public async postAnalysis(analysis: AnalysisCreationProps): Promise<void> {
    const isServiceOnline =
      await this.analysisServiceWatchdog.isAnalysisServiceOnline();

    if (!isServiceOnline) {
      return await this.analysisCache.saveAnalysisSyncRequest(analysis);
    }

    const requestMetadata =
      this.authorizationProvider.getAuthorizationMetadata();

    const serviceUri = `${this.SERVICE_ENDPOINT}/SoilAnalysis`;

    await this.axiosInstance.post(serviceUri, analysis, requestMetadata);
  }
}

export const AnalysisController = new InternalAnalysisController(
  AnalysisServiceWatchdog,
  AuthorizationProvider,
  axios,
  AnalysisCache
);
