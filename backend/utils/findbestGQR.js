const calculateGQR = require('./calculategqr');
const calculateAverageValues = require("./getAverage");
const calculateDeviation = require('./calculateDeviation');

function findBestGQR(arr, limit) {
    const result = arr.map(data => {
        const depth = parseFloat(data.depth);
        const gqr = calculateGQR(data);
        return { depth, gqr };
    });
    result.sort((a, b) => a.gqr - b.gqr);
    let greatest;
    limit ? greatest = result.slice(result.length - 10) : greatest = result

    const average = calculateAverageValues(greatest);
    const deviation = calculateDeviation(greatest)
    return {greatest, average, deviation}
}

module.exports = findBestGQR