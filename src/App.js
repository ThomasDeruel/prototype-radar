import React, {useState, useEffect} from 'react';
import Radar from './components/Radar';
// functions
import {fetchAll, fusionDataById, SuperFilter} from './utils/functions/data';

import './App.css';

const App = () => {
  // general state
  const [pilotes,setPilotes] = useState([]);
  
  useEffect(()=>{
  // to use "async" in hooks
  // make sure you use a async function, if not it's doesn't work
  const fetchData = async() => {
    //fetchAll data
    const urls = ["data/results.json","data/drivers.json","data/races.json"];

    const allData = await fetchAll(urls);
    
    const driverdata_segment = await fusionDataById(allData[0],allData[1], "driverId");
 
      const driversData = 
        SuperFilter(
          fusionDataById(driverdata_segment,allData[2], "raceId"),
          "year",
          "2007");

      const pilote_1 = await driversData[0];
      const pilote_2 = await driversData[1];

      setPilotes([pilote_1,pilote_2]);
    };
    fetchData();
  }, [pilotes])
  
  return (
    <div className="App">
      <Radar data={pilotes}/>
    </div>
  );
}

export default App;
