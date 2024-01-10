import React from "react";

import styles from './app.module';
import '../../main.scss';

import SamplePage from "../sample/sample";
import {Counter} from "../counter/counter";


const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main className={styles.main}>
                <Counter/>
                {/*<SamplePage/>*/}
            </main>
        </div>
    );
};

export default App;
