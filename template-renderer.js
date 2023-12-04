const Renderer = function () {
  Handlebars.registerHelper("getType", (obj) => {
    return obj.id[0] === "p" ? "post" : "comment";
  });
  Handlebars.registerHelper("isEven", (index) =>
    index % 2 === 0 ? "even" : ""
  );

  Handlebars.registerPartial("editingBtns", $("#editng-btns-template").html());
  Handlebars.registerPartial("commentBody", $("#comment-body-template").html());
  Handlebars.registerPartial("allComments", $("#all-comments-template").html());
  Handlebars.registerPartial("addComment", $("#add-comment-template").html());
  Handlebars.registerPartial("likeDateBar", $("#likeNdate-template").html());
  Handlebars.registerPartial("postBody", $("#post-body-template").html());

  const allPostsTemplate = Handlebars.compile($("#all-posts-template").html());

  /* Public methods */
  const renderPosts = function (posts) {
    $(".all-posts").empty();
    $(".all-posts").append(allPostsTemplate({ posts }));
  };

  return { renderPosts };
};
