import { Collection } from 'backbone';
import $ from 'jquery'

class TestCollection extends Collection {
  constructor() {
    super();
  }

  initialize() {
    console.log('Collection');
  }
}

export default TestCollection;
