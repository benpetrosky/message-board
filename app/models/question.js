import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  inquiry: DS.attr(),
  thoughts: DS.attr(),
});
