import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './WeatherService.js';

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
}

$(function() {
  $('#weatherLocation').on('click',function() {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);  
      promise.then(function(response) {
        const body= JSON.parse(response);
        $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`); 
        });
      });
    });
