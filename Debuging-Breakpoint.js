
const measurementkelvin = function(){
     const measurement ={
        name :'temp',
        unit : 'celcius',

//() Fixing the problems;

       /*  value :Number(prompt('Degrees in Celcius')), */
       value :10,
     } 

    /*  console.log(measurement) */
    //() Find
     console.table(measurement)


    /*  console.trace(measurement);
     console.timeStamp(measurement) */
   /*   console.log(measurement.value);

/() Debuging
     console.warn(measurement.value)
     console.error(measurement.value) */

     const kelvin = (measurement.value +273);
     return kelvin // here return are optiona part of function

}// At here there is adebug , it does not add the values;
 //(A).  Identity ;
console.warn(measurementkelvin());

//() D-Debugger use to fix the the debug;

