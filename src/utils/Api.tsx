import Config from 'react-native-config'
import Rest from './Rest'

class Api {
    constructor() {}
    // request structure : (path, method, body, params)
    GetUserDetails(id: string) {
        const queryParams = {
            order: 'desc',
            sort: 'reputation',
            site: 'stackoverflow'
        }
        return Rest.send(`users/${id}`, 'GET', null, queryParams)
    }
    GetUserQuestions(id: string) {
        const queryParams = {
            order: 'desc',
            sort: 'activity',
            site: 'stackoverflow'
        }
        return Rest.send(`users/${id}/questions`, 'GET', null, queryParams)
    }
}
const api = new Api()
export default api