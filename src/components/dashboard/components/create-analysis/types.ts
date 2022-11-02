export type FormData = {
  [substanceID in string]: number;
} & { timestamp: string };

export interface CreateAnalysisProps {
  onClickBack?(): void;
}
