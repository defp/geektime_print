(function () {
  id = window.location.pathname.split("/")[3]

  $("body").on("dblclick", "h1", function () {
    $.ajax({
      url: "https://time.geekbang.org/serv/v1/article",
      method: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: id, include_neighbors: true }),
      success: function (rsp) {
        if (rsp.data) {
          article_content = rsp.data.article_content
          title = "<h1 id='title'>" + rsp.data.article_title + "</h1>"
          $("#app").replaceWith(title + article_content)
        } else {
          console.log("api error ", rsp.error.msg)
        }
      }
    })

    $('body').css({ "width": "1000px", "margin": "auto", "margin-top": "30px"})
  })
})();