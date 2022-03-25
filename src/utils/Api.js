import Config from 'react-native-config'
import Rest from '../utils/Rest'

class Api {
    constructor() {}
    // request structure : (path, method, body, params)
    GetUserDetails(id) {
        const queryParams = {
            order: 'desc',
            sort: 'reputation',
            site: 'stackoverflow'
        }
        return Rest.send(`users/${id}`, 'GET', null, queryParams)
    }
    GetUserQuestions(id) {
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