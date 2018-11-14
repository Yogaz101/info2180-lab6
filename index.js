window.onload=function(){
    var button=document.getElementById("search");
    var text=document.getElementById("lookup");
    
    button.onclick=function(){
        console.log('Search button Clicked')
        var httpRequest=new XMLHttpRequest();
        var url="request.php?q="+ text.value;
        httpRequest.onreadystatechange=function(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    var response=httpRequest.responseText;
                    document.getElementById("result").innerHTML=response;
                }
                else{
                    alert('There was a problem with the request.');
                }
            }
        };
        httpRequest.open('GET',url);
        httpRequest.send();
    };
}