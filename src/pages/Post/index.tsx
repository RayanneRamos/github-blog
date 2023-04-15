import { useCallback, useEffect, useState } from 'react'
import { PostHeader } from './components/PostHeader'
import { IPost } from '../Blog'
import { api } from '../../lib/api'
import { useParams } from 'react-router-dom'

const username = import.meta.env.VITE_GITHUB_USERNAME
const reponame = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${reponame}/issues/${id}`,
      )
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [postData])

  useEffect(() => {
    getPostDetails()
  }, [])

  return (
    <>
      <PostHeader postData={postData} isLoading={isLoading} />
    </>
  )
}
