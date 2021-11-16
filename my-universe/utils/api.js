
const serverUrl = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL

export const API = {
  series: `${serverUrl}/series`,
  card: `${serverUrl}/card`
}

export default API