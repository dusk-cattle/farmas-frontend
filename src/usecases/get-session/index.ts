// backend
import { GetSession } from '../../backend';

// models
import { Session } from '../../models';

// enums
import { Roles } from '../../enums';

export async function getSession(): Promise<Session | null> {
  try {
    const response = await GetSession();

    return response
      ? {
          user: {
            id: response.user.id,
            name: response.user.name,
            email: response.user.email,
          },
          role: response.role as Roles | null,
          resource: response.resource,
        }
      : null;
  } catch (e) {
    return null;
  }
}
