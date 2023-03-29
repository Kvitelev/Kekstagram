// Функция для проверки максимальной длины строки
// Результат: true, если строка проходит по длине, и false — если не проходит
// const checkingLengthString = (str, maxLength) => {
//   return str.length <= maxLength;
// }

// checkingLengthString('Минимальное число не может быть равно или больше максимального числа', 50);
// checkingLengthString('Минимальное число', 50);

// Функця полученя рандомного числа
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функця полученя рандомного элемента массва
const getRandomElementArr = (arr) => arr[getRandomInt(0, arr.length -1)];

export{getRandomInt, getRandomElementArr};
