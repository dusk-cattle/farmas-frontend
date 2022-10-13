// types
import axios from "axios";

import { SubstanceProps } from "./types";

export async function GetSubstances(): Promise<SubstanceProps> {
   try {
      const item = localStorage.getItem("user");
      var token = " ";
      if (item != null) {
         token = JSON.parse(item)["token"];
      }
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };
      const response = await axios.get("http://localhost:5090/api/SubstanceRegistry", config);
      return response.data;
   } catch (error) {
      return [];
   }
}
