// deps
import { useEffect, useState } from 'react';

// models
import { FarmShape } from '../../../../models';

// usecases
import { getFarmShape } from '../../../../usecases';

export function FarmMap() {
  const [farmShape, setFarmShape] = useState<FarmShape>([]);

  useEffect(() => {
    (async () => {
      const shape = await getFarmShape();

      const minX = shape.reduce(
        (min, value) => (value.x < min ? value.x : min),
        Number.MAX_SAFE_INTEGER
      );
      const maxX = shape.reduce(
        (max, value) => (value.x > max ? value.x : max),
        Number.MIN_SAFE_INTEGER
      );

      const minY = shape.reduce(
        (min, value) => (value.y < min ? value.y : min),
        Number.MAX_SAFE_INTEGER
      );
      const maxY = shape.reduce(
        (max, value) => (value.y > max ? value.y : max),
        Number.MIN_SAFE_INTEGER
      );

      const normShape: FarmShape = [];

      shape.forEach((value) => {
        normShape.push({
          x: (180 * (value.x - minX)) / (maxX - minX) + 10,
          y: (180 * (value.y - minY)) / (maxY - minY) + 10,
        });
      });

      setFarmShape(normShape);
    })();
  }, []);

  return (
    <svg
      viewBox="0 0 200 200"
      width={200}
      height={200}
      style={{
        transform: 'rotate(-90deg)',
        opacity: 0.25,
      }}
    >
      <path
        fill="black"
        stroke="black"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`${
          farmShape.length
            ? farmShape
                .map((value, i) => `${i ? 'L' : 'M'}${value.x} ${value.y}`)
                .join(' ') + ' Z'
            : ''
        }`}
      />
    </svg>
  );
}
