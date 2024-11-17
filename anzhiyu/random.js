var posts=["2024/11/17/hello-world/","2024/11/17/集合框架/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };