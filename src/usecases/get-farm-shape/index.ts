// backend
import { GetCoordinates } from '../../backend';

// models
import { FarmShape } from '../../models';

export async function getFarmShape() {
  const { coordinates } = await GetCoordinates();

  const farmShape: FarmShape = [];

  coordinates.forEach((value) => {
    farmShape.push({
      x:
        (value.latitude.hours +
          value.latitude.minutes / 60 +
          value.latitude.seconds / (60 * 60)) *
        value.latitude.direction,
      y:
        (value.longitude.hours +
          value.longitude.minutes / 60 +
          value.longitude.seconds / (60 * 60)) *
        value.longitude.direction,
    });
  });

  return farmShape;
}
