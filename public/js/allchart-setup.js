// combined-setup.js

async function initialize() {
  await Promise.all([
    window.initializeChartJs(),
    window.initializeECharts(),
  ]);
}

// Call the initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);