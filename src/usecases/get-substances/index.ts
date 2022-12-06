// backend
import { SubstanceController } from "../../backend";

// models
import { Substance } from "../../models";

export async function getSubstances(): Promise<Substance[]> {
  const response = await SubstanceController.getSubstances();

  return response.map<Substance>((substance) => ({
    id: substance.id,
    name: substance.name,
    unit: substance.unit,
    description: substance.description,
  }));
}
