export interface ReporterProps {
   id: string;
   reporter: string;
   content: string;
   reportType: string;
   createdAt: string;
   status: string;
}

export interface CreateCommentProps {
   content: string;
   reportId: string;
}

export interface Comment {
   id: string;
   authorId: string;
   content: string;
   reportId: string;
   createdAt: Date;
}
