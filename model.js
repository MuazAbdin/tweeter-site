const Tweeter = function () {
  /* attributes */
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 2;
  let commentIdCounter = 6;

  /* Private Methods */
  function _generatePostID() {
    return `p${++postIdCounter}`;
  }

  function _generateCommentID() {
    return `c${++commentIdCounter}`;
  }

  /* Public Methods */
  function getPosts() {
    return _posts;
  }

  function addPost(text) {
    const newPost = { text, id: _generatePostID(), comments: [] };
    _posts.push(newPost);
    return newPost;
  }

  function removePost(postID) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    _posts.splice(postIdx, 1);
    // _posts.filter((post) => post.id !== postID);
  }

  function addComment(text, postID) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    const newComment = { id: _generateCommentID(), text };
    _posts[postIdx].comments.push(newComment);
    return newComment;
  }

  function removeComment(postID, commentID) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    const commentIdx = _posts[postIdx].comments.findIndex(
      (comment) => comment.id === commentID
    );
    if (commentIdx === -1) {
      return console.log("Comment does not exist");
    }
    _posts[postIdx].comments.splice(commentIdx, 1);
  }

  return { getPosts, addPost, removePost, addComment, removeComment };
};
