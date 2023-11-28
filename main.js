const tweeter = Tweeter();
const renderer = Renderer();

/* EventListeners */
// TWIT button
$(".post-btn").click(function () {
  const input = $(this).prev();
  // console.log(input.val());
  tweeter.addPost(input.val());
  input.val("");
  renderer.renderPosts(tweeter.getPosts());
});

// Delete Post button
$(".all-posts").on("click", ".post-controller .del-btn", function () {
  tweeter.removePost($(this).closest(".post").data().id);
  renderer.renderPosts(tweeter.getPosts());
});

// Like Post button like_btn
$(".all-posts").on("click", ".like-btn", function () {
  tweeter.likePost($(this).closest(".post").data().id);
  renderer.renderPosts(tweeter.getPosts());
});

// Dislike Post button like_btn
$(".all-posts").on("click", ".dislike-btn", function () {
  tweeter.dislikePost($(this).closest(".post").data().id);
  renderer.renderPosts(tweeter.getPosts());
});

// Add Comment button
$(".all-posts").on("click", ".comment-btn", function () {
  const postID = $(this).closest(".post").data().id;
  const input = $(this).prev();
  tweeter.addComment(input.val(), postID);
  input.val("");
  renderer.renderPosts(tweeter.getPosts());
});

// Delete Comment button
$(".all-posts").on("click", ".comment-controller .del-btn", function () {
  const postID = $(this).closest(".post").data().id;
  const commentID = $(this).closest(".comment-controller").data().id;
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});

renderer.renderPosts(tweeter.getPosts());
