const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('togglePasswordIcon');
togglePasswordIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});
// to show the password of the  عرض تاكيد كلمه المرور
const confirmPassword = document.getElementById('confirmPassword');
const togglePasswordIcon1 = document.getElementById('togglePasswordIcon1');
togglePasswordIcon1.addEventListener('click', () => {
    if (confirmPassword.type === 'password') {
        confirmPassword.type = 'text';
    } else {
        confirmPassword.type = 'password';
    }
});

function validateForm() {
    const username1 = document.getElementById('username')
    console.log(username1)

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const passwordErrorConfermation = document.getElementById('confirm-error');

    // Reset previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    passwordErrorConfermation.textContent = '';

    // Username validation (alphanumeric characters only)
    const usernamePattern = /^[a-zA-Z0-9]+$/;
    if (!usernamePattern.test(username)) {
        usernameError.textContent = 'اسم المستخدم يجب أن يحتوي على أحرف وأرقام فقط';
        return false;
    }

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
    if (confirmPassword.length < 6) {
        passwordErrorConfermation.textContent = 'كلمة المرور يجب أن تحتوي على الأقل 6 أحرف';
        return false;
    }
    if (password !== confirmPassword) {
        passwordErrorConfermation.textContent = 'كلمه المرور غير متطابقه !';
        return false;
    }
    return true;
}


// handel the concatunations
var isCommentVisible = true;
        const concatTool=document.getElementById('concat-tool')
        const conctMain=document.getElementById('conct-main')
        var commentIcon = document.querySelector('.fa-comment-dots');
        var xIcon = document.querySelector('.fa-x');

        function showConcat(){

            concatTool.classList.toggle('active')
            if(isCommentVisible)
            {
                commentIcon.style.display = 'none';
                xIcon.style.display = 'block';
            }
            else
            {
                commentIcon.style.display = 'block';
                xIcon.style.display = 'none';
            }
            isCommentVisible = !isCommentVisible;
        }

