const Renderer = function () {
  /* Private methods */
  const _renderDelBtn = (text) => {
    return `
      <button class="btn del-btn">
        <span class="material-symbols-outlined"> delete </span>
        ${text || ""}
      </button>
    `;
  };

  const _renderComments = (comments) => {
    let allComments = "";
    comments.forEach((comment) => {
      allComments += `
          <div class="comment-controller" data-id="${comment.id}">
            ${_renderDelBtn()}
            <p class="comment-text">${comment.text}</p>
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
        <button class="post-btn">Comment</button>
      </div>
    `;
  };

  /* Public methods */
  const renderPosts = function (posts) {
    $(".all-posts").empty();
    posts.forEach((post) => {
      $(".all-posts").append(`
        <article class="post" data-id="${post.id}">
          <div class="post-controller">
            <p class="post-text">${post.text}</p>
            ${_renderDelBtn("Delete Post")}
          </div>
          ${_renderComments(post.comments)}
          ${_renderAddCommnet(post.id)}
        </article>
      `);
    });
  };

  return { renderPosts };
};
