import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(targetComment) {
      var params = {
        post: this.get('post'),
        comment: targetComment
      };
      this.sendAction('deleteComment', params);
    }
  }
});
