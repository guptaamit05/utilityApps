let searchUser = document.querySelector('.input-section')
let mainDiv = document.querySelector('.filter-section')
let listItems = [];

fetch(window.env.FETCH_URL).then(result => {
    if (!result.ok) {
        throw new Error("Error: Something went wrong please try after some time.")
    }
    return result.json()
}).then((data) => {
    mainDiv.innerHTML = ""
    data.results.forEach(user => {

        let div = document.createElement('div')
        listItems.push(div);
        div.innerHTML = `<div class="user-section">
                        <img src=${user.picture.thumbnail} class="img-section"
                            alt="user with his or her pic">
                        <div class="address-section">
                            <span class="name">${user.name.first}</span>
                            <span class="address">${user.location.city} ${user.location.country}</span>
                        </div>                          
                    </div> `
        mainDiv.appendChild(div);
        return mainDiv
    });

}).catch((e) => {
    return `Error found:${e}`;
})


searchUser.addEventListener('input', (event) => {
    const searchQuery = event.target.value;
    searchByName(searchQuery); //
})

const searchByName = (searchParam) => {
    return listItems.filter(divv => {
        if(divv.innerText.toLowerCase().includes(searchParam.toLowerCase())){
            divv.classList.remove("hide")
        }else{
            divv.classList.add("hide")
        }
    });
};