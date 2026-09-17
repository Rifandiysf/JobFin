import { useEffect, useState } from "react";
import { getProfile } from "@/lib/service/users";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadUser();
    }, []);

    async function loadUser() {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false);
            return;
        }

        try {
            const profile = await getProfile();
            setUser(profile);
        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/login";
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout, refetchUser: loadUser }}>
            {children}
        </AuthContext.Provider>
    );
}