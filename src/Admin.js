import { customers } from './data';
import { VictoryChart, VictoryLabel } from 'victory';
import MyTable from './MyTable';
import MyCharts from './MyCharts';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default function Admin({ data }) {
  return (
    <div>
      <MyTable />
      <MyCharts />
    </div>
  );
}