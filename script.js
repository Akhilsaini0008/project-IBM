document.addEventListener('DOMContentLoaded', () => {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;

            if (password.length < 8 || !/\d/.test(password)) {
                alert('Password must be at least 8 characters long and contain at least one number.');
                return;
            }

            // Simulate successful login
            window.location.href = 'index.html'; // Redirect to homepage after login
        });
    }

    // Create account form validation
    const createAccountForm = document.getElementById('createAccountForm');
    if (createAccountForm) {
        createAccountForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Additional validation and account creation logic here
            alert('Account created successfully!');
            window.location.href = 'login.html'; // Redirect to login page
        });
    }

    // Sell recyclable form calculation
    const sellRecyclableForm = document.getElementById('sellRecyclableForm');
    if (sellRecyclableForm) {
        sellRecyclableForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const paper = parseFloat(document.getElementById('paper').value) || 0;
            const plastic = parseFloat(document.getElementById('plastic').value) || 0;
            const glass = parseFloat(document.getElementById('glass').value) || 0;

            const paperRate = 2;
            const plasticRate = 1;
            const glassRate = 3;

            const totalEtokens = (paper * paperRate) + (plastic * plasticRate) + (glass * glassRate);
            // document.getElementById('result').innerText = Total e-Tokens: ${tostalEtokens};
        });
    }
});