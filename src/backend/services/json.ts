export interface IJSONHandler {
  stringify(object: any): Promise<string>;
  parse<T>(str: string): Promise<T>;
}

class InternalJSONHandler implements IJSONHandler {
  public async stringify(object: any): Promise<string> {
    return new Promise((resolve, _) => {
      resolve(JSON.stringify(object));
    });
  }

  public async parse<T>(str: string): Promise<T> {
    return new Promise((resolve, _) => {
      resolve(JSON.parse(str));
    });
  }
}

export const JSONHandler = new InternalJSONHandler();
