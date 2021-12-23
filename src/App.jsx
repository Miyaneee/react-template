import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Loader } from 'rsuite'

const Home = lazy(() => import('@/pages/Home'))
const Error = lazy(() => import('@/pages/Error'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter basename={process.env.basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
