<!DOCTYPE html>
<html lang="da">
<head>
<meta charset="UTF-8">
<title>Product</title>

<style>
body {
  margin:0;
  font-family:Arial;
  background:#fff;
  color:#111;
}

.container {
  max-width:800px;
  margin:auto;
  padding:40px;
}

.box {
  border:1px solid #eee;
  padding:20px;
  border-radius:12px;
}

.sizes button {
  margin:5px;
  padding:10px 15px;
  border:none;
  background:#eee;
  cursor:pointer;
}

.selected {
  background:#FFD700;
}

.btn {
  margin-top:20px;
  display:block;
  background:#FFD700;
  padding:12px;
  text-align:center;
  font-weight:bold;
  cursor:pointer;
}
</style>
</head>

<body>

<div class="container">

<div class="box">
  <h1 id="title"></h1>
  <p id="price"></p>

  <h3>Vælg størrelse</h3>

  <div class="sizes">
    <button onclick="pick(this,'S')">S</button>
    <button onclick="pick(this,'M')">M</button>
    <button onclick="pick(this,'L')">L</button>
    <button onclick="pick(this,'XL')">XL</button>
  </div>

  <div class="btn" onclick="add()">Add to cart</div>
</div>

</div>

<script>
const products = {
  basic:{name:"Basic Box", price:299},
  premium:{name:"Premium Box", price:499},
  luxury:{name:"Luxury Box", price:799}
};

const id = new URLSearchParams(window.location.search).get("id");

let selectedSize = null;

document.getElementById("title").innerText = products[id].name;
document.getElementById("price").innerText = products[id].price + " kr";

function pick(el,size){
  selectedSize = size;
  document.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
  el.classList.add("selected");
}

function add(){
  if(!selectedSize){
    alert("Vælg størrelse");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id:id,
    size:selectedSize
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
}
</script>

</body>
</html>
