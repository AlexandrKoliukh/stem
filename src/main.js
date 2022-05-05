import lp from 'javascript-lp-solver';
import mapValues from 'lodash/mapValues';

export const getResult = () => {
  const model = {
    optimize: { Прибыль: 'max', waste: 'min', count: 'max' },
    constraints: {
      wood: { max: 50 },
      iron: { max: 54 },
    },
    variables: {
      chairs: {
        wood: 10,
        iron: 6,
        Прибыль: 8,
        waste: 10,
        count: 1,
      },
      tables: {
        wood: 5,
        iron: 9,
        Прибыль: 6,
        waste: 5,
        count: 0,
      },
    },
    ints: {
      tables: 1,
      chairs: 1,
    },
  };

  const results = lp.Solve(model);

  const midpoints = mapValues(results.midpoint, (v) => {
    if (typeof v === 'number') {
      return Math.round(v);
    }

    return v;
  });

  results.midpoint = midpoints;

  console.log(results);
  return true;
};
