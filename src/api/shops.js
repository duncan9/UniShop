import axios from 'axios';
import { API_URL } from 'const/client';

export const getShops = () => axios.get(API_URL + 'shops')
export const getShopsMock = () => [{id: 1, name: 'Game Shop'},{id: 2, name: 'Sex Shop'}]
