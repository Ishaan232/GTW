function a(){
 x=document.getElementById("Input1").value;
 y=document.getElementById("Input2").value;
 localStorage.setItem("loginplayer1",x);
 localStorage.setItem("loginplayer2",y);
 window.location="page.html";
}