const calculateGQR = require('./calculategqr');

function findBestGQR(arr) {
    const result = arr.map(data => {
        const depth = parseFloat(data.depth);
        const gqr = calculateGQR(data);
        return { depth, gqr };
    });
    result.sort((a, b) => a.gqr - b.gqr);
    // 0.8360082031430551
    // 0.6461297840172786
    // 0,920819442
    
    const greatest = result.slice(result.length - 10);
    // console.log("LAST:",last10Elements);
    return greatest
}

module.exports = findBestGQR