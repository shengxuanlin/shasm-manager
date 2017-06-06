/**
 * Created by miao on 2017/6/6.
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { StandardData } from './data/resource'

export default {
    /**
     * mock bootstrap
     */
    bootstrap() {
        const mock = new MockAdapter(axios)
        mock.onGet('/standards').reply(() => new Promise(resolve => {
            setTimeout(() => {
                resolve([200, {
                    standards: StandardData
                }])
            }, 1000)
        }))
    }
}
