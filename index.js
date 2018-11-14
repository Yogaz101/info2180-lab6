window.onload=function(){
    var button=document.getElementById("search");
    var text=document.getElementById("lookup");
    
    function alertTest(){
         button.addEventListener("click", function(){
             var httpRequest = new XMLHttpRequest();
var url= "request.php?q="+text.value;
httpRequest.onreadystatechange = function(){
if (httpRequest.readyState=== XMLHttpRequest.DONE){
if (httpRequest.status===200){
var i=httpRequest.responseText;
document.getElementById("result").innerHTML=i;
} else{
alert("We cannot find your word");
}
}
};
httpRequest.open('GET', url);
httpRequest.send();
         });
    }
    
    alertTest();
}