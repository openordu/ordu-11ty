// mermaid-setup.js

(function() {
  async function loadMermaid() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/js/mermaid.min.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Mermaid'));
      document.head.appendChild(script);
    });
  }

  async function initialize() {
    try {
      await loadMermaid();

      mermaid.initialize({ startOnLoad: true });

      const mermaidSelectors = [
        'pre code.language-mermaid',
        'pre code.language-pie',
      ];

      mermaidSelectors.forEach((selector) => {
        const mermaidElements = document.querySelectorAll(selector);

        mermaidElements.forEach((element) => {
          const diagramContainer = document.createElement('div');
          diagramContainer.classList.add('mermaid');
          diagramContainer.textContent = element.textContent;
          element.parentNode.insertBefore(diagramContainer, element.nextSibling);

          element.style.display = 'none';
        });
      });

      mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    } catch (error) {
      console.error('Error initializing Mermaid:', error);
    }
  }

  // Expose the initialize function to the global scope
  window.initializeMermaid = initialize;
})();
