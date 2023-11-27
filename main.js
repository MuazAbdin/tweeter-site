const tweeter = Tweeter();
const renderer = Renderer();

renderer.renderPosts(tweeter.getPosts());

// tweeter.addPost("This is my own post!");
// renderer.renderPosts(tweeter.getPosts());

// tweeter.removePost("p1");
// renderer.renderPosts(tweeter.getPosts());

// tweeter.addComment("Damn straight it is!", "p3");
// tweeter.addComment("Second the best!", "p2");
// renderer.renderPosts(tweeter.getPosts());

// tweeter.removeComment("p2", "c6");
// renderer.renderPosts(tweeter.getPosts());
