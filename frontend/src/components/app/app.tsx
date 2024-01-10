import React from "react";

import styles from './app.module';
import SamplePage from "../sample/sample";
import '../../main.scss';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main className={styles.main}>
                <SamplePage/>
            </main>
        </div>
    );
};

export default App;
