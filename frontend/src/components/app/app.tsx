import React from "react";

import styles from './app.module';
import {Users} from "../users/users";



const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main className={"container border"}>
                <Users/>
            </main>
        </div>
    );
};

export default App;
