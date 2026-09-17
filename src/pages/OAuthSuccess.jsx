// src/pages/OAuthSuccess.jsx
import { useAuth } from "@/hooks/use-auth";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function OAuthSuccess() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { refetchUser } = useAuth();

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            localStorage.setItem("token", token);
            refetchUser().then(() => navigate("/dashboard"));
        } else {
            navigate("/login");
        }
    }, []);

    return <p className="text-center mt-10">Processing...</p>;
}