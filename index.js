window.onload=function(){
    var button=document.getElementById("search");
    var text=document.getElementById("lookup");
    
    function alertTest(){
         button.addEventListener("click", function(){
             alert("A statement of the exact meaning of a word, especially in a dictionary.");
         });
    }
    
    alertTest();
}