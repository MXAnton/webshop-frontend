export function capitalizeFirstLetter(_string) {
  return _string.charAt(0).toUpperCase() + _string.slice(1);
}

export function getLocalStorageCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
export function setLocalStorageCart(_cart) {
  localStorage.setItem("cart", JSON.stringify(_cart));
}
export function clearLocalStorageCart() {
  localStorage.removeItem("cart");
}
