function calculateAverageValues(dataArray) {  
    const totalGQR = dataArray.reduce((sum, data) => sum + data.gqr, 0);
    const totalDepth = dataArray.reduce((sum, data) => sum + data.depth, 0);
    const averageGQR = totalGQR / dataArray.length;
    const averageDepth = totalDepth / dataArray.length;
  
    return { averageGQR, averageDepth };
  }

module.exports = calculateAverageValues
  