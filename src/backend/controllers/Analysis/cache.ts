import { LocalData } from "../../enums";

import { IJSONHandler, JSONHandler } from "../../services";

import { AnalysisCreationProps, ProcessedAnalysis } from "./types";

export interface IAnalysisCache {
  saveAnalysis(analysis: ProcessedAnalysis[]): Promise<void>;

  getAnalysis(): Promise<ProcessedAnalysis[]>;

  saveAnalysisSyncRequest(analysis: AnalysisCreationProps): Promise<void>;

  getAnalysisSyncRequests(): Promise<AnalysisCreationProps[]>;

  clearAnalysisSyncRequests(): Promise<void>;
}

class InternalAnalysisCache implements IAnalysisCache {
  private readonly jsonHandler: IJSONHandler;

  private readonly ANALYSIS_CACHE_KEY = LocalData.ANALYSIS_KEY;
  private readonly ANALYSIS_SYNC_CACHE_KEY = LocalData.ANALYSIS__SYNC_KEY;

  constructor(jsonHandler: IJSONHandler) {
    this.jsonHandler = jsonHandler;
  }

  public async saveAnalysis(analysis: ProcessedAnalysis[]): Promise<void> {
    const stringified = await this.jsonHandler.stringify(analysis);

    localStorage.setItem(this.ANALYSIS_CACHE_KEY, stringified);
  }

  public async getAnalysis(): Promise<ProcessedAnalysis[]> {
    const cachedAnalysis = localStorage.getItem(this.ANALYSIS_CACHE_KEY);

    return cachedAnalysis ? await this.jsonHandler.parse(cachedAnalysis) : [];
  }

  public async saveAnalysisSyncRequest(
    analysis: AnalysisCreationProps
  ): Promise<void> {
    const currentAnalysisSyncRequests = await this.getAnalysisSyncRequests();

    const newAnalysisSyncRequests = [...currentAnalysisSyncRequests, analysis];

    const stringifiedRequests = await this.jsonHandler.stringify(
      newAnalysisSyncRequests
    );

    localStorage.setItem(this.ANALYSIS_SYNC_CACHE_KEY, stringifiedRequests);
  }

  public async getAnalysisSyncRequests(): Promise<AnalysisCreationProps[]> {
    const cachedRequests = localStorage.getItem(this.ANALYSIS_SYNC_CACHE_KEY);

    return cachedRequests ? await this.jsonHandler.parse(cachedRequests) : [];
  }

  public async clearAnalysisSyncRequests(): Promise<void> {
    const stringified = await this.jsonHandler.stringify([]);

    localStorage.setItem(this.ANALYSIS_SYNC_CACHE_KEY, stringified);
  }
}

export const AnalysisCache = new InternalAnalysisCache(JSONHandler);
