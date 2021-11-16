
import userSWR from 'swr';
import API from '../utils/api'
import { genURL } from '../utils/server'


export default function useCard(code) {
  let url = genURL(API.card, {
    series: (code || []).join(';')
  })

  const { data, mutate, error } = userSWR(url)

  const loading = !data && !error

  return {
    loading,
    data: data || [],
    mutate
  }
}