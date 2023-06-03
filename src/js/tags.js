function* fibonacci() {
    let a = 0, b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function() {
        const buttons = Array.from(document.querySelectorAll('.category-button'));
        const pills = Array.from(document.querySelectorAll('.rounded-pill'));
        const allElements = [...buttons, ...pills];
        
        let fibGenerator = fibonacci();
        
        allElements.forEach((el, index) => {
            setTimeout(function() {
                el.classList.add('animate');
            }, fibGenerator.next().value * 500); // Adjust timing as needed
        });
    }, 100);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                const aside = document.querySelector('aside');
                aside.appendChild(entry.target);
            }
        });
    });

    const elements = document.querySelectorAll('.category-button, .rounded-pill');
    elements.forEach(el => observer.observe(el));
});
