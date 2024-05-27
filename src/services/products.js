import axiosInstance from "./index";
import qs from "qs";

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

export async function getProducts(
  _sex,
  _categories,
  _brands,
  _minPrice,
  _maxPrice,
  _colors,
  _sizes,
  _materials,
  _onSale
) {
  const response = await axiosInstance
    .get(`products/sex/${_sex}`, {
      params: {
        categories: _categories,
        brands: _brands,
        minPrice: _minPrice,
        maxPrice: _maxPrice,
        colors: _colors,
        sizes: _sizes,
        materials: _materials,
        onSale: _onSale,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "brackets" });
      },
    })
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
    .get("best-sellers/" + _amount)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.warn(err);
      return null;
    });

  return response;
}
