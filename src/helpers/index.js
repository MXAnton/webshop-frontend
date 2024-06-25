export function capitalizeFirstLetter(_string) {
  return _string.charAt(0).toUpperCase() + _string.slice(1);
}

export function getLocalStorageCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
export function setLocalStorageCart(_cart) {
  localStorage.setItem("cart", JSON.stringify(_cart));
}
export function removeProductLocalStorageCart(_productId) {
  const localStorageCart = getLocalStorageCart();
  console.log(localStorageCart);

  // Find the index of the object with the given id
  const index = localStorageCart.findIndex((item) => item.id === _productId);
  if (index === -1) {
    return;
  }

  // Remove product from cart
  localStorageCart.splice(index, 1);

  setLocalStorageCart(localStorageCart);
  return localStorageCart;
}
export function clearLocalStorageCart() {
  localStorage.removeItem("cart");
}
