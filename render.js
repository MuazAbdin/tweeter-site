const Renderer = function () {
  /* Private methods */
  const _renderEdtingBtns = (type) => {
    return `
      <div class="editing-btns ${type}-btns">
        <button class="btn del-btn">
          <span class="material-symbols-outlined"> delete </span>
        </button>
        <button class="btn edit-btn">
          <span class="material-symbols-outlined"> edit_note </span>
        </button>
      </div>
    `;
  };

  const _renderEditComment = (text) => {
    return `
      <div class="new-text-component edit-comment">
        <input
          class="text-input"
          type="text"
          id="edited-comment-text"
          name="edited-comment-text"
          value="${text}"
        />
        <button class="btn edit-comment-btn">
          <span class="material-symbols-outlined"> send </span>
        </button>
      </div>
    `;
  };

  const _renderCommetBody = (comment) => {
    return comment.editMode
      ? _renderEditComment(comment.text)
      : `<p class="comment-text">${comment.text}</p>`;
  };

  const _renderComments = (comments) => {
    let allComments = "";
    comments.forEach((comment, idx) => {
      const isEven = idx % 2 === 0 ? "even" : "";
      allComments += `
          <div class="comment-controller ${isEven}" data-id="${comment.id}">
          ${_renderCommetBody(comment)} 
          ${_renderEdtingBtns("comment")}
          </div>
      `;
    });

    return `<div class="all-comments"> ${allComments} </div>`;
  };

  const _renderAddCommnet = (id) => {
    return `
      <div class="new-text-component new-comment">
        <input
          class="text-input"
          type="text"
          id="comment-text-${id}"
          name="comment-text-${id}"
          placeholder="Got something to say?"
        />
        <button class="btn comment-btn">
          <span class="material-symbols-outlined"> send </span>
        </button>
      </div>
    `;
  };

  const _renderLikeDateBar = (likeCounter, dislikeCounter, date) => {
    return `
      <div class="like-date-bar">
        <div class="like-post">
          <span class="btn like-btn material-symbols-outlined">
            thumb_up
            <div class="counter like-counter">${likeCounter}</div>
          </span>
          <span class="btn dislike-btn material-symbols-outlined">
            thumb_down
            <div class="counter dislike-counter">${dislikeCounter}</div>
          </span>
        </div>
        <div class="post-date">
          <b>Last Updated:</b>${date}
        </div>
      </div>
    `;
  };

  const _renderEditPost = (text) => {
    return `
      <div class="new-text-component edit-post">
        <input
          class="text-input"
          type="text"
          id="edited-post-text"
          name="edited-post-text"
          value="${text}"
        />
        <button class="btn edit-post-btn">
          <span class="material-symbols-outlined"> send </span>
        </button>
      </div>
    `;
  };

  const _renderPostBody = (post) => {
    return post.editMode
      ? _renderEditPost(post.text)
      : `<p class="post-text">${post.text}</p>`;
  };

  /* Public methods */
  const renderPosts = function (posts) {
    $(".all-posts").empty();
    posts.forEach((post) => {
      $(".all-posts").append(`
        <article class="post" data-id="${post.id}">
          <div class="post-controller">
            ${_renderPostBody(post)}            
            ${_renderEdtingBtns("post")}
            ${_renderLikeDateBar(
              post.likeCounter,
              post.dislikeCounter,
              post.date
            )}
          </div>
          ${_renderComments(post.comments)}
          ${_renderAddCommnet(post.id)}
        </article>
      `);
    });
  };

  return { renderPosts };
};
