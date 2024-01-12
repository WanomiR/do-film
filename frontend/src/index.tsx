import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Provider} from "react-redux";

import 'main.scss';
import {store} from "./services/store";
import App from './components/app/app';

const container: HTMLElement | null = document.getElementById('root');
const root: Root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
