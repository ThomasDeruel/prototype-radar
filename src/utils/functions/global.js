
import Chart from 'chart.js';

/**
 * create a radar
 * cf: https://www.chartjs.org/docs/latest/charts/radar.html
 * @param {HTMLCanvasElement.getContext()} ctx 
 * @param {Array} labels 
 * @param {Array} datasets 
 * @param  {Object(option)} arg 
 * 
 */
export function MakeMeARadar(ctx,labels,datasets,...arg){

    // optional
    const option = arg.length === 1 ? arg[0] : null;

    new Chart(ctx, {
        type: 'radar',
        data: {
          labels,
          datasets,
          option
        }
    })
}