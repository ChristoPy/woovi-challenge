import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { OpenPIXCreateChargeParams, OpenPIXCreateChargeResponse } from "./types";

const API_KEY = process.env.OPENPIX_API_KEY as string;
const BASE_URL = process.env.OPENPIX_API_BASE_URL as string;

const BASE_CONFIG = {
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': API_KEY
  },
};

function makeRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
  return axios.request<T>({
    ...BASE_CONFIG,
    ...config,
    url: BASE_URL + config.url
  })
}

export function createCharge(chargeParams: OpenPIXCreateChargeParams): Promise<AxiosResponse<OpenPIXCreateChargeResponse>> {
  return makeRequest<OpenPIXCreateChargeResponse>({
    url: '/charge?return_existing=true',
    method: 'POST',
    data: chargeParams
  });
}
