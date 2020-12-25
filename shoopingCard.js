// //Increment quantity
// let btnplus = document.getElementsByClassName("add");
// for (let i = 0; i < btnplus.length; i++) {
//   btnplus[i].addEventListener("click", function () {
//     btnplus[i].nextElementSibling.innerHTML++;
//     somme();
//   });
// }

// // Decrement quantity
// let btnminus = document.querySelectorAll(".minus");
// for (let btn of btnminus) {
//   btn.addEventListener("click", function () {
//     if (btn.previousElementSibling.innerHTML > 0) {
//       btn.previousElementSibling.innerHTML--;
//       somme();
//     }
//   });
// }

// // Delete row
// let trush = Array.from(document.querySelectorAll(".fa-trash-alt"));
// trush.map((el) =>
//   el.addEventListener("click", function () {
//     el.parentNode.remove();
//     somme();
//   })
// );

// // Function sum
// function somme() {
//   let price = document.getElementsByClassName("price");
//   let qte = document.getElementsByClassName("qte");
//   let sum = 0;
//   for (let i = 0; i < price.length; i++) {
//     sum += price[i].innerHTML * qte[i].innerHTML;
//   }
//   document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum;
// }

// // Like / Dislike product
// let hearts = document.getElementsByClassName("fa-heart");
// for (let heart of hearts) {
//   heart.addEventListener("click", function () {
//     // if(heart.style.color==="red"){
//     //     heart.style.color="gray"
//     // }
//     // else heart.style.color="red"
//     heart.classList.toggle("red");
//   });
// }

// // Increment Quantity

// // let buttonsplus = document.getElementsByClassName("add");

// // for (let btnplus of buttonsplus) {
// //   btnplus.addEventListener("click", function () {
// //     btnplus.nextElementSibling.innerHTML++;
// //     sum();
// //   });
// // }

// // // Decrement Quantity

// // let buttonsminus = document.querySelectorAll(".minus");

// // for (let btnminus of buttonsminus) {
// //   btnminus.addEventListener("click", function () {
// //     if (btnminus.previousElementSibling.innerHTML > 0) {
// //       btnminus.previousElementSibling.innerHTML--;
// //       sum();
// //     }
// //   });
// // }

// // // Function sum

// // function sum() {
// //   let qte = document.getElementsByClassName("qte");
// //   let price = document.getElementsByClassName("price");

// //   let sum = 0;

// //   for (let i = 0; i < qte.length; i++) {
// //     sum += qte[i].innerHTML * parseFloat(price[i].innerHTML.replace("$", " "));
// //   }
// //   // console.log(sum);

// //   document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum;
// // }

// // // Remove product

// // let buttonsdelete = document.getElementsByClassName("fa-trash-alt");

// // for (let btndelete of buttonsdelete) {
// //   btndelete.addEventListener("click", function () {
// //     btndelete.parentNode.remove();
// //   });
// // }

// // // Like / Dislike Product

// // let hearts = document.getElementsByClassName("fa-heart");

// // for (let heart of hearts) {
// //   heart.addEventListener("click", function () {

// //     heart.classList.toggle("red");

// //     // if (heart.style.color === "grey") {
// //     //   heart.style.color = "red";
// //     // } else {
// //     //   heart.style.color = "grey";
// //     // }
// //   });
// // }

//Incerement Quantity

let buttonsplus = Array.from(document.getElementsByClassName("add"));

// console.log(buttonsplus);

for (let btnplus of buttonsplus) {
  btnplus.addEventListener("click", function () {
    btnplus.nextElementSibling.innerHTML++;
    sum();
  });
}

// Decrement Quantity

let buttonsminus = Array.from(document.getElementsByClassName("minus"));

for (let btnminus of buttonsminus) {
  btnminus.addEventListener("click", function () {
    if (btnminus.previousElementSibling.innerHTML > 0) {
      btnminus.previousElementSibling.innerHTML--;
      sum();
    }
  });
}

// Calculate Sum

function sum() {
  let qte = document.querySelectorAll(".qte");
  let price = document.querySelectorAll(".price");

  let sum = 0;

  for (let i = 0; i < qte.length; i++) {
    sum += qte[i].innerHTML * price[i].innerHTML;
  }
  // console.log(sum);
  document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum;
}

// Delete Product

let buttonsdelete = document.getElementsByClassName("fa-trash-alt");

for (let btndelete of buttonsdelete) {
  btndelete.addEventListener("click", function () {
    btndelete.parentNode.remove();
    sum();
  });
}

// Like  Dislike Product

let hearts = document.querySelectorAll(".fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    heart.classList.toggle("red");

    // if (heart.style.color === "grey") {
    //   heart.style.color = "red";
    // } else {
    //   heart.style.color = "grey";
    // }
  });
}
