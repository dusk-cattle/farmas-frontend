// backend
import { GetCoordinates } from '../../backend';

// models
import { FarmShape } from '../../models';

export async function getFarmShape() {
  const coordinates = await GetCoordinates();

  if (!coordinates) return

  const farmShape: FarmShape = [];

  coordinates.coordinates.forEach((value) => {
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
