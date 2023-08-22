function convertToCSV(jsonData) {
    const data = typeof jsonData !== 'object' ? JSON.parse(jsonData) : jsonData;
    const headers = Object.keys(data[0]);
  
    const csvRows = [];
    csvRows.push(headers.join(','));
  
    for (const row of data) {
      const values = headers.map(header => row[header]);
      csvRows.push(values.join(','));
    }
  
    return csvRows.join('\n');
  }
  
  function exportCSV(jsonData, fileName) {
    const csvString = convertToCSV(jsonData);
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName || 'data.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  
  // Example JSON data
  const jsonData = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    // ... more data
  ];
  
  // Export the JSON data as CSV
  exportCSV(jsonData, 'exported_data.csv');
  