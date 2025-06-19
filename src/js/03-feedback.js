import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const emailField = form.elements.email;
const messageField = form.elements.message;
let formData = {
    email: '',
    message: '',
};

form.addEventListener('input', throttle(() => {
    formData = {
        email: emailField.value,
        message: messageField.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}), 500);

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submited:", savedData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {
        email: '',
        message: '',
    }
});
