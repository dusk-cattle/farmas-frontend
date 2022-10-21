import ReactHighcharts from 'react-highcharts';

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
  return <ReactHighcharts config={chartConfig} />;
}
