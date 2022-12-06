import { AnalysisCache, IAnalysisCache } from "./cache";

import { AnalysisController, IAnalysisController } from "./controller";

export interface IAnalysisSyncHandler {
  sync(): Promise<void>;
}

class InternalAnalysisSyncHandler implements IAnalysisSyncHandler {
  private readonly analysisCache: IAnalysisCache;
  private readonly analysisController: IAnalysisController;

  constructor(
    analysisCache: IAnalysisCache,
    analysisController: IAnalysisController
  ) {
    this.analysisCache = analysisCache;
    this.analysisController = analysisController;
  }

  public async sync(): Promise<void> {
    const syncRequests = await this.analysisCache.getAnalysisSyncRequests();

    const syncPromises = syncRequests.map((syncRequest) =>
      this.analysisController.postAnalysis(syncRequest)
    );

    await Promise.all(syncPromises);

    this.analysisCache.clearAnalysisSyncRequests();
  }
}

export const AnalysisSyncHandler = new InternalAnalysisSyncHandler(
  AnalysisCache,
  AnalysisController
);
