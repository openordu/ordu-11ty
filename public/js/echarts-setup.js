    // echarts-setup.js
(function() {

    async function loadECharts() {
        return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = '/js/echarts.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load ECharts'));
        document.head.appendChild(script);
        });
    }
    
    async function initialize() {
        try {
          await loadECharts();
          renderCharts();
        } catch (error) {
          console.error('Error initializing charts:', error);
        }
      }
    
    function renderCharts() {
        // Get all elements with the `echart` language identifier
        const chartBlocks = document.querySelectorAll('pre > code.language-echart');
    
        // Iterate through all chart blocks
        chartBlocks.forEach((block, index) => {
        // Parse the JSON configuration from the code block
        const chartConfig = JSON.parse(block.textContent);
    
        // Create a container element for the chart
        const container = document.createElement('div');
        container.id = `echart-${index}`;
        container.style.width = '100%';
        container.style.height = '400px';
    
        // Insert the container element before the code block
        block.parentElement.insertBefore(container, block);
        block.remove();
    
        // Render the chart using the ECharts library
        const chart = echarts.init(container);
        chart.setOption(chartConfig);
        });
    }

    window.initializeECharts = initialize;
})();