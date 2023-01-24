import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 5]
  }]
};

export function Content() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Welcome to React!</h1>
      <Calendar onChange={onChange} value={value} />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
      <AwesomeButton type="primary">Button</AwesomeButton>
    </div>
  );
}