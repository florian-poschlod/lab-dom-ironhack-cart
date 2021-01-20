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
  let price = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]');
  let name = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]');
  const table = document.querySelector('#cart > tbody');
  const newProductElement = document.createElement('tr');
  newProductElement.classList.add('product')
  newProductElement.innerHTML = `
    <td class="name">
      <span>${name.value}</span>
    </td>
    <td class="price">$<span>${price.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  table.appendChild(newProductElement);
  name.value = '';
  price.value = 0;
}

// Button event listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let btn of removeBtn) {
    btn.addEventListener('click', removeProduct)
  }

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
