import { SERVER_URL } from './base'

if (!SERVER_URL) throw new Error("SERVER_URL not found")

function getMerchantApi() {
    return fetch(`${SERVER_URL}/merchant`, { cache: "no-cache" })
}

function createMerchantApi(merchant: any) {
    return fetch(`${SERVER_URL}/merchant`, { method: 'POST', body: JSON.stringify(merchant), cache: "no-cache" })
}

function switchMerchantApi(merchantId: string) {
    return fetch(`${SERVER_URL}/merchant/${merchantId}/switch`, { method: 'POST', cache: "no-cache" })
}

export { getMerchantApi, createMerchantApi, switchMerchantApi }