import { Constants } from "../constant";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
 
let getToken = async () => {
    try {
        let token =  await AsyncStorage.getItem("token");
        return JSON.parse(token)
    } catch (error) {
        console.log(error);
    }
}

const axiosInstance = axios.create({
    baseURL: Constants.baseUrl,
    timeout: 10000,
});

axiosInstance.interceptors.request.use(async (config) => {
    let token = await getToken();
    console.log(token);
    if (token) {
        config.headers.Authorization = `Bearer ${token.access}`; 
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance

