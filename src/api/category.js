/**
 * Created by miaoj on 2017/6/3.
 */
import axios from 'axios'

export const categoryFind = params => axios.get('/categories', {
    params
})
