// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars, react/prop-types
export function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="copy">
            <div>Copyright &copy; ConvertSystems {currentYear}</div>
        </div>
    );
}
