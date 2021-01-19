// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input[type=number]').value;
  const subtotalElement = product.querySelector('.subtotal');
  let subtotal = price * quantity;
  subtotalElement.innerText = subtotal;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  let total = 0;

  for (let product of products) {
    total += updateSubtotal(product);
  }

  console.log(total);

  // ITERATION 3
  const totalElement = document.querySelector('#total-value > span');
  totalElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  console.log('remove was called');
  const target = event.currentTarget.parentNode.parentNode;
  target.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log('create was called');
  // const price = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value;
  // console.log(price);


  // get the value of the product name
  // get the price value
  // concat html
  // add new product to product table
}


// Button event listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let btn of removeBtn) {
    btn.addEventListener('click', removeProduct)
  }

  const createProductBtn = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]');
  createProductBtn.addEventListener('click', createProduct);
});
