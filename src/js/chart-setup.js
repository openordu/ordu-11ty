// chart-setup.js
(function() {
  async function loadChartJs() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/js/chart.min.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Chart.js'));
      document.head.appendChild(script);
    });
  }

  async function initialize() {
    try {
      await loadChartJs();
      renderCharts();
    } catch (error) {
      console.error('Error initializing charts:', error);
    }
  }

  function renderCharts() {
    // Get all elements with the `chart` language identifier
    const chartBlocks = document.querySelectorAll('pre > code.language-chart');

    // Iterate through all chart blocks
    chartBlocks.forEach((block, index) => {
      // Parse the JSON configuration from the code block
      const chartConfig = JSON.parse(block.textContent);

      // Create a canvas element for the chart
      const canvas = document.createElement('canvas');
      canvas.id = `chart-${index}`;

      // Insert the canvas element before the code block
      block.parentElement.insertBefore(canvas, block);
      block.remove();

      // Get the canvas context and render the chart
      const ctx = canvas.getContext('2d');
      new Chart(ctx, chartConfig);
    });
  }
  window.initializeChartJs = initialize;
  // Call the initialize function when the DOM is fully loaded
  // document.addEventListener('DOMContentLoaded', initialize);
})();