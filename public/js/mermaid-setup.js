document.addEventListener('DOMContentLoaded', () => {
  mermaid.initialize({ startOnLoad: true });


  const mermaidFlowElements = document.querySelectorAll('pre code.language-flow');

  const mermaidMermElements = document.querySelectorAll('pre code.language-mermaid');

  const mermaidPieElements = document.querySelectorAll('pre code.language-pie');

  mermaidFlowElements.forEach((element) => {
    const diagramContainer = document.createElement('div');
    diagramContainer.classList.add('mermaid');
    diagramContainer.textContent = element.textContent;
    element.parentNode.insertBefore(diagramContainer, element.nextSibling);

    element.style.display = 'none';
  });

  mermaidMermElements.forEach((element) => {
    const diagramContainer = document.createElement('div');
    diagramContainer.classList.add('mermaid');
    diagramContainer.textContent = element.textContent;
    element.parentNode.insertBefore(diagramContainer, element.nextSibling);

    element.style.display = 'none';
  });

  mermaidPieElements.forEach((element) => {
    const diagramContainer = document.createElement('div');
    diagramContainer.classList.add('mermaid');
    diagramContainer.textContent = element.textContent;
    element.parentNode.insertBefore(diagramContainer, element.nextSibling);

    element.style.display = 'none';
  });

  mermaid.init(undefined, document.querySelectorAll('.mermaid'));
});
