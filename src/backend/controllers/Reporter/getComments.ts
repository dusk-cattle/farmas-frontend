import axios from "axios";
import { Connections } from "../../enums/connections";
import { GetUserTokenFromStorage } from "../../utils";
import { Comment } from "./types";

export async function GetComments(reportId: string): Promise<Comment[]> {
   try {
      const token = GetUserTokenFromStorage();
      const config = {
         headers: {
            Authorization: "Bearer " + token,
         },
      };

      const response = await axios.get<Comment[]>(Connections.REPORTER + "/Comments" + `/${reportId}`, config);
      const data = response.data;

      // Convert dates, as it comes as a string.
      return data.map((comment) => {
         comment.createdAt = new Date(comment.createdAt);
         return comment;
      });
   } catch (error) {
      throw new Error("Erro ao buscar comentários");
   }
}
