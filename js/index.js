// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');

  itemPrice = price.innerText;
  let quantity = product.querySelector('.quantity input');

  itemQuantity = quantity.value;
  itemTotalPrice = itemPrice * itemQuantity;

  //console.log(itemTotalPrice);

  let subTotalPrice = product.querySelector('.subtotal span');
  subTotalPrice.innerText = itemTotalPrice;

  return Number(subTotalPrice.innerText);
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = [...document.getElementsByClassName('product')];
  //console.log(allProducts);

  allProducts.forEach((element) => {
    updateSubtotal(element);
  });

  // for (let i = 0; i < allProducts.length; i++) {
  //   updateSubtotal(allProducts[i]);
  // }

  //... your code goes here

  // ITERATION 3

  let totalValue = 0;

  for (let i = 0; i < allProducts.length; i++) {
    totalValue += updateSubtotal(allProducts[i]);
    //console.log(totalValue);
  }

  //... your code goes here
  let totalPriceShow = document.querySelector('#total-value span');
  //console.log(totalPriceShow);
  totalPriceShow.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
