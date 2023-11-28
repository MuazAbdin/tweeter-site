const tweeter = Tweeter();
const renderer = Renderer();

/* EventListeners */
// TWIT button
$("#post-btn").click(function () {
  const text = $(this).prev();
  // console.log(text.val());
  tweeter.addPost(text.val());
  text.val("");
  renderer.renderPosts(tweeter.getPosts());
});

// Delete Post button
$(".all-posts").on("click", ".post-controller .del-btn", function () {
  tweeter.removePost($(this).closest(".post").data().id);
  renderer.renderPosts(tweeter.getPosts());
});

renderer.renderPosts(tweeter.getPosts());
