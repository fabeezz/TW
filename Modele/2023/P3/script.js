document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('data');
    const select = document.getElementById('colorSelect');
    let index = 0;
    let intervalId;

    function updateInput() {
        const currentDate = new Date().toLocaleString();
        input.value = currentDate;
        select.selectedIndex = index;
        input.style.color = select.value;
        index = (index + 1) % select.options.length;
    }

    function startInterval() {
        updateInput();
        intervalId = setInterval(updateInput, 3000);
    }

    function stopInterval() {
        clearInterval(intervalId);
    }

    startInterval();

    document.addEventListener('keydown', function(event) {
        if (event.key === 's') {
            stopInterval();
            localStorage.setItem('lastColor', select.value);
        }
    });

    window.addEventListener('beforeunload', function() {
        localStorage.setItem('lastColor', select.value);
    });

    window.addEventListener('load', function() {
        const lastColor = localStorage.getItem('lastColor');
        if (lastColor) {
            input.style.color = lastColor;
            select.value = lastColor;
        }
    });
});