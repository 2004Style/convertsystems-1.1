import React from 'react';

export function Copyright({labelClas}) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="copy">
            <div>Copyright &copy; ConvertSystems {currentYear}</div>
        </div>
    );
}
