// Функця полученя рандомного числа
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функця полученя рандомного элемента массва
const getRandomElementArr = (arr) => arr[getRandomInt(0, arr.length -1)];

export{getRandomInt, getRandomElementArr};
