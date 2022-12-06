import { LocalData } from "../../enums";

import { IJSONHandler, JSONHandler } from "../../services";

import { Substance } from "./types";

export interface ISubstanceCache {
  saveSubstances(analysis: Substance[]): Promise<void>;

  getSubstances(): Promise<Substance[]>;
}

class InternalSubstanceCache implements ISubstanceCache {
  private readonly jsonHandler: IJSONHandler;

  private readonly SUBSTANCES_CACHE_KEY = LocalData.SUBSTANCES_KEY;

  constructor(jsonHandler: IJSONHandler) {
    this.jsonHandler = jsonHandler;
  }

  public async saveSubstances(analysis: Substance[]): Promise<void> {
    const stringified = await this.jsonHandler.stringify(analysis);

    localStorage.setItem(this.SUBSTANCES_CACHE_KEY, stringified);
  }

  public async getSubstances(): Promise<Substance[]> {
    const cachedSubstances = localStorage.getItem(this.SUBSTANCES_CACHE_KEY);

    return cachedSubstances
      ? await this.jsonHandler.parse(cachedSubstances)
      : [];
  }
}

export const SubstanceCache = new InternalSubstanceCache(JSONHandler);
