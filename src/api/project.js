/**
 * Created by miaoj on 2017/6/2.
 */

import axios from 'axios'
import { categoryFind } from './category'

/* axios.defaults.baseURL = 'http://localhost:8080/project-webapp' */

export const find = params => axios.get('/projects', { params })

export const findAll = () => axios.all([find(), categoryFind()]).then(
        axios.spread((projectResponse, categoryResponse) => {
            const projectData = projectResponse.data
            const categoryData = categoryResponse.data
            for (const value of projectData) {
                const result = categoryData.filter(data => data.projectId = value.id)
                if (result != null && result.length > 0) {
                    value.children = result
                }
            }
            return new Promise(resolve => {
                resolve(projectData)
            })
        }))
