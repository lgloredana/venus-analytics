import React, { useEffect, useLayoutEffect, useRef }  from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Charts = (props) => {
    const {chartName, data, itemName} = props;
    const chart = useRef(null);
  
      useLayoutEffect(() => {
       let  chart = am4core.create("chartdivPages", am4charts.PieChart);
       
        const xxx = [{"page":"Page1","count":1}, {"page":"Page2","count":1}, {"page":"Page3","count":1}]
        chart.data = xxx
    
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "count";
        pieSeries.dataFields.category ="page";
        return () => {
          chart.dispose();
        };
      }, []);
  
    return ( 
      <>   
       <div>Graph for {chartName}</div>
       <div id="chartdivPages" style={{ width: "70%", height: "500px" }}></div>
      </>
  
    )
  };
  am4core.useTheme(am4themes_animated);

  export default Charts;
