var posts=["2024/11/17/集合框架/","2024/11/18/JVM/","2024/11/18/String/","2024/11/18/动态规划/","2024/11/18/多线程/","2024/11/18/流/","2024/11/18/面试题/","2024/11/18/JDK17/","2024/11/18/JDK21/","2024/11/18/EasyExcel/","2024/11/18/EffectiveJava/","2024/11/18/高效能人士的七个习惯/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };