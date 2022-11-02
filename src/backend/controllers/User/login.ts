// types
import axios, { AxiosError } from "axios";
import { Connections } from "../../enums";
import { LoginProps, LoginResponse } from "./types";

export async function Login(props: LoginProps) {
   try {
      const response = await axios.post<LoginResponse>(Connections.GATEKEEPER + "/Session", props);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
   } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
         if (err.response.status === 403) {
            throw new Error("User does not exist");
         } else if (err.response.status === 401) {
            throw new Error("Password does not match");
         }
      }
   }
}
