/* App.jsx*/
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary';

const ResultsPage = lazy(() => import('./pages/ResultsPage.jsx').then(module => ({ default: module.ResultsPage })));

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Error loading page</p>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

function App() {

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<ResultsPage />} />
            <Route path="*" element={<p>404-Page not found</p>} />
          </Routes>
        </Suspense>
      </ErrorBoundary >
    </BrowserRouter >
  )
}

export default App
