function X(){
p1=localStorage.getItem("loginplayer1");
p2=localStorage.getItem("loginplayer2");
p1score=0;
p2score=0;
document.getElementById("p1l").innerHTML=p1+":";
document.getElementById("p2l").innerHTML=p2+":";
document.getElementById("p1lscore").innerHTML=p1score;
document.getElementById("p2lscore").innerHTML=p2score;
document.getElementById("question").innerHTML="question turn-"+p1;
document.getElementById("answer").innerHTML="answer turn-"+p2;
} 
function send(){
  wor=document.getElementById("word").value;
  wo=wor.toLowerCase();
  console.log("word",wo);
  charaT1=wo.charAt(1);
  console.log("the first dash",charaT1);
  y=Math.floor(wo.length/2);
  charAt2=wo.charAt(y);
  console.log("the second dash",charAt2);
  z=wo.length-1;
  charaT3=wo.charAt(z);
  console.log("the third dash",charaT3);
  r1=wo.replace(charaT1,"_");
  r2=r1.replace(charAt2,"_");
  r3=r2.replace(charaT3,"_");
  console.log("the final dash",r3);
  question_word = "<h4 id='word_display'> Q. "+r3+"</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn="player1";
answer_turn="player2";
function check(){
 xy=document.getElementById("input_check_box").value;
xy2=xy.toLowerCase();
console.log(xy2);
if(wo==xy2){
if(answer_turn=="player1"){
p1score=p1score+1;
document.getElementById("p1lscore").innerHTML=p1score;
}
else{
  p2score=p2score+1;
  document.getElementById("p2lscore").innerHTML=p2score;
}
}
if(question_turn=="player1"){
question_turn=="player2";
document.getElementById("question").innerHTML="question turn-"+p2;
}
else{
  question_turn=="player1";
  document.getElementById("question").innerHTML="question turn-"+p1;
}
if(answer_turn=="player1"){
answer_turn=="player2";
document.getElementById("answer").innerHTML="answer turn-"+p2;
}
else{
  answer_turn=="player1";
document.getElementById("answer").innerHTML="answer turn-"+p1;
}
}
