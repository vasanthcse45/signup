document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^[A-Za-z0-9]{8,}$/;


    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

 
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return;
    }

    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain only letters and numbers.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }


    alert('Registration successful!');
   
});
