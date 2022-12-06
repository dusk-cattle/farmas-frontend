import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { AnalysisCache, AnalysisController } from "../controllers";
import { AnalysisSyncHandler } from "../controllers/Analysis/sync";
import { AnalysisServiceWatchdog } from "../controllers/Analysis/watchdog";

import { Connections } from "../enums";

const client = axios.create({
  timeout: 100,
});

interface OnlineState {
  isReportOnline: boolean;
  isAuthOnline: boolean;
  isAnalysisOnline: boolean;
}

const initialState = {
  isReportOnline: true,
  isAuthOnline: true,
  isAnalysisOnline: true,
};

const OnlineContext = createContext<OnlineState>(initialState);

function OnlineProvider({ children }: { children: ReactNode }) {
  const [online, setOnline] = useState<OnlineState>(initialState);

  useEffect(() => {
    const interval = setInterval(updateOnlineState, 500);
    return () => clearInterval(interval);
  }, [online]);

  useEffect(() => {
    syncAnalysis();
  }, [online]);

  async function syncAnalysis() {
    if (!online.isAnalysisOnline) {
      return;
    }

    await AnalysisSyncHandler.sync();
  }

  async function updateOnlineState() {
    const isReportOnlinePromise = isReportServiceOnline();

    const isAuthOnlinePromise = isAuthServiceOnline();

    const isAnalysisOnlinePromise =
      AnalysisServiceWatchdog.isAnalysisServiceOnline();

    const [isReportOnline, isAuthOnline, isAnalysisOnline] = await Promise.all([
      isReportOnlinePromise,
      isAuthOnlinePromise,
      isAnalysisOnlinePromise,
    ]);

    const onlineState = { isReportOnline, isAuthOnline, isAnalysisOnline };

    if (
      onlineState.isAnalysisOnline !== online.isAnalysisOnline ||
      onlineState.isAuthOnline !== online.isAuthOnline ||
      onlineState.isReportOnline !== online.isReportOnline
    ) {
      setOnline(onlineState);
    }
  }

  return (
    <OnlineContext.Provider value={online}>{children}</OnlineContext.Provider>
  );
}

export const isAuthServiceOnline = async () =>
  await isServiceOnline(Connections.GATEKEEPER + "/health");

export const isReportServiceOnline = async () =>
  await isServiceOnline(Connections.REPORTER + "/health");

async function isServiceOnline(healthEndpoint: string): Promise<boolean> {
  return client
    .get(healthEndpoint)
    .then((response) => response.status === 200)
    .catch((_) => false);
}

export { OnlineContext, OnlineProvider };
