import { GiveRole } from '../../backend/controllers/User/giveRole';

export async function associateWorker(workerEmail: string, farmID?: string) {
  GiveRole({
    thirdUserEmail: workerEmail,
    role: 'worker',
    resourceId: farmID,
  });
}
