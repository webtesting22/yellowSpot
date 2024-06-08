import React, { useState, useRef, useEffect } from "react";
import { Checkbox } from 'antd';
import "./NamedSelectComponent.css"; // Import custom CSS for styling
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
// import ButtonComponent from "../ButtonComponent";
import "./NamedSelectComponent.css"
function NamedSelectComponent({ title, selectedItems, setSelectedItems, options }) {
    const [showOptions, setShowOptions] = useState(false);
    const selectFilterRef = useRef(null);

    const handleCheckboxChange = (value) => {
        let newSelectedItems;
        if (selectedItems.includes(value)) {
            newSelectedItems = selectedItems.filter(item => item !== value);
        } else {
            newSelectedItems = [...selectedItems, value];
        }
        setSelectedItems(newSelectedItems);
    };

    const handleClearAll = () => {
        setSelectedItems([]);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectFilterRef.current && !selectFilterRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectFilterRef]);

    return (
        <div className="stikycontainer-style">
            <div className="named-select-filter" ref={selectFilterRef} onClick={() => setShowOptions(!showOptions)}>
                <div ><p id="dropdown-title">{title}</p></div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="named-select-filter-name">{selectedItems.length}&nbsp;selected</div>
                    {
                        showOptions ? <AiFillCaretUp style={{ color: 'gray' }} /> : <AiFillCaretDown />
                    }
                </div>
                {showOptions && (
                    <div className="named-select-filter-options" onClick={(e) => e.stopPropagation()}>
                        <div style={{ color: "#0dbaff", fontSize: "12px", cursor: "pointer", margin: "10px 0px" }} onClick={handleClearAll}>Clear All</div>
                        {options?.map(option => (
                            <div key={option.value} className="option-container">
                                <label className="option-label" style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                                    <p className="options-style" style={{margin:"0px"}}>{option.label}</p>
                                    <Checkbox
                                        onChange={() => handleCheckboxChange(option.value)}
                                        checked={selectedItems.includes(option.value)}
                                    />
                                </label>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
}

export default NamedSelectComponent;