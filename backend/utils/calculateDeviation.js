const calculateAverageValues = require("./getAverage");

function calculateDeviation(array) {
    if (array.length <= 1) {
      return 0;
    }
  
    const media = calculateAverageValues(array);
    const squaredDifferences = array.map(obj => Math.pow((obj.gqr || 0) - media, 2));
    const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / (array.length - 1);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

module.exports = calculateDeviation