// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Animais } from '../animais.js';

Meteor.publish('animais.all', function () {
  return Animais.find();
});
