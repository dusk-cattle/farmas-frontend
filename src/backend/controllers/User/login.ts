// types
import axios from "axios";
import { LoginProps, LoginResponse } from "./types";

export async function Login(props: LoginProps) {
   try {
      const response = await axios.post<LoginResponse>("http://localhost:4000/api/Session", props);
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
   } catch (error) {
      return null;
   }
}
