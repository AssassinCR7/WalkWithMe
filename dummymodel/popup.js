document.addEventListener('DOMContentLoaded', function() {
    var rem = document.getElementById('rem');
    // onClick's logic below:
    rem.addEventListener('click', function() {
        document.getElementById('content').style.display='none';
        document.getElementById('reminder').style.display='block';
    });

    var st=document.getElementById('stop');
      st.addEventListener('click',function(){
      document.getElementById('reminder').style.display='none';
      document.getElementById('content').style.display='block';
    });
    var game = document.getElementById('game');
    game.addEventListener('click', function() {
    window.open("popup2.html",'Game',"resizable=no,location=no,width=384,height=480,left=50px,top=80px");
    });
    var news = document.getElementById('news');
    news.addEventListener('click', function() {
    window.open("https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en",'News',"resizable=no,location=no,width=384,height=480,left=50px,top=80px");
    });
    var puzz = document.getElementById('puzz');
    puzz.addEventListener('click', function() {
    window.open("https://www.puzzleprime.com/category/brain-teasers/detective/",'puzz',"resizable=no,location=no,width=500,height=600,left=50px,top=80px");
    });
});
