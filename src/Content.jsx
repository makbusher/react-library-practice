import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 5]
  }]
}

export function Content() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <AwesomeButton type="primary">Button</AwesomeButton>
    </div>
  );
}