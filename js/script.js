(function () {

  $("body").on("dblclick", "h1", function () {
    var id = window.location.pathname.split("/")[3]

    $.ajax({
      url: "https://time.geekbang.org/serv/v1/article",
      method: "POST",
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify({ id: id, include_neighbors: true }),

      success: function (rsp) {
        if (rsp.data) {
          var html = `
            <!DOCTYPE html>
            <html>
              <head>
              <meta charset="utf-8">
              <title>${rsp.data.article_title}</title>
              <style>
                #print-content {width: 1000px; margin: auto; }
                #print-conent img {width: 1000px; }
                #print-content pre {border: 1px solid black; padding: 10px; }
              </style>
              </head>
              <body>
                <div id='print-content'>
                  <h1 id='title'>
                    ${ rsp.data.article_title}
                  </h1>
                  ${rsp.data.article_content}
                </div>
              </body>
            </html>
            `

          $("html").html(html)
        } else {
          console.log("api error ", rsp.error.msg)
        }
      }
    })
  })
})();
