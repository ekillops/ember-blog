import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {

    showForm() {
      this.set('showEditForm', true);
    },

    updatePost(post) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        text: this.get('text')
      };
      this.sendAction('updatePost', post, params);
      this.set('showEditForm', false);
    }
  }
});
