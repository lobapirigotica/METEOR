import { Animais } from '/imports/api/animais/animais.js';
import { Meteor } from 'meteor/meteor';
import './animais.html';

Template.animais.onCreated(function () {
  Meteor.subscribe('animais.all');
});

Template.animais.helpers({

  animais() {
    
    return Animais.find({});
  },
  
});


Template.animais.events({
  'submit .animais-add'(event) {
    event.preventDefault();

    const target = event.target;
    const nome = target.nome;

    Meteor.call('animais.insert', nome.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        nome.value = '';
      }
    });
  },
  'click .delete'() {

    Meteor.call('animais.delete', this._id);
  }
});
