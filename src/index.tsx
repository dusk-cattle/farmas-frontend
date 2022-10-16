// deps
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// config
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// providers
import { ToastContextProvider } from './contexts';

// components
import { Root, RegisterPage, LoginPage } from './pages';

// enums
import { Routes } from './enums';

// styles
import './index.css';
import { defaultTheme } from './styles';

const router = createBrowserRouter([
  { path: Routes.ROOT, element: <Root /> },
  { path: Routes.REGISTER, element: <RegisterPage /> },
  { path: Routes.LOGIN, element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <ToastContextProvider>
      <RouterProvider router={router} />
    </ToastContextProvider>
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
