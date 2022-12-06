import axios from "axios";

import { Connections } from "../../enums";

import { WatchdogBase } from "../../services";

export interface IAnalysisServiceWatchdog {
  isAnalysisServiceOnline(): Promise<boolean>;
}

class InternalAnalysisServiceWatchdog
  extends WatchdogBase
  implements IAnalysisServiceWatchdog
{
  private readonly SERVICE_ENDPOINT = Connections.FARMAS;

  public async isAnalysisServiceOnline(): Promise<boolean> {
    const healthUri = `${this.SERVICE_ENDPOINT}/health`;

    return await this.isServiceOnline(healthUri);
  }
}

const lowLatencyAxiosInstance = axios.create({ timeout: 100 });

export const AnalysisServiceWatchdog = new InternalAnalysisServiceWatchdog(
  lowLatencyAxiosInstance
);
