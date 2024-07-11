const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL!

if (!SERVER_URL) throw new Error("SERVER_URL not found")

export { SERVER_URL }