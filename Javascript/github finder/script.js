
    const searchInputt = document.getElementById("searchInput");
    const userInfo = document.getElementById("userInfo");
    const repoList = document.getElementById("repoList");


    function findInput(){
        const username = searchInputt.value;
        console.log(username)
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=>response.json())
        .then(user => {
            console.log(user)
            userInfo.innerHTML = `
               <img src = "${user.avatar_url}" alt="ProfilePicture" width=100/>
               <h2>User Name: ${user.name}<h2>
               <p>User Bio: ${user.bio}</p>
               <p>Public repositorie: ${user.public_repos}</p>
               <p>Follwers: ${user.followers}</p>
               <p>Following: ${user.following}</p>
               <a href="${user.html_url}" target="blank">Open in Github</a>

            `
        })
    }
