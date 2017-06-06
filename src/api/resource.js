/**
 * Created by miao on 2017/6/6.
 */
import axios from 'axios';

const base = '';

export const getStandards = params => axios.get(`${base}/standards`, params);
export const getOrganizations = params => axios.get(`${base}/organizations`, params);
