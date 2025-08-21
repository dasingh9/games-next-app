import "./Container.css";

export function Container({ header, showHeader, children, style = {}, className = "" }) {
    return (
        <div className={`my-container ${className}`} style={style}>
            {showHeader !== false && <div className="my-header">{header}</div>}
            <div className="my-content">
                {children}
            </div>
        </div>
    );
}