/**
 * Created by miaoj on 2017/6/2.
 */

import axios from 'axios'
import {categoryFind} from './category'

axios.defaults.baseURL = 'http://localhost:8080/project-webapp';

export const find = params => {
    return axios.get(`/projects`, {params: params});
};

export const findAll = () => {
    return axios.all([find(), categoryFind()]).then(
        axios.spread(function (projectResponse, categoryResponse) {
            let projectData = projectResponse.data;
            let categoryData = categoryResponse.data;
            for (var value of projectData) {
                let result = categoryData.filter(data => data.projectId = value.id);
                if (result != null && result.length > 0) {
                    value.children = result;
                }
            }
            return new Promise((resolve, reject) => {
                resolve(projectData);
            });
        }));
};
