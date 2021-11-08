const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    const fareMultiplier = function(fare){
        return multiplier * fare;
    }
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driversArray, driversFuncOption) {
    return driversFuncOption(driversArray);
};
