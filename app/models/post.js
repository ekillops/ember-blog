import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  category: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  text: DS.attr(),
  title: DS.attr()
});