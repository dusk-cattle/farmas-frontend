// types
import axios from "axios";

import { SubstanceProps } from "./types";

let axiosConfig = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
   },
};
export default async function GetSubstances() {
   try {
      const response = await axios.get<SubstanceProps>("http://localhost:5000/SubstanceRegistry", axiosConfig);
      return response;
   } catch (error) {
      return [];
   }
}
