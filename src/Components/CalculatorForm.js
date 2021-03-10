import React from "react";

function CalculatorForm(props) {
    return (
        <div className="row">
            <div className="col-4">
                <label for="op1" className="col-form--label">Operand 1</label>
                <input type="text" className="form-control-plaintext" id="op1" onChange={props.update}></input>
            </div>
            <div className="col-4">
                <select className="form-select" id="op" onChange={props.update}>
                    <option selected>Select an operation</option>
                    <option value="add">Addition</option>
                </select>
            </div>
            <div className="col-4">
                <label for="op2s" className="col-form--label">Operand 2</label>
                <input type="text" className="form-control-plaintext" id="op2" onChange={props.update}></input>
            </div>
            <button onClick={props.action}>go</button>
        </div>
    );
}

export default CalculatorForm;