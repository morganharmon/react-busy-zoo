import { VictoryChart, VictoryPie, VictoryLine, VictoryAxis } from 'victory';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const data2 = [
  { x: 'delicious pie', y: 3 },
  { x: 'rotten pie', y: 1 },
  { x: 'eaten pie', y: 4 }
];

export default function MyCharts() {
  return (
    <div className='tableDiv'>
      <VictoryChart height={200} width={300} domainPadding={5} padding={30} style={{ parent: { border: 'solid blue 2px' } }}>
        <VictoryAxis
          style={{ tickLabels: { fontSize: 4 } }}
          tickValues={[1, 2, 3, 4]}
          tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
        />
        <VictoryAxis
          style={{ tickLabels: { fontSize: 4 } }}
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryLine data={data} x="quarter" y="earnings" />
      </VictoryChart>
      <VictoryPie style={{ parent: { padding: '0px', border: 'solid red 2px' } }} radius={60} colorScale={['gold', 'green', 'silver']} data={data2} />
    </div>
  );
}