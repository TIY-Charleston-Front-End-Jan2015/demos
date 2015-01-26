var templates = {};

templates.post = [
  "<article>",
  "<h3><%= title %></h3>",
  "<p><%= content %></p>",
  "<blockquote><%= author %></blockquote>",
  "</article>"

].join("");

templates.sidebar = "<p><%= selftext %></p>";
