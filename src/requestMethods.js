import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://ak-shop-api.herokuapp.com/api"

console.log(JSON.parse(localStorage.getItem("persist:root")).user);

var TOKEN ="";
if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser != null){

    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

}




export const publicRequest = axios.create({
    baseURL : BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});