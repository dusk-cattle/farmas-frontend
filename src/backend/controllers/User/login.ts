// types
import axios from "axios";
import { LoginProps } from "./types";

let axiosConfig = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
   },
};

export async function Login(props: LoginProps) {
   return await new Promise<boolean>((resolve) => {
      const ms = 1;
      const s = 1000 * ms;
      console.log(props);
      try {
         const teste = {
            email: "usuarioteste@email.com",
            password: "12345",
         };
         axios.post("https://localhost:5001/api/Session", props, axiosConfig).then((response) => {
            console.log(response.data);
            setTimeout(() => {
               return resolve(true);
            }, 1 * s);
         });
      } catch (error) {
         setTimeout(() => {
            return resolve(false);
         }, 1 * s);
      }
   });
}
