
const serverUrl = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL

export const api = {
  series: `${serverUrl}/series`,
  card: `${serverUrl}/card`
}

const fetchData = async (url, { method, params, body } = {}) => {
  try {
    let urlBuilder = new URL(url)
    let paramsBuilder = new URLSearchParams(params || null)
    urlBuilder.search = paramsBuilder

    const res = await fetch(urlBuilder.href, {
      method,
      body
    })

    if (res.ok) {
      return await res.json()
    }
    else {
      throw new Error(res.status)
    }
  }
  catch (err) {
    console.error(err)
    return false
  }
}


export default fetchData
