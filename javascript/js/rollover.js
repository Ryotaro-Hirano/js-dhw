  window.onload=function() {
    document.getElementById("ttl").style.color="#090";
    document.getElementById("ttl").style.fontSize="1.2em";
  }

  var preImg=new Image();
  preImg.src="img/photo01_s_on.jpg";

  document.getElementById("cafeImg").onmouseover=function() {
    document.getElementById("cafeImg").setAttribute("src","img/photo01_s_on.jpg");
  }

  document.getElementById("cafeImg").onmouseOut=function() {
        document.getElementById("cafeImg").setAttribute("src","img/photo01_s.jpg");
  }
