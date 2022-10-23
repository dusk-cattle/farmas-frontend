// deps
import { useEffect, useState } from 'react';
import ReactHighcharts from 'react-highcharts';

// usecases
import { getChartData } from '../../../../usecases';

const chartConfig: Highcharts.Options = {
  chart: {
    spacingLeft: 12,
    marginRight: 24,
    height: 300,
    backgroundColor: '#fafafa',
    type: 'spline',
  },
  title: {
    text: 'Elementos do solo',
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '1rem',
    },
  },

  legend: {
    itemStyle: {
      fontFamily: "'Inter', sans-serif",
    },
  },
  xAxis: {
    labels: {
      style: {
        fontFamily: "'Inter', sans-serif",
      },
    },
    type: 'datetime',
    dateTimeLabelFormats: {
      month: '%e. %b',
      year: '%b',
    },
  },
  yAxis: {
    title: null,
    labels: {
      style: {
        fontFamily: "'Inter', sans-serif",
      },
    },
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e. %b}: {point.y:.2f} m',
  },

  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 2.5,
      },
    },
  },
};

export function Chart() {
  const [series, setSeries] = useState<Highcharts.IndividualSeriesOptions[]>();

  useEffect(() => {
    (async () => {
      const chartData = await getChartData();

      setSeries(
        Object.entries(chartData).map(([name, data]) => ({
          name,
          data,
        }))
      );
    })();
  }, []);

  return <ReactHighcharts config={{ ...chartConfig, series }} />;
}
