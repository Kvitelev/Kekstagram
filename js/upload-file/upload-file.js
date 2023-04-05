import {openPopup, closePopup, isEscEvent, resettingValue} from '../util.js';
import {defaultValue, photoPreview, effectLevelSlider, ValueSlider} from './photo-editing.js';
import './validation.js';

const uploadFileInput = document.querySelector('#upload-file');
const photoUpload = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = photoUpload.querySelector('#upload-cancel');

//Открытие окна редактора
uploadFileInput.addEventListener('change', () => {
  defaultValue();
  photoPreview.style.filter = '';
  effectLevelSlider.noUiSlider.updateOptions({
    start: ValueSlider.MAX,
  });
  openPopup(photoUpload);
});

//Закрытие окна редактора
uploadCancelBtn.addEventListener('click', () => {
  closePopup(photoUpload);
  resettingValue(uploadFileInput);
});
//Закрытие окна редактора при нажатии на клавишу Escape
document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closePopup(photoUpload);
    resettingValue(uploadFileInput);
  }
});
