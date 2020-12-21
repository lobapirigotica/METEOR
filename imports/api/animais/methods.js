// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Animais } from './animais.js';

Meteor.methods({
  'animais.insert'(nome) {
    check(nome, String);


    return Animais.insert({
      nome,
      data: new Date(),
    });
  },
  'animais.delete'(id) {
    check(id, String);

    return Animais.remove(id);
  },
});
