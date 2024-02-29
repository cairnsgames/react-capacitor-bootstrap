import { Container } from "react-bootstrap"

// middle = horiz and vertical center
// center = horiz center
const PageWrapper = ({className = "", position, children}) => {
    let classes = "mt-3";
    if (position === "middle") {
        classes = "d-flex align-items-center justify-content-center mt-3"
    }
    if (position === "center") {
        classes = "d-flex justify-content-center mt-3"
    }
    return (            
        <div style={{minHeight:"85%"}} className={`${className} ${classes}`}>
            {children}
        </div>
    )
}

export default PageWrapper;