document.addEventListener('DOMContentLoaded', function() {
    const firstName = "PrenumeleTau";
    const classes = ["c1", "c2", "c3", "c4", "c5"];
    let K = new Date().getMinutes();
    let N = Math.max(10, K);

    for (let i = 0; i < N; i++) {
        let p = document.createElement('p');
        p.textContent = firstName;
        p.className = classes[Math.floor(Math.random() * classes.length)];
        document.body.appendChild(p);
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'P') {
            const className = event.target.className;
            document.querySelectorAll('.' + className).forEach(p => p.remove());
        } else {
            alert('Coordonata Y: ' + event.clientY);
        }
    });
});