import { cardComponent } from "../components/cardComponent.js";

let renderArea = document.querySelector("#render-area");

fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => 
    data.map((item)=> {
        renderArea.innerHTML += cardComponent(item)
    })
);
