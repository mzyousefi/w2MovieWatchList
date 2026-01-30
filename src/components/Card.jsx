import { Children } from "react";

export default function Card({ nameClass, title, right, children }) {
    return (
        <div className={`${nameClass} mb-3`}>
            <div className='card'>
                <div className='card-body'>
                    <div className="h_part d-flex align-items-center justify-content-between">
                        {title ? <h3>{title}</h3> : null}
                        {right ? right : null}
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}