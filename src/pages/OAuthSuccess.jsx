import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const OAuthSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            localStorage.setItem("token", token)
            navigate("/dashboard")
        } else {
            navigate("/login")
        }
    }, [])

    return (
        <p className="text-center mr-10">Processing Login...</p>
    )
}

export default OAuthSuccess