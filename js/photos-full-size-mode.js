import {closePopup, isEscEvent} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const pictureCancelBtn = bigPicture.querySelector('#picture-cancel');

//Добавлениe коментов
const renderComments = (comment) => {
  const socialComment = bigPicture.querySelectorAll('.social__comment');

  socialComment.forEach((element, index) => {
    element.querySelector('.social__picture').src = comment[index].avatar;
    element.querySelector('.social__picture').alt = comment[index].name;
    element.querySelector('.social__text').textContent = comment[index].message;
  });
};

//Добавление фото контента
const addPhotoContent = (photo) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;

  //Временный функционал
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  renderComments(photo.comments);
};

//Закрытие полноэкранного изображения
pictureCancelBtn.addEventListener('click', () => {
  closePopup(bigPicture);
});

//Закрытие полноэкранного изображения при нажатии на клавишу Escape
document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closePopup(bigPicture);
  }
});

export {addPhotoContent, bigPicture};
