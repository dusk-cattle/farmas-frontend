// backend
import { GetSubstances } from '../../backend';

// models
import { Substance } from '../../models';

export async function getSubstances(): Promise<Substance[]> {
  const response = await GetSubstances();

  return response.map<Substance>((substance) => ({
    id: substance.id,
    name: substance.name,
  }));
}
