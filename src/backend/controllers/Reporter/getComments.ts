import axios from "axios";
import { Connections } from "../../enums/connections";
import {
  GetCommentsFromLocalStorage,
  GetUserTokenFromStorage,
} from "../../utils";
import { Comment } from "./types";
import { LocalData } from "../../enums/localData";
import { isReportServiceOnline } from "../../contexts";

export async function GetComments(reportId: string): Promise<Comment[]> {
  try {
    const online = await isReportServiceOnline();
    const token = GetUserTokenFromStorage();
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    var data: Comment[] = [];
    if (online) {
      const response = await axios.get<Comment[]>(
        Connections.REPORTER + "/Comments" + `/${reportId}`,
        config
      );
      localStorage.removeItem(LocalData.COMMENTS_KEY);
      localStorage.setItem(
        LocalData.COMMENTS_KEY,
        JSON.stringify(response.data)
      );
      data = response.data;
    } else {
      data = GetCommentsFromLocalStorage();
    }

    // Convert dates, as it comes as a string.
    return data.map((comment) => {
      comment.createdAt = new Date(comment.createdAt);
      return comment;
    });
  } catch (error) {
    throw new Error("Erro ao buscar comentários");
  }
}
