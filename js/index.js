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

  // ITERATION 3

  let totalValue = 0;

  for (let i = 0; i < allProducts.length; i++) {
    totalValue += updateSubtotal(allProducts[i]);
    //console.log(totalValue);
  }

  let totalPriceShow = document.querySelector('#total-value span');
  //console.log(totalPriceShow);
  totalPriceShow.innerText = totalValue;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentElement.parentElement.remove(); // tr.td.button
}

// ITERATION 5
function createProduct() {
  const element = document.querySelector('tbody');
  console.log(element);
  const tr = document.createElement('tr');
  tr.classList.add('product');

  const name = document.createElement('td');
  name.classList.add('name');
  const nameText = document.createElement('span');
  let dummyText = document.querySelector('.create-product-name');
  nameText.innerText = dummyText.value;
  name.append(nameText);

  const price = document.createElement('td');
  price.classList.add('price');
  const priceText = document.createElement('span');
  let dummyPrice = document.querySelector('.create-product-price');
  priceText.innerText = dummyPrice.value;
  price.append('$', priceText);

  const quantity = document.createElement('td');
  quantity.classList.add('quantity');
  const inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.value = '0';
  inputQuantity.min = '0';
  inputQuantity.placeholder = 'Quantity';
  quantity.append(inputQuantity);

  const subtotal = document.createElement('td');
  subtotal.classList.add('subtotal');
  const subtotalText = document.createElement('span');
  subtotalText.innerText = '0';
  subtotal.append('$', subtotalText);

  const action = document.createElement('td');
  action.classList.add('action');
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-remove');
  removeButton.innerText = 'Remove';
  action.append(removeButton);

  tr.append(name, price, quantity, subtotal, action);

  element.append(tr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

window.addEventListener('click', () => {
  for (let i = 0; i < document.querySelectorAll('.btn-remove').length; i++) {
    document
      .querySelectorAll('.btn-remove')
      [i].addEventListener('click', removeProduct);
  }
});
