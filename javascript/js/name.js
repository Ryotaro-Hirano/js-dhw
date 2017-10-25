//js12.htmlのjs


window.onload=function () {
  var yourName=window.prompt("入力欄に名前をお書きください。","ここに入力してください。");

  if (yourName=="ここに入力してください。") {
        document.write("<p>お名前の入力をお忘れになったようですね。</p>");
  }else if (yourName=="" || yourName==mull){
    document.write("<p>お名前の入力をしていただきたかったです。</p>");
  }else {
    document.write("<p>ようこそ"+yourName+"さん！条件分岐の理解も進んで来ましたね！</p>");
  }
}
