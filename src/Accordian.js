import React, { useState } from "react";
import { questions } from "./Api";
import "./accordian.css";
import MyAccordian from "./MyAccordian";

const Accordian = () => {

    const [data, setData] = useState(questions);

    return (
        <>
            <div className="main-div">
                <div className="cent-div">
                    <h1>Interview Questions & Answers</h1>
                    {
                        data.map((curElem) => {
                            const { id } = questions;
                            return <MyAccordian key={id} {...curElem} />;
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Accordian;