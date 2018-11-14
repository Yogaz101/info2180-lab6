window.onload=function(){
    var button=document.getElementById("search");
    var text=document.getElementById("lookup");
    
    function test(){
        button.addEventListener("click",function(){
        var httpRequest=new XMLHttpRequest();
        var url="request.php?q="+ text.value;
        httpRequest.onreadystatechange=function(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    var found=httpRequest.responseText;
                    document.getElementById("result").innerHTML=found;
                }
                else{
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET',url);
        httpRequest.send();
            });
        
    };
    
    
}