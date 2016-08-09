import { Model } from 'backbone';
import $ from 'jquery'

class TestModel extends Model {
  constructor() {
    super();
  }

  initialize() {
    console.log('Model');
  }
}

export default TestModel;
