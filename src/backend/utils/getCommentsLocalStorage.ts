import { LocalData } from "../enums";
import { Comment } from "../controllers/Reporter/types";

export function GetCommentsFromLocalStorage(): Comment[] {
   const item = localStorage.getItem(LocalData.COMMENTS_KEY);
   var comments: Comment[] = [];
   if (item != null) {
      comments = JSON.parse(item);
   }
   return comments;
}
