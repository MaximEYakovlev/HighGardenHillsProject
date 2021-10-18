const $logInForm = document.forms.logInForm;
const p = document.querySelector('[data-log]');
$logInForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const myData = Object.fromEntries(new FormData($logInForm));
  const response = await fetch('/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(myData),
  });
  if (response.status === 200) {
    window.location.pathname = '/';
  } else if (response.status === 401) {
    p.innerText = 'Неверный логин или пароль';
  }
});
