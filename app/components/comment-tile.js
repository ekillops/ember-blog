import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    deleteComment(targetComment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        var params = {
          post: this.get('post'),
          comment: targetComment
        };
        this.sendAction('deleteComment', params);
      }
    },

    updateComment(params, comment) {
      console.log('comment-tile');
      this.sendAction('updateComment', params, comment);
    },
  }
});
