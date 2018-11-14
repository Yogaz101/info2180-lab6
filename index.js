window.onload=function(){
    var button=document.getElementById("search");
    var text=document.getElementById("lookup");
    
    function alertTest(){
         button.addEventListener("click", function(){
             var httpRequest = new XMLHttpRequest();
             var url= "request.php?q="+text.value;
             httpRequest.onreadystatechange = function(){
             
    
    alertTest();
}