// Simple Probe Data Analyzer
// Reads CSV data and creates a chart showing measured values vs tolerance bands

function parseProbeData(csvContent) {
  // Split into lines
  const lines = csvContent.trim().split("\n");

  // Skip header row, process data rows
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map((v) => v.trim());

    // Make sure we have all 6 columns
    if (values.length >= 6) {
      data.push({
        number: parseInt(values[0]), // Part number
        nominal: parseFloat(values[1]), // Target size
        measured: parseFloat(values[2]), // Actual measured size
        tolerance: parseFloat(values[3]), // Overall tolerance
        compBand: parseFloat(values[4]), // Compensation band
        compAmount: parseFloat(values[5]), // Amount compensated
      });
    }
  }

  return data;
}

function createSimpleChart(probeData) {
  // Get the canvas element
  const canvas = document.getElementById("chart");
  const ctx = canvas.getContext("2d");

  // Extract data for chart
  const labels = probeData.map((d) => d.number);
  const measured = probeData.map((d) => d.measured);
  const nominal = probeData[0].nominal;
  const tolerance = probeData[0].tolerance;
  const compBand = probeData[0].compBand;
  const compAmount = probeData[0].compAmount;

  // Create tolerance bands
  const upperTol = new Array(labels.length).fill(nominal + tolerance);
  const lowerTol = new Array(labels.length).fill(nominal - tolerance);
  const upperBand = new Array(labels.length).fill(nominal + compBand);
  const lowerBand = new Array(labels.length).fill(nominal - compBand);
  const nominalLine = new Array(labels.length).fill(nominal);

  // Create the chart
  const newChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Nominal",
          data: nominalLine,
          borderColor: "#7ea1ff",
          borderDash: [5, 5],
          pointRadius: 0,
          borderWidth: 2,
        },
        {
          label: `+Tolerance (${tolerance.toFixed(3)}")`,
          data: upperTol,
          borderColor: "rgba(255, 24, 24, 0.2)",
          borderDash: [3, 3],
          pointRadius: 0,
          borderWidth: 1,
        },
        {
          label: `-Tolerance (${tolerance.toFixed(3)}")`,
          data: lowerTol,
          borderColor: "rgba(255, 24, 24, 0.2)",
          borderDash: [3, 3],
          pointRadius: 0,
          borderWidth: 1,
        },
        {
          label: `+Comp Band (${compBand.toFixed(3)}")`,
          data: upperBand,
          borderColor: "#ffa500",
          borderDash: [2, 2],
          pointRadius: 0,
          borderWidth: 1,
        },
        {
          label: `-Comp Band (${compBand.toFixed(3)}")`,
          data: lowerBand,
          borderColor: "#ffa500",
          borderDash: [2, 2],
          pointRadius: 0,
          borderWidth: 1,
        },
        {
          label: "Measured",
          data: measured,
          borderColor: "#ff6b6b",
          backgroundColor: "rgba(255, 107, 107, 0.2)",
          pointRadius: 4,
          borderWidth: 2,
          tension: 0.1,
        },
        {
          label: "Compensation Applied",
          data: probeData.map((d) => nominal + d.compAmount),
          borderColor: "#0066cc",
          backgroundColor: "rgba(0, 102, 204, 0.2)",
          pointRadius: 3,
          borderWidth: 2,
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
      },
      scales: {
        y: {
          title: { display: true, text: "Size (inches)" },
          grid: { color: "rgba(255,255,255,0.1)" },
          min: nominal - 0.005,
          max: nominal + 0.005,
          beginAtZero: false,
        },
        x: {
          title: { display: true, text: "Part Number" },
          grid: { color: "rgba(255,255,255,0.1)" },
        },
      },
    },
  });

  return newChart;
}

function calculateStats(probeData) {
  const measured = probeData.map((d) => d.measured);
  const mean = measured.reduce((a, b) => a + b, 0) / measured.length;
  const min = Math.min(...measured);
  const max = Math.max(...measured);
  const range = max - min;

  return {
    count: probeData.length,
    mean: mean,
    min: min,
    max: max,
    range: range,
    nominal: probeData[0].nominal,
    tolerance: probeData[0].tolerance,
    compBand: probeData[0].compBand,
  };
}

// Example usage:
// const csvContent = "number, nominal size, measured size, tolerance, comp band tolerance, comp amount\n1, 1.0000, 1.0000, 0.0030, 0.0010, 0.0000";
// const data = parseProbeData(csvContent);
// createSimpleChart(data);
// const stats = calculateStats(data);
