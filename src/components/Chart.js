import React from 'react';
// import ReactDOM from 'react-dom';
// import * as V from 'victory';
import { VictoryBar, VictoryChart } from 'victory';
import './Chart.css';

export default function Chart() {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <VictoryChart>
      <VictoryBar
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      />
    </VictoryChart>
  );
}
