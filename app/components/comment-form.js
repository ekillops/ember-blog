import Ember from 'ember';

export default Ember.Component.extend({
  showCommentForm: false,
  actions: {
    newComment() {
      this.set('showCommentForm', true);
    },

    saveComment() {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        date: new Date().toDateString(),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
      this.set('showCommentForm', false);
    },
    
  }
});
