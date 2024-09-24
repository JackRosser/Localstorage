let form = document.querySelector("form");
let inputName = document.querySelector("#name");
let buttonAdded = false;
let nomeInserito = localStorage.getItem("nome");
console.log(nomeInserito);

inputName.addEventListener("input", function () {
  if (!buttonAdded) {
    buttonAdded = true;

    let okButton = document.createElement("button");
    okButton.id = "okButton";
    okButton.type = "submit";
    okButton.className = "bg-slate-400 rounded-sm p-1 w-1/2 m-auto mt-3 text-white hover:bg-black hover:text-white active:bg-blue-500";
    okButton.innerText = "Invia Nome";

    let resetButton = document.createElement("button");
    resetButton.id = "resetButton";
    resetButton.type = "button";
    resetButton.className = "bg-slate-400 rounded-sm p-1 w-1/2 m-auto mt-3 text-white hover:bg-black hover:text-white active:bg-red-500";
    resetButton.innerText = "Reset";

    form.append(okButton, resetButton);

    resetButton.addEventListener("click", function () {
      localStorage.removeItem("nome");
      inputName.value = "";
    });
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("nome", inputName.value);
});

let aside = document.querySelector("aside");

let i;
if (sessionStorage.getItem("tempo")) {
  i = parseInt(sessionStorage.getItem("tempo"));
} else {
  i = 1;
}
let aumento = setInterval(() => {
  sessionStorage.setItem("tempo", i);
  i++;
}, 1000);

let generator = setInterval(() => {
  let secondo = sessionStorage.getItem("tempo");
  let div = document.createElement("div");
  div.innerText = secondo;
  div.className = "animated-number";
  aside.appendChild(div);
}, 1000);
