import _throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const dataEl = {};

function onFormData(a) {
  dataEl[a.target.name] = a.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataEl));
}

function onSubmitForm(a) {
  a.preventDefault();

  const localFeedbackForm = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  a.target.reset();

  console.log(localFeedbackForm);
  localStorage.removeItem('feedback-form-state');
};

function dataFormLoad() {
  const localData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localData) {
    formEl.email.value = localData.email || '';
    formEl.message.value = localData.message || '';
  }
}

dataFormLoad();
formEl.addEventListener('input', _throttle(onFormData, 500));
formEl.addEventListener('submit', onSubmitForm);
