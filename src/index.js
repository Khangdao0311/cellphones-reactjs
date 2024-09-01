import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from '~/reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { StoreProvider } from '~/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <StoreProvider>
                <App />
            </StoreProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
