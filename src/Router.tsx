import { Routes, Route } from 'react-router-dom'
import { BlogPage } from './pages/Blog'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BlogPage />} />
    </Routes>
  )
}
