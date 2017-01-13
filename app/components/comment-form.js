import Ember from 'ember';

export default Ember.Component.extend({
  showCommentForm: false,
  actions: {
    newComment() {
      this.set('showCommentForm', true);
    },

    saveComment() {
      var params = {
        author: this.get('author') ? this.get('author') : "Guest",
        text: this.get('text') ? this.get('text') : "",
        date: new Date().toDateString(),
        post: this.get('post') ? this.get('post') : ""
      };
      this.sendAction('saveComment', params);
      this.set('showCommentForm', false);
    },

  }
});
