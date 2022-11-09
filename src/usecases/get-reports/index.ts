// backend
import { GetReporter } from '../../backend';

// models
import { Report } from '../../models';

export async function getReports(): Promise<Report[]> {
  const response = await GetReporter();

  return response.map((value) => ({
    html: value.content,
    date: value.createdAt,
  }));
}
