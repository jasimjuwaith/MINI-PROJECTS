function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strength = document.getElementById('strength');
  
    if (password.length === 0) {
      strength.innerHTML = '';
      return;
    }
  
    let score = 0;
    if (password.length >= 8) {
      score++;
    }
    if (/[A-Z]/.test(password)) {
      score++;
    }
    if (/[a-z]/.test(password)) {
      score++;
    }
    if (/\d/.test(password)) {
      score++;
    }
    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
    }
  
    let color = '';
    let message = '';
  
    switch (score) {
      case 0:
      case 1:
        color = 'red';
        message = 'Weak';
        break;
      case 2:
        color = 'orange';
        message = 'Fair';
        break;
      case 3:
        color = 'yellow';
        message = 'Good';
        break;
      case 4:
        color = 'lightgreen';
        message = 'Strong';
        break;
      case 5:
        color = 'green';
        message = 'Very Strong';
        break;
      default:
        color = 'black';
        message = 'Invalid';
    }
  
    strength.innerHTML = `<span style="color: ${color};">${message}</span>`;
  }
  