import React, { useState } from "react";
import './Calculator.css';   // keep this, since it styles the calculator
import Button from "./Button.js";

function KeyPadComponent() {
    const [text1, setText] = useState("");

    const ClickHandle = (e) => {
        if (e.target.value === "C") {
            setText("");
        } else if (e.target.value === "=") {
            setText(eval(text1));
            alert(eval(text1));
        } else {
            setText(text1 + e.target.value);
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            {/* Standard calculator buttons */}
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            {/* Task 2: Show Me button */}
            <div>
                <Button label="show me" ClickHandle={() => {
                    window.open("logo.svg"); 
                }} />
            </div>

            {/* Task 3: Square button */}
            <div>
                <Button label="square" ClickHandle={() => {
                    if (!isNaN(text1)) {
                        const squared = Math.pow(Number(text1), 2);
                        setText(squared);
                        alert(squared);
                    } else {
                        alert("Please enter a valid number");
                    }
                }} />
            </div>
        </div>
    );
}

export default KeyPadComponent;
