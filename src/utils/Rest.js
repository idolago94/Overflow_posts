import Config from 'react-native-config'

class Rest {
    constructor() {
        this.API_URL = Config.API_URL
        this.ReqData = {}
    }

    withQuery(url, params) {
        let query = Object.keys(params)
            .filter(k => !!params[k])
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
            .join('&')
        url += (url.indexOf('?') === -1 ? '?' : '&') + query
        return url
    }

    async send(path, method, body, params) {
        const headers = {}

        let url = `${this.API_URL}${path ? path : ''}`
        if (params) {
            url = this.withQuery(url, params)
        }

        try {

            this.ReqData = {
                url, init: {
                    method: method,
                    headers: headers,
                    body: body != null ? JSON.stringify(body) : null,
                }
            }

            console.log(`### -> Rest -> send -> this.ReqData`, this.ReqData)
            let response = await fetch(this.ReqData.url, this.ReqData.init)

            if (response.status == 401) {
                return Promise.reject(await response.json())
            }
            if (response.status == 400) {
                return Promise.reject(await response.json())
            }
            if (response.status == 403) {
                return Promise.reject(await response.json())
            }
            if (response.status == 404) {
                try {
                    let res = await response.json()
                    return Promise.reject({ code: 404, error_message: res.error_message, url: response.url })
                } catch (e) {
                    return Promise.reject({ code: 404, error_message: i18n.t('ec_500'), url: response.url })
                }
            }
            if (response.status == 500) {
                return Promise.reject(await response.json())
            }
            if (response.status == 502) {
                return Promise.reject(response)
            }
            if (response.status == 503) {
                return Promise.reject(await response.json())
            }
            if (response.status == 520) {
                return Promise.reject(await response.json())
            }

            let responseJson = response.headers.map['content-type'].includes('application/json') ? await response.json() : response.statusText
            return responseJson
        } catch (error) {
            console.log('[REST ERROR]', path, error)
            throw error
        }
    }
}

const rest = new Rest()


export default rest
