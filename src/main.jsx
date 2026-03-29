/* Main.jsx*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient();

function AppSetup() {
  return (
    <StrictMode>
      <ErrorBoundary fallback={<p>An error has occurred</p>}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<AppSetup />);
