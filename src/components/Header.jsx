import { useLocation } from "react-router-dom"
function Header() {
    const data = useLocation()
    return (<div>
        {/* <h1 className="text-2xl font-medium">Hello {data.state.userid}!</h1>
         <p>I help you manage your activity :)</p> */}
        <h1 className="text-2xl font-medium">
            Hello {data.state?.userid || "Guest"}!
        </h1>

    </div>)
}
export default Header