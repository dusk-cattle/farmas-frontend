import axios from "axios";
import { Connections } from "../../enums/connections";
import { Comment } from "./types";

export async function GetComments(reportId: string): Promise<Comment[]> {
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

        const response = await axios.get<Comment[]>(Connections.REPORTER + "/Comments" + `/${reportId}`, config);
        const data = response.data;

        // Convert dates, as it comes as a string.
        return data.map(comment => {
            comment.createdAt = new Date(comment.createdAt)
            return comment;
        });
    } catch (error) {
        throw new Error("Error while getting comments");
    }
}
