// types
import axios from "axios";
import { Connections } from "../../enums";
import { LoginProps, LoginResponse } from "./types";

export async function Login(props: LoginProps) {
   try {
      const response = await axios.post<LoginResponse>(Connections.GATEKEEPER + "/Session", props);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
   } catch (error) {
      console.log(error);
      return null;
   }
}
