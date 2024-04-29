import axiosInstance from "./index";

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
