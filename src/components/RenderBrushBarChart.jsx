import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Brush, Cell, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


export default class Example extends PureComponent {

  render() {
    const { data } =this.props;
    const GREEN = "#0F9788";
    const RED = "#FF0000"

    // const getIntroOfPage = (label) => {
    //   if (label === 'Page A') {
    //     return "Page A is about men's clothing";
    //   } if (label === 'Page B') {
    //     return "Page B is about women's dress";
    //   } if (label === 'Page C') {
    //     return "Page C is about women's bag";
    //   } if (label === 'Page D') {
    //     return 'Page D is about household goods';
    //   } if (label === 'Page E') {
    //     return 'Page E is about food';
    //   } if (label === 'Page F') {
    //     return 'Page F is about baby food';
    //   }
    // };

    // const CustomTooltip = ({ active, payload, label }) => {
    //   if (active) {
    //     return (
    //       <div className="custom-tooltip">
    //         <p className="label">{`${label} : ${payload[0].value}`}</p>
    //         <p className="intro">{getIntroOfPage(label)}</p>
    //         <p className="desc">Anything you want can be displayed here.</p>
    //       </div>
    //     );
    //   }
    //   return null;
    // };
    
    return (
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Tooltip content={<CustomTooltip />} /> */}
        {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Bar dataKey="US_GDP_quarterly_Growth" fill={GREEN}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry['US_GDP_quarterly_Growth'] > 0 ? GREEN:RED} />
            ))
          }
        </Bar>
      </BarChart>
    );
  }
}
