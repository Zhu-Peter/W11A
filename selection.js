let items_JSON = Cookies.get(`username`);
let items = JSON.parse(items_JSON);
// console.log(items)

let container = document.getElementById("items_container")

if (items.length == 0){
    document.getElementById("items_title").innerHTML = `<h2 style="color: red;" class="item_title">Please Select an Item</h2>`
}else{
    for (let i = 0; i<items.length;i++){
        container.insertAdjacentHTML("beforeend", `
        <div class="item" style="display: grid;
        background-color: rgb(243, 162, 162);
        padding: 30px;
        max-width: 50vw">
                    <h1 class="item_title">${items[i].item_name}</h1>
                    <p>${items[i].item_description}</p>
                    <img style="width: 200px;" src="${items[i].item_link}" alt=""><br>
                    <button class="item_button" item_name="${items[i].item_name}">Remove</button>
                </div>
        `)
        document.body.getElementsByClassName(`item_button`)[i].addEventListener('click', RemoveItem)
    }

}    

function RemoveItem(){
    // console.log("remove", this)
    items.splice(
        items.findIndex(
          (a) => a.item_name === this.attributes.item_name.value
        ),
        1
      );
      updateCookies(items);
}

function updateCookies(value) {
    let value_JSON = JSON.stringify(value);
    Cookies.set("username", value_JSON);
    console.log(value)
  }