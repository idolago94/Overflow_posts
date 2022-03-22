import Rest from '../utils/Rest'

class Api {
    constructor() {
        this.defaultParams = {
            order: 'desc',
            sort: 'reputation',
            site: 'stackoverflow'
        }
    }
    // request structure : (path, method, body, params)
    GetUserDetails(id) {
        return Rest.send(`users/${id}`, 'GET', null, this.defaultParams)
    }
}
const api = new Api()
export default api