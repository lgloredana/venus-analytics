import React from "react";

const App = () => {
  const chart = useRef(null);

    useLayoutEffect(() => {
      let chart = am4core.create("chartdivPages", am4charts.PieChart);
  
      chart.data = [
    {
      "page": "Page1",
      "visits": 3
    }, {
      "page": "Page2",
      "visits": 3
    }, {
      "page": "Page2",
      "visits": 5
    }
   ];
  
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "visits";
      pieSeries.dataFields.category = "page";

      
  
      return () => {
        chart.dispose();
      };
    }, []);

/*
    useLayoutEffect(() => {
      let chart = am4core.create("chartdivButtons", am4charts.PieChart);
  
      let data = [{
        category: "Buton 1",
        value1: 1000,
        value2: 588
      }, {
        category: "Buton 2",
        value1: 1200,
        value2: 1800
      }, {
        category: "Buton 3",
        value1: 850,
        value2: 1230
      }];

      // Create Y-axis
let yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  })
);
     
// Create X-Axis
let xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
    categoryField: "category"
  })
);
xAxis.data.setAll(data);

// Create series
let series1 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value1",
    categoryXField: "category"
  })
);
series1.data.setAll(data);

let series2 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value2",
    categoryXField: "category"
  })
);
series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

      xAxis.data.setAll(data);
      return () => {
        chart.dispose();
      };
    }, []);

*/



  return ( 
    <>   
     <div>Graph</div>
     <div id="chartdivPages" style={{ width: "50%", height: "500px" }}></div>

     <div id="chartdivButtons" style={{ width: "50%", height: "500px" }}></div>
    </>

     )
};

export default App;
