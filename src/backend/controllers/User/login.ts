// types
import axios from "axios";
import { Connections } from "../../enums";
import { LoginProps, LoginResponse } from "./types";

export async function Login(props: LoginProps) {
   try {
      const response = await axios.post<LoginResponse>(Connections.GATEKEEPER + "/Session", props);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
   } catch (error) {
      return null;
   }
}
