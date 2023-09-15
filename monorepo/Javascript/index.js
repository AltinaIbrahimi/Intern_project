const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const shuffleButton = document.getElementById('shuffleButton');
const changeButton = document.getElementById('changeButton');
const showButton = document.getElementById('showButton');
const selectedValues = document.getElementById('selectedValues');

function shuffleValues() {
  checkboxes.sort(() => Math.random() - 0.5);
  checkboxes.forEach((checkbox, index) => {
    checkbox.parentNode.insertBefore(checkbox, checkboxes[index + 1]);
  });
}

function changeValues() {
  checkboxes.forEach((checkbox, index) => {
    checkbox.value = `Value ${index + 1}`;
    checkbox.nextSibling.textContent = `Value ${index + 1}`;
  });
}


function showSelectedValues() {
  const selectedCheckboxes = checkboxes.filter(checkbox => checkbox.checked);
  const selectedCheckboxesValues = selectedCheckboxes.map(checkbox => checkbox.value);
  selectedValues.textContent = `Selected Values: ${selectedCheckboxesValues.join(', ')}`;
}


shuffleButton.addEventListener('click', shuffleValues);
changeButton.addEventListener('click', changeValues);
showButton.addEventListener('click', showSelectedValues);