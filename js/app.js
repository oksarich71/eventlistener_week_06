document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);
})

const handleButtonClick = function () {
  const result = document.querySelector('#reading-list');
  result.textContent = '';
}

const handleFormSubmit = function (event) {
  event.preventDefault();

  const newBookItem = document.createElement('div');
  newBookItem.textContent = `${ this.title.value } ${ this.author.value } ${ this.category.value }`

  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(newBookItem);

  const form = document.querySelector('#new-item-form')
  form.reset()
}
