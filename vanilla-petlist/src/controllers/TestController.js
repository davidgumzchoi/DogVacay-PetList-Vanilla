import $ from 'jquery'
import TestModel from '../models/TestModel';
import TestView from '../views/TestView';

class TestController {
  constructor() {
    console.log('Controller');
    this.model = new TestModel();
    this.view = new TestView();


  }

}

export default TestController;
