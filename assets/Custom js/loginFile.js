
const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('togglePasswordIcon');
togglePasswordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
function validateForm(){    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'البريد الإلكتروني غير صالح';
        return false;
    }

    // Password validation (at least 6 characters)
    if (password.length < 6) {
        passwordError.textContent = 'كلمة المرور يجب أن تحتوي على الأقل 6 أحرف';
        return false;
    }
    return true;
}