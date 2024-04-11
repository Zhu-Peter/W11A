let items_JSON = Cookies.get(`username`);
let selected_items = JSON.parse(items_JSON);
// let selected_items = [];
let buttons = document.body.getElementsByClassName(`item_button`);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleSelection);

  if (!(selected_items.find(a => a.item_name === buttons[i].attributes.item_name.value) == undefined)) {
    buttons[i].style.backgroundColor = 'white';
  }
}

function toggleSelection() {
  if (!(selected_items.find(a => a.item_name === this.attributes.item_name.value) == undefined)) {
    this.style.backgroundColor = "darkgray";
    selected_items.splice(
      selected_items.findIndex(
        (a) => a.item_name === this.attributes.item_name.value
      ),
      1
    );
    updateCookies(selected_items);
  } else {
    this.style.backgroundColor = "white";

    let item_selection = {
      item_name: this.attributes.item_name.value,
      item_description: this.attributes.item_description.value,
      item_link: this.attributes.item_link.value,
    };
    selected_items.push(item_selection);
    updateCookies(selected_items);
  }
}

function updateCookies(value) {
  let value_JSON = JSON.stringify(value);
  Cookies.set("username", value_JSON);
  console.log(value)
}
