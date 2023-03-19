import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navButton.css';

function NavigationButtons() {
    const [selectedButton, setSelectedButton] = useState(null);

    useEffect(() => {
        const buttonRows = document.querySelectorAll('.button-row');

        // Animate buttons on page load
        setTimeout(() => {
            buttonRows[0].classList.add('animate-top-left');
            buttonRows[1].classList.add('animate-bottom-right');
        }, 100);
    }, []);

    switch (selectedButton) {
        case 0:
            return <Link to="/page1" className="button button-blue">Go to Page 1</Link>;
        case 1:
            return <Link to="/page2" className="button button-green">Go to Page 2</Link>;
        case 2:
            return <Link to="/page3" className="button button-red">Go to Page 3</Link>;
        case 3:
            return <Link to="/page4" className="button button-yellow">Go to Page 4</Link>;
        default:
            return (
                <div className="button-container">
                    <div>
                        <div className="button-row">
                            <button className="button button-blue" onClick={() => setSelectedButton(0)}>Tech</button>
                            <button className="button button-green" onClick={() => setSelectedButton(1)}>Health</button>
                        </div>
                        <div className="button-row">
                            <button className="button button-red" onClick={() => setSelectedButton(2)}>Gender</button>
                            <button className="button button-yellow" onClick={() => setSelectedButton(3)}>Education</button>
                        </div>
                    </div>
                </div>
            );
    }
}

export default NavigationButtons;
