import { View } from 'backbone';
import $ from 'jquery';
import TestModel from '../models/TestModel';
import TestCollection from '../collections/TestCollection';

var template = require('../handlebars/test.handlebars');

class TestView extends View {

  constructor() {
    super();
  }

  get el() {
    return '#petList';
  }

  initialize() {
    console.log('View');
    this.model = new TestModel();
    this.collection = new TestCollection();
    this.render();
  }

  render() {
   let html = template({foo: 'world'});
    this.$el.html(html);
  }
}

export default TestView;
