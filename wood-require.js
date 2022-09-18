function calculate(noOfChair, noOfBed, noOfTable) {
    let chairMeasurement = 3;
    let bedMeasurement = 50;
    let tableMeasurement = 10;
    let total = (chairMeasurement*noOfChair)+(bedMeasurement*noOfBed)+(tableMeasurement*noOfTable);
    console.log(total);

}

calculate(10,3,5)