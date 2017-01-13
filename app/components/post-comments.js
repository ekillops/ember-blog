import Ember from 'ember';

export default Ember.Component.extend({
  showComments: false,
  actions: {

    viewComments() {
      this.toggleProperty('showComments');
    },

    saveComment(params) {
      this.sendAction('saveComment', params);
    },

    deleteComment(params) {
      this.sendAction('deleteComment', params);
      this.set('showComments', false);
    },

    updateComment(params, comment) {
      console.log('post-comments');
      this.sendAction('updateComment', params, comment);
    }
  }
});
