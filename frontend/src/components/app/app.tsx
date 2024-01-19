import React from "react";

import styles from './app.module';
import {UploadForm} from "../upload-raw/upload-form";
import Sample from "../sample/sample";


const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main>
                <UploadForm />
            </main>
        </div>
    );
};

export default App;
