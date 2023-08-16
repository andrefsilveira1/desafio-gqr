const calculateGQR = require('./calculategqr');
const calculateAverageValues = require("./getAverage");

function findBestGQR(arr) {
    const result = arr.map(data => {
        const depth = parseFloat(data.depth);
        const gqr = calculateGQR(data);
        return { depth, gqr };
    });
    result.sort((a, b) => a.gqr - b.gqr);
    const greatest = result.slice(result.length - 10);

    const average = calculateAverageValues(arr);
    console.log("SORT:", average)
    return greatest
}

module.exports = findBestGQR