import { SERVER_URL } from './base'

async function getPages() {
  const response = await fetch(`${SERVER_URL}/pages`, { cache: "no-cache", })
  return response.json()
}

async function getPage(id: string) {
  const response = await fetch(`${SERVER_URL}/pages/${id}`, { cache: "no-cache", })
  return response.json()
}

async function createPage(data: { title: string; content: string }) {
    const response = await fetch(`${SERVER_URL}/pages`, {
        method: "POST",
        cache: "no-cache",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

async function updatePage(id: string, data: { title: string; content: string }) {
    const response = await fetch(`${SERVER_URL}/pages/${id}`, {
        method: "PUT",
        cache: "no-cache",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response.json()
}

export { getPages, getPage, createPage, updatePage }