// models
import { User } from '../../models';

// enums
import { Roles } from '../../enums';

export async function getSession() {
  return await new Promise<User | null>((resolve) => {
    const ms = 1;
    const s = 1000 * ms;

    setTimeout(() => {
      return resolve(null);

      resolve({
        id: '2o84rhfg38r9gy32bq4oi',
        name: 'Jonas Manoel',
        role: Roles.OWNER,
        farmID: '4t0375g023rfepv3409qgh',
      });
    }, 1 * s);
  });
}
