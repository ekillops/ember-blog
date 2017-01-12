import Ember from 'ember';

export default Ember.Component.extend({
  showComments: false,
  actions: {

    viewComments() {
      this.set('showComments', true);
    },

    saveComment(params) {
      this.sendAction('saveComment', params);
    }
  }
});
