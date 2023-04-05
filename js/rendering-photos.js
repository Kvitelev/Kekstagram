import {photos} from './data.js';
import {openPopup} from './util.js';
import {addPhotoContent, bigPicture} from './photos-full-size-mode.js'

//Находим шаблон и место для вставки элементов.
const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

//Функция подстовляющая нужные данные в шаюлон
const renderPhoto = (photos) => {
  //Клонируем шаблон
  const photoPreview = pictureTemplate.cloneNode(true);

  //Вставляем данные в шаблон
  photoPreview.querySelector('.picture__img').src = photos.url;
  photoPreview.querySelector('.picture__comments').textContent = photos.comments.length;
  photoPreview.querySelector('.picture__likes').textContent = photos.likes;

  //Открытие полноэкранного изображения
  photoPreview.addEventListener('click', (evt) => {
    evt.preventDefault();
    addPhotoContent(photos);
    openPopup(bigPicture);
  });

  return photoPreview;
};

//Маштабируем и заполняем всеми данными
const renderPhotos = () => {
  //Создаем новое пустое пространство
  const picturesListFragment = document.createDocumentFragment();

  //Перебираем данные и добавляем их в новое пустое пространство
  photos.forEach(element => {
    picturesListFragment.appendChild(renderPhoto(element));
  });

  //Добовляем данные в разметку
  picturesList.appendChild(picturesListFragment);
};

export {renderPhotos};
