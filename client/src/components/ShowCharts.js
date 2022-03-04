import React, { useEffect, useLayoutEffect, useState } from "react";
import Charts from "./Charts"
import getEvent from  '../utils/getEvents';
const ShowCharts = () => {
   const [pagesData, setPagesData] = useState([]);
  //  const [elementsData, setElementsData] = useState([]);

    useLayoutEffect(() => {
     
      let pages =  async() => {
       const response =  await getEvent({analyticsType: 'pages'});
       console.log('rrr' , response)
       const data = await response.json();
         return data;
      } 
       const pageData =  pages();
      
        setPagesData(pageData.events)

      
        console.log('pagesData',pagesData)
        
      },[pagesData]);

return(
    
    <>
    <div>Charts</div>
    <Charts
        chartName = 'List pages'
        data ={pagesData}
        itemName  ='_id'
    />
    </>
);

}

export default ShowCharts;