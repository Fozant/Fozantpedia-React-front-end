import React from "react";

function Alert(props) {
    return(
        <div className="bg-red-600 mt-[-1rem] mb-2 rounded-[5px] text-white">
            {props.pesan}
        </div>
    )
}

export default Alert;