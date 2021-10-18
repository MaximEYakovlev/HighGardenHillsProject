const p = document.querySelector('[data-reg]');
const $myForm = document.forms.myForm;
$myForm.addEventListener('submit', async (event) => {
  console.log(123);
  event.preventDefault();
  const myData = Object.fromEntries(new FormData($myForm));
  const response = await fetch('/user/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(myData),
  });
  if (response.status === 200) {
    window.location.pathname = '/';
  } else if (response.status === 401) {
    p.innerText = 'Убедитесь, что все поля заполнены корректно';
  }
});
