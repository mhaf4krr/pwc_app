import React from "react";

import styles from "./Style.module.css"

export default function FormSectionSubHeader({name}){
    return <div className={styles["wrapper_subheader"]}>
        {name}
    </div>
}