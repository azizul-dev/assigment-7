

const ElectricBorder = ({ children, className = "" }) => {
    return (
        <div className={`electric-wrapper ${className}`}>

           
            <span className="spark spark-tl" />
            <span className="spark spark-tr" />
            <span className="spark spark-bl" />
            <span className="spark spark-br" />

            
            <svg className="bolt bolt-one" viewBox="0 0 18 28" fill="none">
                <polyline points="12,0 5,12 10,12 3,28 14,14 9,14 16,0" fill="#00eeff" />
            </svg>
            <svg className="bolt bolt-two" viewBox="0 0 14 22" fill="none">
                <polyline points="10,0 4,10 8,10 2,22 11,11 7,11 13,0" fill="#ffffff" />
            </svg>

           
            <svg className="arc-overlay" viewBox="0 0 260 320" preserveAspectRatio="none">
                <polyline className="arc arc-top"
                    points="0,0 22,-7 45,5 70,-5 95,4 120,-5 145,0 170,-6 195,4 220,-4 245,2 260,0" />
                <polyline className="arc arc-right"
                    points="260,20 268,65 260,110 267,155 260,200 267,245 260,280" />
                <polyline className="arc arc-bottom"
                    points="260,320 235,313 205,321 175,312 140,320 105,312 70,320 35,313 0,320" />
                <polyline className="arc arc-left"
                    points="0,20 -7,60 0,105 -6,150 0,195 -6,240 0,280" />
            </svg>

            
            <div className="electric-inner">
                {children}
            </div>

        </div>
    );
};

export default ElectricBorder;