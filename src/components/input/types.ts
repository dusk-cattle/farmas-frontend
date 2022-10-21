// deps
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'] | 'substance';
  unit?: string;
  info?: string;
}

export interface ContainerProps {
  error?: boolean;
  gap?: number;
}
