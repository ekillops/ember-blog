import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    viewPost(postId) {
      this.sendAction('viewPost', postId);
    }
  }
});
