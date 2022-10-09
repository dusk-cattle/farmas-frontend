// models
import { Substance } from '../../models';

export interface SelectSubstanceProps {
  id?: string;
  substances: Substance[];
  onSelect?(substanceID: string): void;
}

export interface ContainerProps {
  isActive: boolean;
}

export interface ArrowIconProps {
  isActive: boolean;
}

export interface OptionProps {
  selected?: boolean;
}
