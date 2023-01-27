// import logo from './logo.svg';
import "./App.css";
import Card from "./Components/Card";
import data from "./Components/Data";

// console.log(data['0'].seriesName)
// PRINT SERIES NAMES ONE BY ONE
// {
//   const seriesTitle =  data.map((currSeries)=>{
//     return currSeries.seriesName
//   })
//   console.log(seriesTitle)
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="heading_style">List of Top Netflix Series in 2023</h1>
        <div className="container">
          {data.map((currSeries, index) => {
            console.log(currSeries)
            return (
              <Card
                seriesInfo={data[index].seriesInfo}
                seriesName={data[index].seriesName}
                seriesPoster={data[index].seriesPoster}
              />
            );
          })}
          {/* <Card seriesInfo={data[1].seriesInfo} seriesName={data[1].seriesName} seriesPoster={data[1].seriesPoster} />
        <Card seriesInfo={data[2].seriesInfo} seriesName={data[2].seriesName} seriesPoster={data[2].seriesPoster} />
        <Card seriesInfo={data[3].seriesInfo} seriesName={data[3].seriesName} seriesPoster={data[3].seriesPoster} />
        <Card seriesInfo={data[4].seriesInfo} seriesName={data[4].seriesName} seriesPoster={data[4].seriesPoster} /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
