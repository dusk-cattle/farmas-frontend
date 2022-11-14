// deps
import { useEffect, useState } from 'react';

// models
import { FarmShape } from '../../../../models';

// usecases
import { getFarmShape } from '../../../../usecases';

// styles
import { UnemployedContainer } from './styles';

export function FarmMap() {
  const [farmShape, setFarmShape] = useState<FarmShape>([]);

  const [unemployed, setUnemployed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
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
      } catch (e) {
        setUnemployed(true);
      }
    })();
  }, []);

  if (unemployed)
    return (
      <UnemployedContainer>
        <b>Não há fazenda para exibir</b>
        <p>Entre em contato com o dono da fazenda e forneça seu e-mail</p>
      </UnemployedContainer>
    );

  function renderGrass() {
    const grass: JSX.Element[] = [];

    for (let i = 0; i < 10; i++) {
      const x = Math.random() * 200;
      const y = Math.random() * 200;

      grass.push(
        <path
          key={i}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#287830"
          fill="transparent"
          strokeWidth={1}
          opacity={0.5}
          d={`M${x} ${y} l4 -1 l-3 4 l4 2 l-4 2 l3 4 l-4 -1`}
        />
      );
    }

    return grass;
  }

  function renderFence2() {
    const fence: JSX.Element[] = [];

    for (let i = 0; i < farmShape.length; i++) {
      const x1 = farmShape[i].x + 5;
      const y1 = farmShape[i].y;
      const x2 = farmShape[(i + 1) % farmShape.length].x + 5;
      const y2 = farmShape[(i + 1) % farmShape.length].y;

      fence.push(
        <g key={i}>
          <path
            stroke="#5e3b18"
            strokeWidth={3}
            d={`M${x1 - 2} ${y1} L${x2 - 2} ${y2}`}
          />
          <path
            stroke="#964b00"
            strokeWidth={2}
            d={`M${x1} ${y1} L${x2} ${y2}`}
          />

          <path
            stroke="#5e3b18"
            strokeWidth={3}
            d={`M${x1 + 4} ${y1} L${x2 + 4} ${y2}`}
          />
          <path
            stroke="#964b00"
            strokeWidth={2}
            d={`M${x1 + 6} ${y1} L${x2 + 6} ${y2}`}
          />
        </g>
      );
    }

    return fence;
  }

  function renderFence() {
    const fence: JSX.Element[] = [];

    farmShape.forEach(({ x, y }, i) => {
      fence.push(
        <g key={i}>
          <path
            stroke="transparent"
            fill="#402912"
            d={`M${x + 14} ${y + 4} l-12 -1 l-5 -1 l13 -1`}
          />
          <path
            stroke="transparent"
            fill="#5e3b18"
            d={`M${x + 10} ${y - 4} l-12 1 l-1 5 l13 0`}
          />
          <path
            stroke="transparent"
            fill="#964b00"
            d={`M${x + 10} ${y - 4} l5 1 l-1 7 l-5 -2`}
          />
        </g>
      );
    });

    for (let i = 0; i < farmShape.length; i++) {
      const x = (farmShape[i].x + farmShape[(i + 1) % farmShape.length].x) / 2;
      const y = (farmShape[i].y + farmShape[(i + 1) % farmShape.length].y) / 2;

      fence.push(
        <g key={-i - 1}>
          <path
            stroke="transparent"
            fill="#402912"
            d={`M${x + 14} ${y + 4} l-12 -1 l-5 -1 l13 -1`}
          />
          <path
            stroke="transparent"
            fill="#5e3b18"
            d={`M${x + 10} ${y - 4} l-12 1 l-1 5 l13 0`}
          />
          <path
            stroke="transparent"
            fill="#964b00"
            d={`M${x + 10} ${y - 4} l5 1 l-1 7 l-5 -2`}
          />
        </g>
      );
    }

    return fence;
  }

  return (
    <svg
      viewBox="0 0 200 200"
      width={250}
      height={300}
      style={{ transform: 'rotate(-90deg)' }}
    >
      <path
        fill="#287830"
        stroke="#287830"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
        d={`${
          farmShape.length
            ? farmShape
                .map((value, i) => `${i ? 'L' : 'M'}${value.x} ${value.y}`)
                .join(' ') + ' Z'
            : ''
        }`}
      />
      {renderGrass()}
      {renderFence2()}
      {renderFence()}
    </svg>
  );
}
