import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyB6oDp5IFCBSdltiOE09mKWLirPj2DFeSM",
    authDomain: "baho.firebaseapp.com",
    databaseURL: "https://baho.firebaseio.com",
    projectId: "firebase-baho",
    storageBucket: "firebase-baho.appspot.com",
    messagingSenderId: "71010357477"
};
firebase.initializeApp(config);

const database = firebase.database();

// // ----------------------------SAVE-------------------------------------

// database.ref().set({
//     name: "Selçuk",
//     age: 30,
//     isSingle: false,
//     location: {
//         city: "İstanbul",
//         country: "Turkey"
//     }
// }).then(() => {
//     console.log("data is saved.");
// }).catch(err => {
//     console.log("it is error", err);
// });

// database.ref("age").set(40).then(() => {
//     console.log("data is updated.");
// }).catch(err => {
//     console.log("it is error", err);
// });
// database.ref("location/city").set("Edirne").then(() => {
//     console.log("data is updated.");
// }).catch(err => {
//     console.log("it is error", err);
// });
// database.ref("attributes").set({
//     width: 76,
//     height: 182
// }).then(() => {
//     console.log("data is updated.");
// }).catch(err => {
//     console.log("it is error", err);
// });


// // ----------------------------DELETE-------------------------------------

// // kayıt silmek için null olarak set edebiliriz veya remove metodunu kullanabiliriz.
// database.ref("isSingle").set(null);

// database.ref("isSingle").remove().then(() => {
//     console.log("isSingle is removed.");
// }).catch(err => {
//     console.log("delete err", err);
// });

// // ----------------------------UPDATE-------------------------------------

// database.ref().update({
//     name:"Name Updated",
//     position:"Computer Developer",
//     "location/city":"Konta"
// }).then(() => {
//     console.log("name and age is updated.");
// }).catch(err => {
//     console.log("update err", err);
// });

// ----------------------------READ-------------------------------------

// Read All Value

// database.ref().once("value")
//     .then(
//     snaphot => {
//         const val = snaphot.val();
//         console.log(val);
//     }
//     )
//     .catch(err => {
//         console.log("Error fetching data, ", err);
//     });

// Read Single Value

// database.ref("location/city").once("value")
//     .then(
//     snaphot => {
//         const val = snaphot.val();
//         console.log(val);
//     }
//     )
//     .catch(err => {
//         console.log("Error fetching data, ", err);
//     });

// Bu realtime olarak değişen datayı gösterir.

// database.ref().on("value", snaphot => {
//     console.log(snaphot.val());
// },(err) => {
//     console.log(err,"Error with data fetching");
// });

// setTimeout(() => {
//     database.ref("age").set(35);
// }, 3000);

// // bu komut ile değişiklikleri gönderme diyoruz
// setTimeout(() => {
//     database.ref().off();
// }, 7000);


// setTimeout(() => {
//     database.ref("age").set(40);
// }, 10000);




// ----------------------------------------------------------------------------------------------

// database.ref("notes").once("value").then((snaphot) => {
//     const expenses = [];
//     snaphot.forEach((data) => {
//         expenses.push({
//             id: data.key,
//             ...data.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref("notes").on("value", snaphot => {
//     const expenses = [];
//     snaphot.forEach((data) => {
//         expenses.push({
//             id: data.key,
//             ...data.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref("notes").on("child_removed", (snaphot) => {
//     console.log(snaphot.key, snaphot.val(), "Removed");
// });

// database.ref("notes").on("child_changed", (snaphot) => {
//     console.log(snaphot.key, snaphot.val(), "updated");
// });

// database.ref("notes").on("child_added", (snaphot) => {
//     console.log(snaphot.key, snaphot.val(), "added");
// });


// database.ref("notes/-KxDNIS5pVARwJ3rxlKB").update({
//     body: "Body updated"
// });

// database.ref("notes/-KxDNIS5pVARwJ3rxlKBss").remove();

// otomatik id üretir
    // database.ref("notes").push({
    //     title: "to doasd",
    //     body: "some teasdxt"
    // });


// id yi kendimiz vermemiz gerekir
// const notes = [
//     {
//         id: "12",
//         title: "First Note",
//         body: "This is my note"
//     }
//     , {
//         id: "13",
//         title: "Second Note",
//         body: "This is my note"
//     }
// ];

// database.ref("notes").set(notes);

// database.ref("notes/12")