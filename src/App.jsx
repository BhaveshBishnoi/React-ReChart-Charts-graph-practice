import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { PieChart, Pie } from "recharts";
import { BarChart, Bar, AreaChart, Area } from "recharts";

function App() {
  const Lang = [
    { name: "python", popular: 7, fee: 6 },
    { name: "JS", popular: 10, fee: 9 },
    { name: "Java", popular: 8, fee: 8 },
    { name: "C", popular: 7, fee: 5 },
    { name: "C#", popular: 7, fee: 6 },
    { name: "Rust", popular: 5, fee: 5 },
    { name: "PHP", popular: 4, fee: 6 },
  ];
  return (
    <>
      <div id="charts">
        {/* LineChart Started */}
        <LineChart data={Lang} width={500} height={300}>
          <CartesianGrid strokeDasharray={2} />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="popular"
            stroke="#af0000"
            activeDot={{ r: 5 }}
          />
          <Line dataKey="fee" stroke="#34af00" activeDot={{ r: 5 }} />
        </LineChart>
        {/* BarChart Started */}
        <BarChart data={Lang} width={500} height={300}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey={"popular"} fill="#20b2aa" />
          <Bar dataKey={"fee"} fill="#f7b902" />
        </BarChart>
        {/* PieChart Started */}

        <PieChart width={500} height={300}>
          <Pie
            data={Lang}
            dataKey={"popular"}
            fill="#20b2aa"
            cx={"50%"}
            cy={"50%"}
            label
          />
          <Pie data={Lang} dataKey={"fee"} fill="#20b2aa" />
          <Tooltip />
        </PieChart>

        {/* RadarChart Started */}

        <RadarChart
          width={500}
          height={300}
          cx={"50%"}
          cy={"50%"}
          data={Lang}
          outerRadius={"80%"}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey={"pupular"} />
          <PolarRadiusAxis />
          <Radar
            name={"name"}
            dataKey={"popular"}
            stroke="#5f5fd3"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>

        {/* AreaChart Started */}

        <AreaChart width={500} height={300} data={Lang}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey={"popular"} stroke="#8884d8" fill="#8884d8" />
          <Area
            type={"bump"}
            dataKey={"fee"}
            stroke="#02c612"
            fill="#01b41f"
            opacity={"0.6"}
          />
        </AreaChart>
      </div>
    </>
  );
}

export default App;
