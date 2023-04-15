import { Routes, Route } from 'react-router-dom'
import { BlogPage } from './pages/Blog'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
      </Route>
    </Routes>
  )
}
