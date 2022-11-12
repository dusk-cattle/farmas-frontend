import axios from "axios";
import { Connections } from "../../enums/connections";
import { CreateCommentProps, Comment } from "./types";

export async function CreateComment(
  commentProps: CreateCommentProps
): Promise<Comment> {
  try {
    const item = localStorage.getItem("user");

    let token = " ";
    if (item != null) {
      token = JSON.parse(item)["token"];
    }

    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const { data } = await axios.post<Comment>(
      Connections.REPORTER + "/Comments",
      commentProps,
      config
    );

    // convert data as it comes as a string.
    data.createdAt = new Date(data.createdAt);

    return data;
  } catch (error) {
    throw new Error("Error while creating comment");
  }
}
