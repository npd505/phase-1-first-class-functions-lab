const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(driversNames) {
    return driversNames.slice(0, 2); 
}

function returnLastTwoDrivers(driversNames) {
    return driversNames.slice(2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => {
    return (fare) =>
        fare * multiplier;
    }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, fun) {
    return fun(driversArray);
}