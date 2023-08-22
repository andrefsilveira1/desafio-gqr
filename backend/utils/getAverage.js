function calculateAverageValues(dataArray) {
  const total = dataArray.reduce((sum, obj) => sum + (obj.gqr), 0);
  return total / dataArray.length;
}

module.exports = calculateAverageValues
