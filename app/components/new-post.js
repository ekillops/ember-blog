import Ember from 'ember';

export default Ember.Component.extend({
  showNewForm: false,
  actions: {
    newPost() {
      this.set('showNewForm', true);
    },
    savePost() {
      console.log(this);
      var params = {
        author: this.get('author'),
        category: "",
        date: new Date().toDateString(),
        image: this.get('image'),
        text: this.get('text'),
        title: this.get('title')
      };
      this.sendAction('savePost', params);
      this.set('showNewForm', false);
    }
  }
});
