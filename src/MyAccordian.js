import React, { useState } from "react";


const MyAccordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="main-heading"
                onClick={() => {
                    setShow(!show);
                }}
            >
                <p className="show">{show ? "➖" : "➕"}</p>
                <h3>{question}</h3>
            </div>
            {
                show && <p className="answer"> {answer} </p>
            }

        </>
    );
}

export default MyAccordian;