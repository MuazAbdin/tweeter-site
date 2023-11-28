const Tweeter = function () {
  /* attributes */
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      likeCounter: 0,
      dislikeCounter: 0,
      date: "&nbsp; Tue &nbsp; 11/28/2023 &nbsp; 9:19 &nbsp; PM",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      likeCounter: 0,
      dislikeCounter: 0,
      date: "&nbsp; Tue &nbsp; 11/28/2023 &nbsp; 9:19 &nbsp; PM",
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

  function _getDate() {
    let date = new Date();
    const day = date.toString().slice(0, 3);
    let time = date.toLocaleString();
    time = time.slice(0, -6) + time.slice(-3);
    time = time.split(" ");
    return (
      `&nbsp; ${day} ` +
      `&nbsp; ${time[0].slice(0, -1)} ` +
      `&nbsp; ${time[1]} ` +
      `&nbsp; ${time[2]}`
    );
  }

  /* Public Methods */
  function getPosts() {
    return _posts;
  }

  function addPost(text) {
    const newPost = {
      text,
      id: _generatePostID(),
      likeCounter: 0,
      dislikeCounter: 0,
      date: _getDate(),
      comments: [],
    };
    _posts.splice(0, 0, newPost);
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

  function likePost(postID) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    _posts[postIdx].likeCounter++;
  }

  function dislikePost(postID) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    _posts[postIdx].dislikeCounter++;
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
    likePost,
    dislikePost,
  };
};
