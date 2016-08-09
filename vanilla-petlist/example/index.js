import $ from 'jquery';
import TestController from '../src/controllers/TestController';

$(document).ready(function() {
  let testController = new TestController();
});

var defaultAPI = "static/search.json", //
    boardingQuery = "?service=boarding", //
    sittingQuery = "?service=sitting", //
    $boarding = $('#boarding'), //
    $sitting = $('#sitting');

function executeQuery(API) {
  $(document).ready(function() {
    $.getJSON(API, function(data) {
      var searchHTML = '';
      $.each(data.search, function(i, search) {
        searchHTML += '<ul>';
        searchHTML += '<li><a href="' + urlFormat(search.title) + '"><strong>Title</strong>: ' + search.title + '</a></li>';
        searchHTML += '<li><strong>Name</strong>: ' + nameFormat(search.user.first, search.user.last) + '</li>';
        searchHTML += '<li><strong>Pet</strong>: ' + search.pet.name + '</li>';
        searchHTML += '<li><strong>Description</strong>: ' + shortenDescription(search.description) + '</li>';
        searchHTML += '</ul>';
      });
      $('#content').append(searchHTML);
    });
  });
}

function urlFormat(url) {
  var url = url.replace(/ |--/g, '-').replace(/\[\]/g, '').match(/[a-zA-z0-9]|-|_/g).join('');
  if (url.charAt(0) === '-') {
    return url.replace('-', '');
  }
  return url;
}

function nameFormat(first, last) {
  var firstName = first.charAt(0).toUpperCase() + first.substring(1).toLowerCase();
  var lastName = last.charAt(0).toUpperCase() + '.';
  return firstName + ' ' + lastName;
}

function shortenDescription(description) {
  const DESCRIPTION_LIMIT = 48;
  if (description.length > DESCRIPTION_LIMIT) {
    if (description.charAt(DESCRIPTION_LIMIT) === ' ') {
      description = description.slice(0, DESCRIPTION_LIMIT) + '...';
    } else {
      let index = DESCRIPTION_LIMIT;
      while (description.charAt(index) !== ' ') {
        index--;
        if (description.charAt(index) === ' ') {
          description = description.slice(0, index) + '...';
          return description;
        }
      }
    }
  }
  return description;
}

function addQueryParam(query) {
  executeQuery(defaultAPI + query);
  var myUrl = document.location.origin;
  myUrl += query;
  document.location = myUrl;
}

function clickButton(btn, query) {
  btn.click(function() {
    $('.btn').removeClass('active');
    addQueryParam(query);
  });
}

executeQuery(defaultAPI);
clickButton($boarding, boardingQuery);
clickButton($sitting, sittingQuery);

$(document).ready(function() {
  var query = document.location.search;
  if (query.indexOf('boarding') !== -1) {
    $boarding.addClass('active');
  } else if (query.indexOf('sitting') !== -1) {
    $sitting.addClass('active');
  }
});