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
    // heart.classList.toggle("red");

    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}
