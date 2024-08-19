import { Chart } from "react-google-charts";
import data from "./data";

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default App;
