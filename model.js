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

  function _findRecordByID(records, id) {
    const idx = records.findIndex((record) => record.id === id);
    if (idx === -1) {
      throw new Error("ID does not exist");
    }
    return idx;
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
    try {
      const postIdx = _findRecordByID(_posts, postID);
      _posts[postIdx].text = newText;
      _posts[postIdx].date = _getDate();
      _posts[postIdx].editMode = false;
    } catch (error) {
      console.log(error.message);
    }
  }

  function enterPostEditMode(postID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      _posts[postIdx].editMode = true;
    } catch (error) {
      console.log(error.message);
    }
  }

  function removePost(postID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      _posts.splice(postIdx, 1);
    } catch (error) {
      console.log(error.message);
    }
  }

  function addComment(text, postID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      const newComment = { id: _generateCommentID(), text, editMode: false };
      _posts[postIdx].comments.push(newComment);
      return newComment;
    } catch (error) {
      console.log(error.message);
    }
  }

  function enterCommentEditMode(postID, commentID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      const commentIdx = _findRecordByID(_posts[postIdx].comments, commentID);
      _posts[postIdx].comments[commentIdx].editMode = true;
    } catch (error) {
      console.log(error.message);
    }
  }

  function updateComment(postID, commentID, newText) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      const commentIdx = _findRecordByID(_posts[postIdx].comments, commentID);
      _posts[postIdx].comments[commentIdx].text = newText;
      _posts[postIdx].comments[commentIdx].editMode = false;
    } catch (error) {
      console.log(error.message);
    }
  }

  function removeComment(postID, commentID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      const commentIdx = _findRecordByID(_posts[postIdx].comments, commentID);
      _posts[postIdx].comments.splice(commentIdx, 1);
    } catch (error) {
      console.log(error.message);
    }
  }

  function likePost(postID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      _posts[postIdx].likeCounter++;
    } catch (error) {
      console.log(error.message);
    }
  }

  function dislikePost(postID) {
    try {
      const postIdx = _findRecordByID(_posts, postID);
      _posts[postIdx].dislikeCounter++;
    } catch (error) {
      console.log(error.message);
    }
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
