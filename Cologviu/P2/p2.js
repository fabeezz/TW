document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.gap = '10px';
    body.appendChild(container);

    for (let i = 1; i <= 6; i++) {
        const buton = document.createElement('button');
        buton.className = 'buton';
        buton.textContent = `Buton ${i}`;
        buton.style.borderRadius = '5px';
        if (i % 2 === 0) {
            buton.style.backgroundColor = 'green';
            buton.style.color = 'white';
        } else {
            buton.style.backgroundColor = 'yellow';
            buton.style.color = 'black';
        }
        container.appendChild(buton);

        buton.addEventListener('click', function(event) {
            event.stopPropagation();
            if (buton.style.backgroundColor === 'red') {
                container.removeChild(buton);
            } else 
            {
                const culoare_init = buton.style.backgroundColor;
                buton.style.backgroundColor = 'red';
                setTimeout(() => {
                    if (document.body.contains(buton)) {
                        buton.style.backgroundColor = culoare_init;
                    }
                }, 5000);
            }
        });
    }
    
    document.addEventListener('click', function() {
        alert(`Numărul de butoane: ${container.children.length}`);
    });

});

