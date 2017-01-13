import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {

    editComment() {
      this.set('showEditForm', true);
    },

    updateComment(targetComment) {
      console.log('edit-comment');
      var newTextValue = this.get('text') ? this.get('text') : targetComment.text;
      var params = {
        newText: newTextValue,
        post: this.get('post')
      };
      this.sendAction('updateComment', params, targetComment);
      this.set('text', "");
      this.set('showEditForm', false);
    }
  }
});
