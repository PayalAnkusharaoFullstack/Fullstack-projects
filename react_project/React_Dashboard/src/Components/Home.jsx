import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-google-charts";


function Home() {


  
 const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

 const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

 const data2 = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options2 = {
    title: "My Daily Activities",
  };


 const data3 = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

 const options3 = {
  title: "Bar/area interval chart",
  curveType: "function",
  intervals: { color: "series-color" },
  interval: {
    i0: {
      color: "#4374E0",
      style: "bars",
      barWidth: 0,
      lineWidth: 4,
      pointSize: 10,
      fillOpacity: 1,
    },
    i1: {
      color: "#E49307",
      style: "bars",
      barWidth: 0,
      lineWidth: 4,
      pointSize: 10,
      fillOpacity: 1,
    },
    i2: { style: "area", curveType: "function", fillOpacity: 0.3 },
  },
  legend: "none",
};

 const data4 = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

 const options4 = {
  title: "Sticks, default",
  curveType: "function",
  series: [{ color: "#E7711B" }],
  intervals: { style: "area" },
  legend: "none",
};


 const data5 = [
  [
    { type: "number", label: "x" },
    { type: "number", label: "values" },
    { id: "i0", type: "number", role: "interval" },
    { id: "i1", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
    { id: "i2", type: "number", role: "interval" },
  ],
  [1, 100, 90, 110, 85, 96, 104, 120],
  [2, 120, 95, 130, 90, 113, 124, 140],
  [3, 130, 105, 140, 100, 117, 133, 139],
  [4, 90, 85, 95, 85, 88, 92, 95],
  [5, 70, 74, 63, 67, 69, 70, 72],
  [6, 30, 39, 22, 21, 28, 34, 40],
  [7, 80, 77, 83, 70, 77, 85, 90],
  [8, 100, 90, 110, 85, 95, 102, 110],
];

 const options5 = {
  title: "Bars, default",
  curveType: "function",
  series: [{ color: "#D9544C" }],
  intervals: { style: "bars" },
  legend: "none",
};

 const data0 = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"],
  ["Silver", 10.49, "silver"],
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color:rgb(169, 13, 109)"],
];

const dataOld = [
  ["Name", "Popularity"],
  ["Cesar", 250],
  ["Rachel", 4200],
  ["Patrick", 2900],
  ["Eric", 8200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Cesar", 370],
  ["Rachel", 600],
  ["Patrick", 700],
  ["Eric", 1500],
];

 const diffdata = {
  old: dataOld,
  new: dataNew,
};

 const data6 = [
  ["Pizza", "Popularity"],
  ["Pepperoni", 33],
  ["Hawaiian", 26],
  ["Mushroom", 22],
  ["Sausage", 10], 
  ["Anchovies", 9], 
];
const options6 = {
  title: "Popularity of Types of Pizza",
  sliceVisibilityThreshold: 0.2, 
};


  return (
    <>
            <h1 className=" text-center dashboard">Dashboard</h1>


      <div id="content ">
        <div className="container-fluid">
          <div className="row containt">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="box PRODUCTS ">
                <h3>PRODUCTS</h3>
                <h2>700</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="box CATEGORIES">
                <h3>CATEGORIES</h3>
                <h2>30</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="box CUSTOMERS">
                <h3>CUSTOMERS</h3>
                <h2>3000</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="box ALERTS">
                <h3>ALERTS</h3>
                <h2>20</h2>
              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid">
          <div className="row chart ">
            <div className="col-12 col-md-6 col-lg-4 p-2  rounded-5">
                 <Chart
          chartType="LineChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2  rounded-5">
        <Chart
          chartType="PieChart"
          data={data2}
          options={options2}
          width="100%"
          height="300px"
        />
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2  rounded-5">
              <Chart
                chartType="LineChart"
                data={data3}
                options={options3}
                width="100%"
                height="300px"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2  rounded-5">
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="300px"
            diffdata={diffdata}
          />
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2  rounded-5">
              <Chart
                chartType="LineChart"
                data={data5}
                options={options5}
                width="100%"
                height="300px"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 p-2  rounded-5">
        <Chart
          chartType="PieChart"
          data={data6}
          options={options6}
          width="100%"
          height="300px"
        />
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Home