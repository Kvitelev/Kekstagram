import {getRandomInt, getRandomElementArr} from './util.js';

const QUANTITY_PHOTOS = 25;

// Константа с именами пользователей
const NAMES_USERS = [
  'Олег',
  'Сергей',
  'Артем',
  'Михаиил',
  'Светлана',
  'Мария',
  'Родион',
  'Игнат',
  'Владимир',
  'Арсентий',
  'Тяня',
  'Яна',
  'Васлий',
  'Марк',
  'Артур',
  'Евгенй',
  'Никита',
  'Руслан',
  'Ольга',
  'Илья',
  'Ярослав',
  'Вера',
  'Оля',
  'Роман',
  'Регина',
  'Алина',
  'Юля',
  'Владислав',
  'Нина',
  'Инга',
  'Мурад',
];

// Константа с описанием фото
const DESCRIPTION_PHOTOS = [
  'Классно провели день',
  'Оцените фотку!!!',
  'Тестим новую фотокамеру',
  'Эх, красота!',
  'Ура! Наконец отохнем)',
  'Как пронел наш день...',
  'Как прошло мое лето)))',
  'Классно отдохнули с друзьями',
];

// Константа с коментариями к фото
const COMMENTS_PHOTOS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

// Енама obj с количеством лайков
const Likes = {
  MIN: 15,
  MAX: 200,
}

// Енама obj с количеством комментариев
const СommentsQuantity = {
  MIN: 1,
  MAX: 6,
}

// Енама obj с количеством комментариев
const СommentsId = {
  MIN: 1,
  MAX: 999,
}

// Енама obj с нумерацией автарок
const Avatars = {
  FIRST: 1,
  LAST: 6,
}

const addPhonos = () => {
  return {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: '',
  }
};

const addComents = () => {
  const coments = [];

  for (let i = 0; i <= getRandomInt(СommentsQuantity.MIN, СommentsQuantity.MAX); i++) {
    coments.push(
      {
        id: getRandomInt(СommentsId.MIN, СommentsId.MAX),
        avatar: `img/avatar-${getRandomInt(Avatars.FIRST, Avatars.LAST)}.svg`,
        message: getRandomElementArr(COMMENTS_PHOTOS),
        name: getRandomElementArr(NAMES_USERS),
      },
    )
  }

  return coments;
};

const photos = new Array(QUANTITY_PHOTOS).fill().map(() => addPhonos());

photos.forEach((element, index) => {
  element.id = index + 1;
  element.url = `photos/${index + 1}.jpg`;
  element.description = getRandomElementArr(DESCRIPTION_PHOTOS);
  element.likes = getRandomInt(Likes.MIN, Likes.MAX);
  element.comments = addComents();
});

export {photos};
