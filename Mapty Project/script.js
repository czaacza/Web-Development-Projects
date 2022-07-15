'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputName = document.querySelector('.form__input--name');
const inputDifficulty = document.querySelector('.form__input--difficulty');
const inputSize = document.querySelector('.form__input--size');
const inputTerrain = document.querySelector('.form__input--terrain');
const inputDate = document.querySelector('.form__input--date');

class Geopoint {
  id = (Date.now() + '').slice(-10);

  constructor(coords, name, difficulty, size, terrain, date) {
    this.coords = coords;
    this.name = name;
    this.difficulty = difficulty;
    this.size = size;
    this.terrain = terrain;
    this.date = date;
  }
}

////////////////////////////
// APPLICATION ARCHITECTURE
////////////////////////////
class App {
  #map;
  #newMarker;

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newGeopoint.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on #map
    this.#map.on('click', mapEvent => {
      this._showForm();
      clearInputs();
      if (this.#newMarker) {
        this.#newMarker.remove();
      }

      const { lat, lng } = mapEvent.latlng;

      this.#newMarker = L.marker([lat, lng]).addTo(this.#map);
    });
  }

  _showForm() {
    form.classList.remove('hidden');
    inputName.focus();
  }

  _newGeopoint(e) {
    e.preventDefault();

    let popupContent = 'Geocache point';
    if (inputName.value.length > 0) {
      popupContent = inputName.value;
    }
    this.#newMarker
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: addPopupClassName(inputDifficulty.value),
        })
      )
      .setPopupContent(popupContent)
      .openPopup();

    console.log(inputDate.value);
    this.#newMarker = undefined;
    form.classList.add('hidden');
  }
}

const app = new App();
// help functions
function addPopupClassName(difficulty) {
  let popupClassName;
  if (difficulty <= 2) {
    popupClassName = 'easy-popup';
  } else if (difficulty == 3) {
    popupClassName = 'medium-popup';
  } else if (difficulty <= 5) {
    popupClassName = 'hard-popup';
  }
  return popupClassName;
}

function clearInputs() {
  inputName.value = '';
  inputDifficulty.value = '';
  inputSize.value = '';
  inputTerrain.value = '';
  inputDate.value = getTodayDate();
}

function getTodayDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;
  return today;
}
