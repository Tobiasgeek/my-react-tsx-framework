import React from "react";
import { useParams } from "react-router-dom";

const Verify = () => {
    const params:any = useParams();
    return(
        <div>
            <h1>Welcome to Verify Page {params.code}</h1>
        </div>
    );
}

export default Verify;