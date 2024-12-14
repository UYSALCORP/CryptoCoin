import displayCoin from "./displayCoin";
import axios from "axios";

// main.js'den gönderdiğimiz parametreyi burada yakalamış olduk
 //! Fetch yapısı ile veri çekme
// export const getCoin = (query) => {
//     console.log("getCoin çalıştı!", query);
//     const url = `https://api.coinranking.com/v2/coins?search=${query}`

//     const options = {
//         headers: {
//           'x-access-token': 'coinrankingec2befef4c368a6bba62ed79b2c35806a712ffc8888543b6',
//         },
//       };
//       fetch(url, options)
//         .then((response) => response.json())
//         .then((result) => console.log(result));
      
// }
//! Async-Await Yapısı ile veri çekme
// export const getCoin = async (query) => {
//     console.log("getCoin çalıştı!", query);

//     const url = `https://api.coinranking.com/v2/coins?search=${query}`

//     const options = {
//         headers: {
//           'x-access-token': 'coinrankingec2befef4c368a6bba62ed79b2c35806a712ffc8888543b6',
//         },
//       };
//      try {
//         const res = await fetch(url, options)
//         const coinData = await res.json()
//      } catch (error) {
//         console.log("Ooops Hata Oluştu");
//      }
      
// }
//! AXIOS ile veri çekme | Axios otomatik json yapısında verir. : 3rd party - npm install axios
export const getCoin = async (query) => {
    // console.log("getCoin çalıştı!", query);

    const url = `https://api.coinranking.com/v2/coins?search=${query}`

    const options = {
        headers: {
          'x-access-token': 'coinrankingec2befef4c368a6bba62ed79b2c35806a712ffc8888543b6',
        },
      };

    const res = await axios(url, options)
    //* Axios: veriyi data keyinde verir. ilk data axios, ikinci data apiden gelen veri
    if (!res.data.data.coins.length) {
        alert("Coin bulunamadı.")
    } else {
        // console.log("Coin bulundu -> ", res.data.data.coins[0].name);
        displayCoin(res.data.data.coins[0])
    }
}


// export default getCoin