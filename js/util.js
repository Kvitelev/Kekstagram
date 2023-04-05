// Функця полученя рандомного числа
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функця полученя рандомного элемента массва
const getRandomElementArr = (arr) => arr[getRandomInt(0, arr.length -1)];

//Функция открытия окна
const openPopup = (popup) => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

//Функция закрытия окна
const closePopup = (popup) => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

//Сброс значения
const resettingValue = (element) => {
  element.value = '';
};

export{getRandomInt, getRandomElementArr, openPopup, closePopup, isEscEvent, resettingValue};
