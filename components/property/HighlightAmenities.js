import React from 'react';
import Styles from "./index.module.css"

export default function HighlightAmenities({ property }) {
    return (
        <div>
            <div className="flex flex-wrap justify-between">
                <p className={`${Styles.tabview}`}>Affordable</p>
                <p className={`${Styles.tabview}`}>Newly build</p>
                <p className={`${Styles.tabview}`}>{property?.propertySubType}</p>
                <p className={`${Styles.tabview}`}>{property?.action}</p>
                <p className={`${Styles.tabview}`}>{property?.allowance}</p>
                <p className={`${Styles.tabview}`}>{property?.furniture}</p>
            </div>
        </div>


    );
}
