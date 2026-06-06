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
}

.container {
  max-width:800px;
  margin:auto;
  padding:40px;
  animation:fade 0.3s ease;
}

@keyframes fade {
  from {opacity:0; transform:translateY(10px);}
  to {opacity:1;}
}

.box {
  border:1px solid #eee;
  padding:20px;
  border-radius:12px;
}

img {
  width:100%;
  border-radius:10px;
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
  margin-top:15px;
  padding:12px;
  background:#FFD700;
  font-weight:bold;
  text-align:center;
  cursor:pointer;
  border-radius:8px;
}
</style>
</head>

<body>

<div class="container">

<div class="box">
  <img id="img">
  <h2 id="title"></h2>
  <p id="price"></p>

  <h3>Size</h3>

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
  basic:{
    name:"Basic Box",
    price:299,
    img:"https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  premium:{
    name:"Premium Box",
    price:499,
    img:"https://images.unsplash.com/photo-1520975682031-a6c3b3f4f5d8"
  },
  luxury:{
    name:"Luxury Box",
    price:799,
    img:"https://images.unsplash.com/photo-1520975869018-5a6a0d2b5d1c"
  }
};

const id = new URLSearchParams(window.location.search).get("id");

let selected = null;

document.getElementById("title").innerText = products[id].name;
document.getElementById("price").innerText = products[id].price + " kr";
document.getElementById("img").src = products[id].img;

function pick(el,size){
  selected = size;
  document.querySelectorAll("button").forEach(b=>b.classList.remove("selected"));
  el.classList.add("selected");
}

function add(){
  if(!selected){
    alert("Select size");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id:id,
    size:selected
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
}
</script>

</body>
</html>
