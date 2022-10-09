// backend
import { GetSession } from '../../backend';

// models
import { Session } from '../../models';

export async function getSession(): Promise<Session | null> {
  const response = await GetSession();

  return response as Session | null;
}
