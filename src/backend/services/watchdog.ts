import { AxiosInstance } from "axios";

export abstract class WatchdogBase {
  private readonly axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  protected async isServiceOnline(healthUri: string): Promise<boolean> {
    return this.axiosInstance
      .get(healthUri)
      .then((response) => response.status === 200)
      .catch((_) => false);
  }
}
