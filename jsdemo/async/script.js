import { cardComponent } from "./cardComponent.js";

let renderArea = document.querySelector("#render-area")

let BASE_URL = "https://api.escuelajs.co/api/v1/"
// async/await
const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}products`);
        const data = await response.json();
        console.log("Products ", data)
    } catch (error) {
        console.log(error)
    }
}
getProducts()

const getCategory = async () => {
    try {
        const response = await fetch(`${BASE_URL}categories`);
        const data = await response.json();
        console.log("Category ", data)
    } catch (error) {
        console.log(error)
    }
}
getCategory()

const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        console.log("Users ", data)
        data.map((user)=> {
            renderArea.innerHTML += cardComponent(user)
        })
    } catch (error) {

        console.log(error)
    }
}
getUsers()