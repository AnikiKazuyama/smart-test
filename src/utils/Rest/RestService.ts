import axios, { AxiosRequestConfig } from 'axios';

class RestService {
  static baseUrl = 'https://www.ruparking.com';
  public static async makeRequest({ method, data, params, url }: AxiosRequestConfig) {
    const response = await axios.request({
      method,
      url: RestService.baseUrl + url,
      data,
      params
    });

    return response.data;
  }
}

export default RestService;
