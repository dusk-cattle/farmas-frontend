export class CustomError extends Error {
   statusCode: number;
   errorMsg: string;
   constructor(msg: string, status: number) {
      super(msg);
      this.statusCode = status;
      this.errorMsg = msg;
      Object.setPrototypeOf(this, CustomError.prototype);
   }

   showErrorMessage(): string {
      return "Erro de " + this.errorMsg;
   }
}
