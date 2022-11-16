// models
import { Report } from '../../../../../../models';

export interface SearchInputProps {
  search?(filterReports: (allReports: Report[]) => Report[]): void;
}
