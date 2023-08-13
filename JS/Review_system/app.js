const previous=document.getElementById('Previous');
const next=document.getElementById('Next');
let count=0;
const image=[]
const paragraph=["1. lorem ispaff ijhfioasf ioafsh ifasoifh oiafhnofioa ioiofas ","2. ifahsoiiafohso ioiafhasoifiosahfifhnods","3. idoshodiosghsdig gisdghoigsdo giisdghsiogewiogppqoj j qpoffkdnfiwhegivsindvefisdj mvienfvsdiifsn ejrfidsflkrfi","4. fuqio fiffa fhqeugsuai afua ionfafnaeo wihewiofh","5. uofeohaewophau uaefgunfvu aufug aga urag uagang"];
document.getElementById("paragraph").innerText=paragraph[0];
next.addEventListener('click',function(){
    if(count<5){
    document.getElementById("paragraph").innerText=paragraph[count];
    count++;}
    else{
        count=0;
    }
})
previous.addEventListener('click',function(){
    if(count>0){
        count--;
        document.getElementById("paragraph").innerText=paragraph[count];
    }
    else{
        count=5;
    }
})  