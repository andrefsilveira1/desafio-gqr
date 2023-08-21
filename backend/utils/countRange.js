function countValues(dataArray) {
    const ranges = [
        { min: 0, max: 0.4 },
        { min: 0.5, max: 0.8 },
        { min: 0.9, max: 1.0 },
    ];

    const counts = { range1: 0, range2: 0, range3: 0 };

    dataArray.forEach(data => {
        const gqr = data.gqr;
        if (gqr >= ranges[0].min && gqr <= ranges[0].max) {
            counts.range1++;
        } else if (gqr >= ranges[1].min && gqr <= ranges[1].max) {
            counts.range2++;
        } else if (gqr >= ranges[2].min && gqr <= ranges[2].max) {
            counts.range3++;
        }
    });

    return counts;
}

module.exports = countValues