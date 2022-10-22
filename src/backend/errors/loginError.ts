export class LoginError extends Error {
   statusCode: number;
   constructor(status: number) {
      super();
      this.statusCode = status;
      Object.setPrototypeOf(this, LoginError.prototype);
   }

   Message(): string {
      var message: string = "Error on login ";
      if (this.statusCode == 401) {
         message += "password doesn't match";
      } else if (this.statusCode == 403) {
         message += " User didn't exist";
      }
      return this.message;
   }
}
