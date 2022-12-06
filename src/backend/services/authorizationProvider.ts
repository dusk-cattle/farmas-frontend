import { LocalData } from "../enums";

type IAuthorizationMetadata = {
  headers: { Authorization: string };
};

export interface IAuthorizationProvider {
  getAuthorizationMetadata(): IAuthorizationMetadata;
}

class InternalAuthorizationProvider implements IAuthorizationProvider {
  private readonly USER_CACHE_KEY = LocalData.USER_KEY;

  public getAuthorizationMetadata(): IAuthorizationMetadata {
    const token = this.getCurrentAuthorizationToken();

    return { headers: { Authorization: token } };
  }

  private getCurrentAuthorizationToken() {
    const item = localStorage.getItem(this.USER_CACHE_KEY);

    if (item != null) {
      return JSON.parse(item)["token"];
    }

    return "";
  }
}

export const AuthorizationProvider = new InternalAuthorizationProvider();
