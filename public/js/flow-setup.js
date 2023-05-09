// flow-setup.js

(function() {
  async function loadFlowJs() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/js/flowchart.min.js'; // Update with the actual path to flowchart.min.js in your project
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Flow.js'));
      document.head.appendChild(script);
    });
  }

  async function initialize() {
    try {
      await loadFlowJs();

      const flowElements = document.querySelectorAll('pre code.language-flow');

      flowElements.forEach((element) => {
        const diagramContainer = document.createElement('div');
        const chart = flowchart.parse(element.textContent);
        element.parentNode.insertBefore(diagramContainer, element.nextSibling);
        element.remove()

        chart.drawSVG(diagramContainer);

        element.style.display = 'none';
      });
    } catch (error) {
      console.error('Error initializing Flow.js:', error);
    }
  }

  // Expose the initialize function to the global scope
  window.initializeFlowJs = initialize;
})();
