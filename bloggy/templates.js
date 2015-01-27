var templates = {};

templates.post = [
  "<article data-index='<%= idx %>'>",
  "<h3><%= title %></h3>",
  "<p><%= content %></p>",
  "<blockquote><%= author %></blockquote>",
  "<p><button class='deletePost'>Delete</button></p>",
  "</article>"

].join("");


templates.sidebar = "<p><%= selftext %></p>";
