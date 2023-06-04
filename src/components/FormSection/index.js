import React from "react";

import styles from "./Style.module.css"

export default function FormSectionHeader({name}){
    return <div className={styles["wrapper"]}>
        {name}
    </div>
}