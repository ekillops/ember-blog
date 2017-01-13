import Ember from 'ember';

export default Ember.Component.extend({
  showNewForm: false,
  actions: {
    newPost() {
      this.set('showNewForm', true);
    },
    savePost() {
      var params = {
        author: this.get('author') ? this.get('author') : "Guest",
        date: new Date().toDateString(),
        image: this.get('image') ? this.get('image') : "https://static.pexels.com/photos/249798/pexels-photo-249798.png",
        text: this.get('text') ? this.get('text') : "",
        title: this.get('title') ? this.get('title') : ""
      };
      this.sendAction('savePost', params);
      this.set('showNewForm', false);
    }
  }
});
