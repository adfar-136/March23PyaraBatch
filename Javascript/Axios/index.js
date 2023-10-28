const url = "https://jsonplaceholder.typicode.com/posts";
document.getElementById('getButton').addEventListener('click',()=>{
    axios.get(url)
    .then(response => myResponse(response))
})
document.getElementById("postButton").addEventListener('click',()=>{
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    axios.post(url,{title,body,userId:1})
    .then(response => myResponse(response));
})
document.getElementById("putButton").addEventListener('click',async ()=>{
    const id = document.getElementById("updateId").value;
    const updateTtitle = document.getElementById("updateTitle").value;
    const updateBody = document.getElementById("updateBody").value;
    axios.put(`${url}/${id}`,{title:updateTtitle,body:updateBody})
    .then(response => myResponse(response));
})
document.getElementById("deleteButton").addEventListener('click',async ()=>{
    const id = document.getElementById("deleteId").value;
    axios.put(`${url}/${id}`)
    .then(response => myResponse(response));
})

function myResponse(x){
    const responseTag = document.getElementById("response");
    responseTag.innerText= JSON.stringify(x.data,null,2);
}