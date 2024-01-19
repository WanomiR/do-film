import React, {useState} from "react";
import api from "../../api/api";

import styles from "./upload-form.module.scss"


export const UploadForm: React.FC = () => {

    const [files, setFiles] = useState([]);


    // @ts-ignore
    const handleInputChange = event => {
        setFiles(Array.from(event.target.files))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();

        const formData = new FormData();
        files.forEach(file => formData.append("raw_uploads", file))

        try {
            const res = await api.post("/upload-raw/", formData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type={"file"} multiple={true} onChange={handleInputChange}
                    />
                </div>
                <button type={"submit"}>Submit</button>
            </form>
        </section>
    )
}