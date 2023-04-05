// Енама obj для изменения значения маштаба
const Value = {
  MIN: 25,
  MAX: 100,
};

// Енама obj для изменения маштаба
const Transform = {
  DEFAULT: 1,
  STEP: 0.25,
};

// Енама obj для значения слайдера
const ValueSlider = {
  MIN: 0,
  MAX: 100,
};

const controlValue = document.querySelector('.scale__control--value');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const photoPreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const effectsRadio = document.querySelectorAll('.effects__radio');

//Значение по умолчанию
const defaultValue = () => {
  controlValue.value = Value.MAX + '%';
  photoPreview.querySelector('img').style.transform = 'scale(1)';
  photoPreview.className = 'img-upload__preview';
};

//Функция управления умеьшения маштаба
const getingZoomOutControl = () => {
  if (parseInt(controlValue.value) > Value.MIN) {
    controlValue.value = parseInt(controlValue.value) - Value.MIN + '%';
    photoPreview.querySelector('img').style.transform = `scale(${Transform.DEFAULT -= Transform.STEP})`;
  } else {
    controlValue.value = Value.MIN + '%';
  }
};
controlSmaller.addEventListener('click', getingZoomOutControl);

//Функция управления увеличением маштаба
const getingZoomControl = () => {
  if (parseInt(controlValue.value) < Value.MAX) {
    controlValue.value = parseInt(controlValue.value) + Value.MIN + '%';
    photoPreview.querySelector('img').style.transform = `scale(${Transform.DEFAULT += Transform.STEP})`;
  } else {
    controlValue.value = Value.MAX + '%';
  }
};
controlBigger.addEventListener('click', getingZoomControl);

//Переключение эффектов через делегирование
effectsList.addEventListener('change', (evt) => {
  effectsRadio.forEach(element => {
    if (evt.target === element) {
      photoPreview.className = `img-upload__preview effects__preview--${evt.target.value}`;
      photoPreview.style.filter = '';
      effectLevelSlider.noUiSlider.updateOptions({
        start: ValueSlider.MAX,
      });
    }
  });
});

/* global noUiSlider:readonly */
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const effectLevelSlider = effectLevel.querySelector('.effect-level__slider');

effectLevel.classList.add('visually-hidden');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: ValueSlider.MIN,
    max: ValueSlider.MAX,
  },
  start: ValueSlider.MAX,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', (values) => {
  effectLevelValue.value = values;
  if (photoPreview.classList.contains('effects__preview--chrome')) {
    photoPreview.style.filter = `grayscale(${parseInt(effectLevelValue.value) * 0.01})`;
    effectLevel.classList.remove('visually-hidden');
  } else if (photoPreview.classList.contains('effects__preview--sepia')) {
    photoPreview.style.filter = `sepia(${parseInt(effectLevelValue.value) * 0.01})`;
    effectLevel.classList.remove('visually-hidden');
  } else if (photoPreview.classList.contains('effects__preview--marvin')) {
    photoPreview.style.filter = `invert(${Math.floor(effectLevelValue.value)}%)`;
    effectLevel.classList.remove('visually-hidden');
  } else if (photoPreview.classList.contains('effects__preview--phobos')) {
    photoPreview.style.filter = `blur(${(parseInt(effectLevelValue.value)) * 0.1}px)`;
    effectLevel.classList.remove('visually-hidden');
  } else if (photoPreview.classList.contains('effects__preview--heat')) {
    photoPreview.style.filter = `brightness(${(parseInt(effectLevelValue.value)) * 0.1})`;
    effectLevel.classList.remove('visually-hidden');
  } else if (photoPreview.classList.contains('effects__preview--none')) {
    photoPreview.style.filter = '';
    effectLevel.classList.add('visually-hidden');
  }
});

export {defaultValue, photoPreview, effectLevelSlider, ValueSlider};
