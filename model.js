const Tweeter = function () {
  /* attributes */
  const _posts = [
    {
      text: "First post!",
      id: "p1",
      likeCounter: 0,
      dislikeCounter: 0,
      // date: "Tue 11/28/2023 9:19 PM",
      date: "&nbsp; Tue &nbsp; 11/28/2023 &nbsp; 9:19 &nbsp; PM",
      comments: [
        { id: "c1", text: "First comment on first post!", editMode: false },
        { id: "c2", text: "Second comment on first post!!", editMode: false },
        { id: "c3", text: "Third comment on first post!!!", editMode: false },
      ],
      editMode: false,
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      likeCounter: 0,
      dislikeCounter: 0,
      // date: "Tue 11/28/2023 9:19 PM",
      date: "&nbsp; Tue &nbsp; 11/28/2023 &nbsp; 9:19 &nbsp; PM",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
          editMode: false,
        },
        { id: "c5", text: "Yeah, believe in yourself!", editMode: false },
        { id: "c6", text: "Haha second place what a joke.", editMode: false },
      ],
      editMode: false,
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
      editMode: false,
    };
    _posts.splice(0, 0, newPost);
    return newPost;
  }

  function updatePost(postID, newText) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    _posts[postIdx] = {
      ..._posts[postIdx],
      text: newText,
      date: _getDate(),
      editMode: false,
    };
  }

  function enterPostEditMode(postID) {
    const postIdx = _posts.findIndex((post) => post.id === postID);
    if (postIdx === -1) {
      return console.log("Post does not exist");
    }
    _posts[postIdx].editMode = true;
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
    const newComment = { id: _generateCommentID(), text, editMode: false };
    _posts[postIdx].comments.push(newComment);
    return newComment;
  }

  function enterCommentEditMode(postID, commentID) {
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
    _posts[postIdx].comments[commentIdx].editMode = true;
  }

  function updateComment(postID, commentID, newText) {
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
    _posts[postIdx].comments[commentIdx].text = newText;
    _posts[postIdx].comments[commentIdx].editMode = false;
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
    enterPostEditMode,
    updatePost,
    enterCommentEditMode,
    updateComment,
  };
};
