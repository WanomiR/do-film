import React from "react";

import styles from './app.module';
import Sample from "../sample/sample";
import {UploadForm} from "../upload-raw/upload-form";


const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main className={""}>
                {/*<Sample />*/}
                <UploadForm />
            </main>
        </div>
    );
};

export default App;
