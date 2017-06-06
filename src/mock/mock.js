/**
 * Created by miao on 2017/6/6.
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { OrganizationData, StandardData } from './data/resource'

export default {
    /**
     * mock bootstrap
     */
    bootstrap() {
        const mock = new MockAdapter(axios)
        mock.onGet('/standards').reply(config => new Promise(resolve => {
            const name = config.name;
            const items = StandardData.filter(item => {
                if (name && item.name !== name) return false
                return true;
            })
            setTimeout(() => {
                resolve([200, {
                    standards: items
                }])
            }, 1000)
        }))

        mock.onGet('/organizations').reply(() => new Promise(resolve => {
            setTimeout(() => {
                resolve([200, {
                    organizations: OrganizationData
                }])
            }, 1000)
        }))
    }
}
