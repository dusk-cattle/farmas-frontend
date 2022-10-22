// deps
import { useEffect } from 'react';
import ReactHighcharts from 'react-highcharts';

// usecases
import { getChartData } from '../../../../usecases';

const chartConfig: Highcharts.Options = {
  chart: {
    style: {
      background: '#FAFAFA',
    },
  },
  series: [
    {
      name: 'Cálcio',
      type: 'spline',
      data: [3, 7, 2, 4, 1, 2],
    },
  ],
};

export function Chart() {
  useEffect(() => {
    getChartData();
  }, []);

  return <ReactHighcharts config={chartConfig} />;
}
