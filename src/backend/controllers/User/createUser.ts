import axios from "axios";
import { CreateUserProps } from "./types";

export async function CreateUser(props: CreateUserProps) {
   try {
      const response = await axios.post("http://localhost:4000/api/User", props);
      return response.data;
   } catch (error) {
      console.log(error);
      return false;
   }
}
