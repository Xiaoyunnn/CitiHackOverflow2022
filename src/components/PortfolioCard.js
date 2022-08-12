import React from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PortfolioCard = ({title, data}) => {
    return (
        <div className="card-container md col-lg-6 col-md-6">
            <p className="heading-2">{title}</p>
            <PieChart width={400} height={200}>
                <Pie
                    data={data}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
        </div>
    );
};

export default PortfolioCard;