import React, {useEffect, useRef} from "react";
import {MakeMeARadar} from '../utils/functions/global';

const Radar = ({data}) => {
    const chart = useRef("chart");

    useEffect(()=>{
      if(data.length !== 0) {
        const ctx = chart.current.getContext("2d");
        // create my radar
        MakeMeARadar(ctx,
            ['points', 'temps', 'position départ', 'position arrivé'],
            data.map(pilote=>{
              return {
                label: pilote.forename,
                data: [pilote.points,pilote.time,pilote.grid, pilote.position]
              }
            })
        )
      }
    }, [data])

    return (
      <canvas ref={chart}>
        
      </canvas>
    )
}

export default Radar