import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="unassigned">
            <h1>Unassigned</h1>
            <ul>
                <li><a>Section 1</a></li>
                <li><a>Section 2</a></li>
                <li><a>Section 3</a></li>
                <li><a>Section 4</a></li>
                <li><a>Section 5</a></li>
                </ul>
            </div>

            <div className="assigned">
                <h1>Assigned</h1>
                <ul>
                    <li><a>Section 1</a></li>
                    <li><a>Section 2</a></li>
                    <li><a>Section 3</a></li>
                    <li><a>Section 4</a></li>
                    <li><a>Section 5</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;