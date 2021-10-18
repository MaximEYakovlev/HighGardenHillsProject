const $searchForm = document.forms.searchForm;
const $p = document.querySelector('p');

$searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const myData = Object.fromEntries(new FormData($searchForm));
  const response = await fetch(`/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(myData),
  });
  if (response.ok) {
    const dataFromBack = await response.json();
    console.log(dataFromBack);
    window.location.pathname = `/wine/${dataFromBack.id}`;
  } else if (response.status === 401) {
    $p.innerText = 'Неверно введено название';
  }
});
