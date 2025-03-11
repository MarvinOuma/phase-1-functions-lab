// Code your solution in this file!
// index.js

// returnFirstTwoDrivers
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  };
  
  // selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier
  const createFareMultiplier = (multiplier) => {
    return (fare) => fare * multiplier;
  };
  
  // fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers
  const selectDifferentDrivers = (drivers, selectorFunction) => {
    return selectorFunction(drivers);
  };
  
  // Optional export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      returnFirstTwoDrivers,
      returnLastTwoDrivers,
      selectingDrivers,
      createFareMultiplier,
      fareDoubler,
      fareTripler,
      selectDifferentDrivers,
    };
  }
