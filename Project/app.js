document.addEventListener('DOMContentLoaded', function () {
    // Styling elements with class 'questions' using querySelectorAll and forEach
    document.querySelectorAll('.questions').forEach(item => {
        item.style.color = 'white';
        item.style.fontWeight = 'bold';
    });

    // Manipulating the DOM by selecting an element by ID
    const mainElement = document.getElementById('makeItTwirl');
    if (mainElement) {
        mainElement.style.border = '5px solid orange';
    }

    // Creating and deleting an element
    const newElement = document.createElement('div');
    newElement.textContent = '10% OFF: FBZ10';
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

    // Handling mouse events
    document.querySelector('header').addEventListener('mouseover', function () {
        this.style.backgroundColor = 'lightgray';
    });

    // Modifying properties on key press
    document.body.addEventListener('keydown', function (event) {
        const colorMap = {
            'b': { bg: 'blue', color: 'yellow' },
            'w': { bg: 'white', color: 'black' },
            'r': { bg: 'red', color: 'white' },
            'g': { bg: 'green', color: 'white' },
            'o': { bg: 'orange', color: 'black' },
            'p': { bg: 'purple', color: 'white' },
            'y': { bg: 'yellow', color: 'black' }
        };
        if (colorMap[event.key]) {
            document.body.style.backgroundColor = colorMap[event.key].bg;
            document.body.style.color = colorMap[event.key].color;
        }
    });

    // Creating and manipulating inputs
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.placeholder = 'Color initial:';
    inputElement.style.backgroundColor = 'black';
    inputElement.style.color = 'white';
    inputElement.style.width = '200px';
    inputElement.style.height = '20px';
    inputElement.style.margin = '0 auto';
    inputElement.style.display = 'block';
    const footerElement = document.querySelector('footer');
    document.body.insertBefore(inputElement, footerElement);

    const validColors = ['b', 'w', 'r', 'g', 'o', 'p', 'y'];
    const colorRegex = new RegExp(`^[${validColors.join('')}]$`);

    inputElement.addEventListener('input', function () {
        if (colorRegex.test(this.value)) {
            console.log('Input changed to:', this.value);
            localStorage.setItem('userInput', this.value);
        } else if (this.value !== '') {
            console.log('Invalid input');
            alert('Invalid input');
            this.value = ''; // Clear the input after showing invalid input message
        }
    });

    // Using localStorage to keep a collection of items
    const lastInput = localStorage.getItem('userInput');
    if (lastInput) {
        inputElement.value = lastInput;
        console.log('Last input retrieved from localStorage:', lastInput);
    }

    // 
    console.log('Random number:', Math.random());
    console.log('Date:', new Date().toDateString());
    console.log('String manipulation:', 'Hello World'.toUpperCase());

    // Randomly changing property values
    setInterval(() => {
        const footerIcons = document.querySelectorAll('.icons i');
        footerIcons.forEach(icon => {
            const scale = Math.random() * 0.75 + 0.5;
            icon.style.transform = `scale(${scale})`;
        });
    }, 1000);

    // Using classList, target, currentTarget properties
    document.querySelector('footer').addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('highlight');
        console.log('Event target:', event.target);
    });

    // Using getComputedStyle and stopPropagation methods
    document.querySelector('nav').addEventListener('click', function (event) {
        event.stopPropagation();
        const navStyles = getComputedStyle(this);
        console.log('Nav computed height:', navStyles.height);
        console.log('Nav computed background color:', navStyles.backgroundColor);
        document.querySelector('header').style.backgroundColor = navStyles.backgroundColor;
    });

    // Validating form data using regular expressions
    const validateInput = function (input) {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(input);
    };

    inputElement.addEventListener('input', function () {
        if (!validateInput(this.value)) {
            this.classList.add('invalid');
            console.log('Invalid input');
        } else {
            this.classList.remove('invalid');
        }
    });

    // Adding a date and time element below the footer
    const dateTimeElement = document.createElement('div');
    dateTimeElement.id = 'dateTime';
    dateTimeElement.style.textAlign = 'center';
    dateTimeElement.style.marginTop = '20px';
    dateTimeElement.style.color = 'white';
    dateTimeElement.style.padding = '10px';
    dateTimeElement.style.borderRadius = '5px';
    dateTimeElement.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    dateTimeElement.style.fontWeight = 'bold';
    document.body.appendChild(dateTimeElement);

    const updateDateTime = () => {
        const now = new Date();
        dateTimeElement.textContent = `Current Date and Time: ${now.toLocaleString()}`;
    };

    updateDateTime();
    setInterval(updateDateTime, 1000);
    // Enhance form validation with specific regex checks for name, email, and message fields
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting until checks are passed

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        //Allow letters, spaces, and basic punctuation
        const nameRegex = /^[a-zA-Z\s.,'-]+$/;
        ///Standard email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //Allow letters, numbers, spaces, and basic punctuation
        const messageRegex = /^[a-zA-Z0-9\s.,'-?!]+$/;

        let valid = true;
        let errorMessage = '';

        if (!nameRegex.test(name)) {
            valid = false;
            errorMessage += 'Name contains invalid characters. ';
        }
        if (!emailRegex.test(email)) {
            valid = false;
            errorMessage += 'Email format is invalid. ';
        }
        if (!messageRegex.test(message)) {
            valid = false;
            errorMessage += 'Message contains invalid characters.';
        }

        if (valid) {
            this.submit(); // Submit the form if all validations are passed
        } else {
            alert('Form Error: ' + errorMessage);
        }
    });
});
