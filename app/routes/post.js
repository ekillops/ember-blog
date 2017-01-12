import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  showComments: false,
  actions: {

    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },

    delete(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },

    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('post', post.id);
    },

    deleteComment(params) {
      console.log('post');
      var comment = params.comment;
      var postId = params.post.id;
      comment.destroyRecord();
      this.transitionTo('post', postId);
    }
  }
});
