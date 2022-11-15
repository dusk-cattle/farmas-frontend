// models
import { Farm } from '../../models';

// backend
import { GetResources } from '../../backend';

export async function getFarms(): Promise<Farm[]> {
  const response = (await GetResources()) ?? [];

  return response.map((value) => ({ id: value.id, name: value.name }));
}
