import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author'): "Anonymous",
        inquiry: this.get('inquiry') ? this.get('inquiry'): "",
        thoughts: this.get('thoughts') ? this.get('thoughts'): "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
