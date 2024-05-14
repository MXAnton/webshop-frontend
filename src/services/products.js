import axiosInstance from "./index";

/*
export async function getProductsMale() {
  const response = await axiosInstance
    .get("products/male")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}

export async function getProductsFemale() {
  const response = await axiosInstance
    .get("products/female")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}
*/

export async function getProductsCategories() {
  const response = await axiosInstance
    .get("products/categories")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}

export async function getProducts(_sex, _categories) {
  const response = await axiosInstance
    .get(`products/${_sex}/${_categories}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}

export async function getProductColor(_id) {
  const response = await axiosInstance
    .get("product/color/" + _id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}
export async function getProductColors(_id) {
  const response = await axiosInstance
    .get("product/" + _id + "/colors")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}

export async function getBestSellers(_amount) {
  const response = await axiosInstance
    .get("products/best-sellers/" + _amount)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}
