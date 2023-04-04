const peopleNamesList = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");
module.exports = function getPeopleInCity(peopleNamesList) {
  return getFirstNames(peopleNamesList);
};
