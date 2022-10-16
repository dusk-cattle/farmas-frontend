import axios from "axios";
import { Connections } from "../../enums";
import { CreateUserProps } from "./types";

export async function CreateUser(props: CreateUserProps) {
   try {
      const response = await axios.post(Connections.GATEKEEPER + "/User", props);
      return response.data;
   } catch (error) {
      console.log(error);
      return false;
   }
}
