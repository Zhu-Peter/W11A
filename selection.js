let items_JSON = Cookies.get(`username`);
let items = JSON.parse(items_JSON);
// console.log(items)

let container = document.getElementById("items_container")

for (let i = 0; i<items.length;i++){
    container.insertAdjacentHTML("beforeend", `
    <div class="item">
                <h1 class="item_title">${items[i].item_name}</h1>
                <p>${items[i].item_description}</p>
                <img style="width: 200px;" src="${items[i].item_link}" alt=""><br>
                <button class="item_button" item_name="${items[i].item_name}">Remove</button>
            </div>
    `)
    document.body.getElementsByClassName(`item_button`)[i].addEventListener('click', RemoveItem)
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