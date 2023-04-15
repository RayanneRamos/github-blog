import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListContainer } from './styles'

export function BlogPage() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostListContainer></PostListContainer>
    </>
  )
}
