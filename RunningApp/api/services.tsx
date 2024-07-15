import { instance } from "./axios.config";

export const getService = async (url:string, params:undefined|string[]=undefined) => {
  const result = await instance.get(
    generateURL(url, params)
  );
  return result.data;
};


export const postService = async (url:string, data={}, params:undefined|string[]=undefined) => {
    const result = await instance.post(generateURL(url, params), data)
    return result.data;
}

export const putService = async (url:string, data={}, params:undefined|string[]=undefined) => {
    const result = await instance.put(generateURL(url, params), data)
    return result.data;
}

export const deleteService = async (url:string, data={}, params:undefined|string[]=undefined) => {
    const result = await instance.delete(generateURL(url, params), {data})
    return result.data;
}

export const multipartService = async (url: string, formData: FormData, params?: string[]): Promise<any> => {
  const result = await instance.post(generateURL(url, params), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};

export const multipartServicePUT = async (url: string, formData: FormData, params?: string[]): Promise<any> => {
  const result = await instance.put(generateURL(url, params), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};

const generateURL = (url:string, params:string[]|undefined) =>  `${url}${params?`${params.map((param) => `/${param}`)}`:``}`