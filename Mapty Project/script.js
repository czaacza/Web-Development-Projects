'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const logo = document.querySelector('.logo');
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
  #mapEvent;
  #geopoints = [];

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newGeopoint.bind(this));
    logo.addEventListener('click', () => {
      form.classList.add('hidden');
      logo.classList.add('logo-centered');
    });
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
      this.#mapEvent = mapEvent;
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
    logo.classList.remove('logo-centered');
    inputName.focus();
  }

  _newGeopoint(e) {
    e.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;
    // Get data from the form
    const name = inputName.value;
    const difficulty = +inputDifficulty.value;
    const size = inputSize.value;
    const terrain = +inputTerrain.value;
    const date = inputDate.value;
    const coords = [lat, lng];

    // Check if data is valid

    if (name.length > 20) {
      alert('Name must be shorter than 20 letters.');
      return;
    }
    if (!difficulty || !terrain) {
      alert('Please enter all data before adding new Geocache Point');
      return;
    }
    if (size === '') {
      alert('Please select the size before adding new Geocache Point');
    }
    if (date === '') {
      alert('Please select the date before adding new Geocache Point');
    }

    // Create geopoint object

    const newGeopoint = new Geopoint(
      coords,
      name,
      difficulty,
      size,
      terrain,
      date
    );
    console.log(newGeopoint);

    // Add new object to geopoints array
    this.#geopoints.push(newGeopoint);
    console.log(this.#geopoints);

    // Render marker popup
    this._renderMarkerPopup();

    // Render geopoint on list
    this._renderGeopoint(newGeopoint);

    // Hide form + input fields
  }

  _renderMarkerPopup() {
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

    this.#newMarker = undefined;
    form.classList.add('hidden');
    logo.classList.add('logo-centered');
  }

  _renderGeopoint(geopoint) {
    const html = `
    <h2 class="geopoint__title">${geopoint.name}</h2>
          <div class="geopoint__details">
            <span class="geopoint__icon">⭐</span>
            <span class="geopoint__value">${geopoint.difficulty}</span>
            <span class="geopoint__unit">/5</span>
          </div>
          <div class="geopoint__details">
            <span class="geopoint__icon">📏</span>
            <span class="geopoint__value">${geopoint.size}</span>
            <span class="geopoint__unit"></span>
          </div>
          <div class="geopoint__details">
            <span class="geopoint__icon">⛰️</span>
            <span class="geopoint__value">${geopoint.terrain}</span>
            <span class="geopoint__unit">/5</span>
          </div>
          <div class="geopoint__details">
            <span class="geopoint__icon">🗓️</span>
            <span class="geopoint__value">${geopoint.date}</span>
            <span class="geopoint__unit"></span>
          </div>
    `;
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
