import {isEscEvent} from '../util.js';

const MAX_SYMBOLS = 20;
const MAX_HASHTAG = 5;
const MAX_LENGTH_DESCRIPTION = 140;

const inputHashtag = document.querySelector('.text__hashtags');
const textareaDescription = document.querySelector('.text__description');

//Валидация поля Хэштега
inputHashtag.addEventListener('input', () => {

  inputHashtag.setCustomValidity('');

  let valueHashtag = inputHashtag.value.toLowerCase().trim();
  if (!valueHashtag) {
    return;
  }

  let inputArr = valueHashtag.split(/\s+/);
  if (inputArr.length === 0) {
    return;
  }

  const isStartNotHashtag = inputArr.some((item) => {
    return item[0] !== '#';
  });
  if (isStartNotHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег начинаеться с символа #!');
  }

  const isOnlyHashtag = inputArr.some((item) => {
    return item === '#';
  });
  if (isOnlyHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег не может состоять только из #!');
  }

  const isSplitSpaceHashtag = inputArr.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });
  if (isSplitSpaceHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги разделяются пробелами!');
  }

  const isRepeatingHashtag = inputArr.some((item, index, arr) => {
    return arr.indexOf(item, index + 1) >= index + 1;
  });
  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги не должны повторяться!');
  }

  const isLongHashtag = inputArr.some((item) => {
    return item.length > MAX_SYMBOLS;
  });
  if (isLongHashtag) {
    inputHashtag.setCustomValidity('Длина Хэш-тега не должна превышать 20 симолов!');
  }

  if (inputArr.length > MAX_HASHTAG) {
    inputHashtag.setCustomValidity('Максимум 5 Хэш-тегов!');
  }

  inputHashtag.reportValidity();
});

//Валидация коментария к фото
textareaDescription.addEventListener('input', () => {
  const valueLengthDescription = textareaDescription.value.length;

  if (valueLengthDescription > MAX_LENGTH_DESCRIPTION) {
    textareaDescription.setCustomValidity(`Ваш коментарий не должен превышать ${MAX_LENGTH_DESCRIPTION} символов!`);
  } else {
    textareaDescription.setCustomValidity('');
  }

  textareaDescription.reportValidity();
});

//Функция для отмены закрытия окна когда пользователь находиться в поле inputHashtag и textareaDescription
const onEscapeDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};


inputHashtag.addEventListener('keydown', onEscapeDown);
textareaDescription.addEventListener('keydown', onEscapeDown);
