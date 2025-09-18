import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const data = [{ name: "Progress", value: 72, fill: "#6366f1" },
    { name: "Progress", value: 50, fill: "#444547ff" },
        // { name: "Progress", value: 12, fill: "#4463feff" },
    { name: "Progress", value: 85, fill: "#bb89f8ff" },
    // { name: "Progress", value: 26, fill: "#bb89f8ff" },
];

export default function ChartComponent() {
  return (
    <div style={{ width: 260, height: 'auto',display:'flex', flex:1, justifyContent:'center', alignItems:'center' }}>
      <RadialBarChart
        width={200}
        height={200}
        innerRadius="45%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          dataKey="value"
          cornerRadius={50}
          background
          barSize={9}
        />
      </RadialBarChart>
      <div style={{
        position: "absolute",
        left: "125px",
        textAlign: "center",
        // fontFamily: "sans-serif",
        fontSize: 28,
        fontWeight: 600,
        // border: '1px red solid'
      }}>
        37
        <p
        style={{
        textAlign: "center",
        // fontFamily: "sans-serif",
        fontSize: 8,
        // fontWeight: 500,
        // border: '1px red solid'
      }}
        >Bad Software</p>
      </div>
    </div>
  );
}
