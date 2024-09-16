import { cardComponent } from "../components/Card.js";
import { data } from "../data/products.js";

let renderArea = document.querySelector("#render-area")

data.filter(product => product.category === "men's clothing").map((product)=> {
    console.log(product)
   renderArea.innerHTML += cardComponent(product)
})