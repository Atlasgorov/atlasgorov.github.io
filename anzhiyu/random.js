var posts=["2024/11/17/hello-world/","2024/11/17/集合框架/","2024/11/18/JVM/","2024/11/18/String/","2024/11/18/动态规划/","2024/11/18/多线程/","2024/11/18/流/","2024/11/18/面试题/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };