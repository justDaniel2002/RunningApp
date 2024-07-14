import { instance } from "./axios.config";

export const getService = async (url, params=undefined) => {
  const result = await instance.get(
    generateURL(url, params)
  );
  return result.data;
};


export const postService = async (url, data={}, params=undefined) => {
    const result = await instance.post(generateURL(url, params), data)
    return result.data;
}

export const putService = async (url, data={}, params=undefined) => {
    const result = await instance.put(generateURL(url, params), data)
    return result.data;
}

export const deleteService = async (url, data={}, params=undefined) => {
    const result = await instance.delete(generateURL(url, params), {data})
    return result.data;
}

const generateURL = (url, params) =>  `${url}${params?`${params.map((param) => `/${param}`)}`:``}`