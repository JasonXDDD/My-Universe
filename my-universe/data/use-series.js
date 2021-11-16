import userSWR from 'swr';
import API from '../utils/api'

export default function useSeries() {
  const { data, mutate, error } = userSWR(API.series)

  const loading = !data && !error

  return {
    loading,
    data: data || [],
    mutate
  }
}