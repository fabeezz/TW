document.addEventListener('DOMContentLoaded', function() {
    // Change style of elements
    document.querySelectorAll('.questions').forEach(item => {
        item.style.color = 'blue';
        item.style.fontWeight = 'bold';
    });

    // Manipulate DOM
    const mainElement = document.getElementById('makeItTwirl');
    if (mainElement) {
        mainElement.style.border = '5px solid orange';
    }

    // Create and delete elements
    const newElement = document.createElement('div');
    newElement.textContent = '10% OFF: PROMOCODE10';
    newElement.style.color = 'black';
    newElement.style.fontSize = '24px';
    newElement.style.fontWeight = 'bold';
    newElement.style.backgroundColor = 'orange';
    newElement.style.padding = '10px';
    newElement.style.position = 'fixed';
    newElement.style.top = '225px';
    newElement.style.right = '0';
    document.body.appendChild(newElement);
    setTimeout(() => {
        newElement.remove();
    }, 5000);
    

    // Handle mouse events
    document.querySelector('header').addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightgray';
    });

    // Modify properties
    document.body.addEventListener('keydown', function(event) {
        if (event.key === 'b') {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    });

    // Functional inputs
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Type here...';
    document.body.appendChild(inputElement);

    inputElement.addEventListener('change', function() {
        console.log('Input changed to:', this.value);
    });

    // Use of localStorage
    localStorage.setItem('userInput', inputElement.value);

    // Use of Math, Array, String, Date
    console.log('Random number:', Math.random());
    console.log('Date:', new Date().toDateString());

    // Randomly change properties
    setInterval(() => {
        document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }, 10000);

    // Use of classList, target, currentTarget
    document.querySelector('footer').addEventListener('click', function(event) {
        event.currentTarget.classList.toggle('highlight');
        console.log('Event target:', event.target);
    });

    // Use of getComputedStyle and stopPropagation
    document.querySelector('nav').addEventListener('click', function(event) {
        event.stopPropagation();
        const styles = getComputedStyle(this);
        console.log('Nav height:', styles.height);
    });

    // Data validation using regular expressions
    const validateInput = function(input) {
        const regex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters only
        return regex.test(input);
    };

    inputElement.addEventListener('input', function() {
        if (!validateInput(this.value)) {
            this.classList.add('invalid');
            console.log('Invalid input');
        } else {
            this.classList.remove('invalid');
        }
    });
});