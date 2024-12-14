import "./scss/style.scss"
import {getCoin} from "./src/getCoin" // default olarak import ederken {Süslü Parantez} kullanmıyoruz.
import notify from "./src/notify"

const form = document.querySelector("header form")

// console.log(form)

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("form tetiklendi");

    getInputVal()
    form.reset() // Search butonuna tıkladıktan sonra form'a reset çekecek : e.target.reset() ile aynı şey
})

const getInputVal = () => {
    const inputVal = document.querySelector("header form input").value
    console.log(inputVal);

    if (!inputVal.trim()){ // trim() sağda ve soldaki boşlukları siler.
        notify("İnput'u boş bırakma!", "warning")
    } else {
        // console.log("İnput dolduruldu:", inputVal);
        getCoin(inputVal)
    }
}