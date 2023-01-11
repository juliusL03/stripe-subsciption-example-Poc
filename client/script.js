/* Fetch prices and update the form */
fetch("/config")
  .then(r => r.json())
  .then(({upfrontPrice, subscriptionPrice}) => {
    const basicPriceInput = document.querySelector('#upfrontPrice');
    basicPriceInput.value = upfrontPrice;
    const proPriceInput = document.querySelector('#subscriptionPrice');
    proPriceInput.value = subscriptionPrice;
  })
