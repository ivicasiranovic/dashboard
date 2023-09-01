import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

function Chart() {
  const data = [
    {
      name: "Jan",
      expenses: 4000,
      returns: 2400,
      total: 2400,
    },
    {
      name: "Feb",
      expenses: 3000,
      returns: 1398,
      total: 2210,
    },
    {
      name: "March",
      expenses: 2000,
      returns: 9800,
      total: 2290,
    },
    {
      name: "April",
      expenses: 2780,
      returns: 3908,
      total: 2000,
    },
    {
      name: "May",
      expenses: 1890,
      returns: 4800,
      total: 2181,
    },
    {
      name: "Jun",
      expenses: 2390,
      returns: 3800,
      total: 2500,
    },
    {
      name: "July",
      expenses: 3490,
      returns: 4300,
      total: 2100,
    },
  ];
  return (
    <div className="chartContainer">
      <AreaChart
        width={1050}
        height={350}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#d95087" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#d95087" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="expenses"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="returns"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorRv)"
        />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}

export default Chart;
