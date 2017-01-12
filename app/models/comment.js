import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  text: DS.attr(),
  date: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
