// types
import axios, { AxiosError } from "axios";
import { Connections } from "../../enums";
import { LoginProps, LoginResponse } from "./types";

export async function Login(props: LoginProps) {
   try {
      // mocked resourceId.
      props.resourceId = "1ba8dbf5-294a-486a-9c4b-88d384f7f12c";

      const response = await axios.post<LoginResponse>(Connections.GATEKEEPER + "/Session", props);
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
