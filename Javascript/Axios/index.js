const url = "https://jsonplaceholder.typicode.com/posts";
document.getElementById('getButton').addEventListener('click',()=>{
    axios.get(url)
    .then(response => myResponse(response))
})
document.getElementById("postButton").addEventListener('click',()=>{
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    axios.post(url,{title,body,userId:1})
    .then(response => myResponse(response))
})
function myResponse(x){
    const responseTag = document.getElementById("response");
    responseTag.innerText= JSON.stringify(x.data,null,2);
}