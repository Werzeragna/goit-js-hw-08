var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

returnMessageToInput();

function onInput() {
  const formData = new FormData(formEl);
  const inputObj = {};
  for (let [email, message] of formData) {
    inputObj[email] = message;
  }

  const userData = JSON.stringify(inputObj);
  localStorage.setItem('feedback-form-state', userData);
}

function returnMessageToInput() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const userDataRecall = JSON.parse(savedMessage);
  if (savedMessage) {
    formEl[0].value = userDataRecall.email;
    formEl[1].value = userDataRecall.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  const userDataoutput = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  console.log(userDataoutput);
  localStorage.removeItem('feedback-form-state');
}
