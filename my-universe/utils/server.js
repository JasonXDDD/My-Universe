
const serverUrl = process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL

export const api = {
  series: `${serverUrl}/series`,
  card: `${serverUrl}/card`
}

export const genURL = (url, params) => {
  let urlBuilder = new URL(url)
  let paramsBuilder = new URLSearchParams(params || null)
  urlBuilder.search = paramsBuilder
  return urlBuilder.href
}

const fetchData = async (url, { method, params, body } = {}) => {
  try {
    let url = genURL(url, params)
    const res = await fetch(url, {
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
