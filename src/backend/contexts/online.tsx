import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

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

  async function updateOnlineState() {
    const isReportOnlinePromise = isServiceOnline(
      Connections.REPORTER + "/health"
    );

    const isAuthOnlinePromise = isServiceOnline(
      Connections.GATEKEEPER + "/health"
    );

    const isAnalysisOnlinePromise = isServiceOnline(
      Connections.FARMAS + "/health"
    );

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

  async function isServiceOnline(healthEndpoint: string): Promise<boolean> {
    return client
      .get(healthEndpoint)
      .then((response) => response.status === 200)
      .catch((_) => false);
  }

  return (
    <OnlineContext.Provider value={online}>{children}</OnlineContext.Provider>
  );
}

export { OnlineContext, OnlineProvider };
