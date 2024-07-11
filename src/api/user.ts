import { SERVER_URL } from './base'

async function loginApi({ username, password }:{ username: string, password: string }) {
    return await fetch(`${SERVER_URL}/login`, { method: 'POST', body: JSON.stringify({ username, password }), cache: "no-cache", headers:{ 'Content-Type': 'application/json' } })
}

async function registerApi(username: string, password: string) {
    return await fetch(`${SERVER_URL}/register`, { method: 'POST', body: JSON.stringify({ username, password }), cache: "no-cache", headers:{ 'Content-Type': 'application/json' }})
}

async function getProfileApi() {
    return await fetch(`${SERVER_URL}/profile`, { cache: "no-cache" })
}

async function logoutApi() {
    return await fetch(`${SERVER_URL}/logout`, { cache: "no-cache" })
}

async function forgetPasswordApi(email: string) {
    return await fetch(`${SERVER_URL}/forget-password`, { method: 'POST', body: JSON.stringify({ email }), cache: "no-cache" })
}

async function verifyEmailApi(token: string) {
    return await fetch(`${SERVER_URL}/verify-email`, { method: 'POST', body: JSON.stringify({ token }), cache: "no-cache" })
}

async function resetPasswordApi(token: string, password: string) {
    return await fetch(`${SERVER_URL}/reset-password`, { method: 'POST', body: JSON.stringify({ token, password }), cache: "no-cache" })
}

async function changePasswordApi(oldPassword: string, newPassword: string) {
    return await fetch(`${SERVER_URL}/change-password`, { method: 'POST', body: JSON.stringify({ oldPassword, newPassword }), cache: "no-cache" })
}

export { loginApi, registerApi, getProfileApi, logoutApi, forgetPasswordApi, verifyEmailApi, resetPasswordApi, changePasswordApi }