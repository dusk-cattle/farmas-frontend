export interface Analysis {
  substances: {
    [substanceID in string]: number;
  };
  timestamp: Date;
}
