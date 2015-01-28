var templates = {};

templates.post = [
  "<article data-index='<%= idx %>'>",
  "<h3><%= title %></h3>",
  "<p><%= content %></p>",
  "<p>- <%= author %></p>",
  "<p><button class='deletePost'>Delete</button> <button</p>",
  "<img src='<%= photo %>'>",
  "</article>"

].join("");


templates.sidebar = "<p><%= selftext %></p>";
