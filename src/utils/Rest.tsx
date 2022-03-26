import Config from 'react-native-config'

class Rest {
    API_URL: string;
    ReqData: { [key: string]: any };

    constructor() {
        this.API_URL = Config.API_URL
        this.ReqData = {}
    }

    withQuery(url: string, params: { [key: string]: any }) {
        let query = Object.keys(params)
            .filter(k => !!params[k])
            .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
            .join('&')
        url += (url.indexOf('?') === -1 ? '?' : '&') + query
        return url
    }

    async send(
        path: string,
        method: string,
        body: { [key: string]: any } | null,
        params: { [key: string]: any } = {}
    ) {
        const headers = {}
        params.key = Config.API_KEY

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

            let response: any = await fetch(this.ReqData.url, this.ReqData.init)

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
                return Promise.reject(await response.json())
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
