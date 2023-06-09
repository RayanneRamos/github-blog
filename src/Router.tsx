import { Routes, Route } from 'react-router-dom'
import { BlogPage } from './pages/Blog'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
