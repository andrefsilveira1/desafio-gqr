function calculateGQR(data) {
    const { TotalGas, c1, c2, c3, nc4, ic4, nc5, ic5 } = data;
    const gqr = TotalGas / (parseFloat(c1) + 
    2 * parseFloat(c2) + 
    3 * parseFloat(c3) + 
    4 * (parseFloat(nc4) + 
    parseFloat(ic4)) + 
    5 * (parseFloat(nc5) + 
    parseFloat(ic5)));
    
    // console.log("gqr:", gqr, TotalGas)
    return gqr;
}

module.exports = calculateGQR;