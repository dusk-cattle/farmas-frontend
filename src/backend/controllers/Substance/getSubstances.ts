// types
import axios from 'axios';

import { SubstanceProps } from './types';

let axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
export async function GetSubstances(): Promise<SubstanceProps> {
  try {
    const response = await axios.get<SubstanceProps>(
      'http://localhost:5000/SubstanceRegistry',
      axiosConfig
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
