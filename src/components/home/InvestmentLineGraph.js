import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
      name: '31 Jul 2022',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '1 Aug 2022',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2 Aug 2022',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '3 Aug 2022',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '4 Aug 2022',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '5 Aug 2022',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '6 Aug 2022',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const InvestmentLineGraph = () => {
    return (
        <div className="card-container md col-lg-8 col-md-12">
            <p className="heading-2">Investments</p>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default InvestmentLineGraph;