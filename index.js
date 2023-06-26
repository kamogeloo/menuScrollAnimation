

const menu = document.getElementById("menu");
const icons = document.getElementById("icons");


//select our menu items and covert to an array

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;

        // if(index == 0){
          
        // }
  
  }
  

});

