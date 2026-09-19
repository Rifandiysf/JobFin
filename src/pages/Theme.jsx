import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/use-auth";
import { updateTheme } from "@/lib/service/setting";
import { useState } from "react";

const Theme = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const { user, refetchUser } = useAuth();

    async function handleChange(value) {
        setLoading(true);
        setMessage(null);

        try {
            await updateTheme(value);
            await refetchUser();
        } catch (err) {
            setMessage({
                type: "error",
                text: err.response?.data?.message || "Failed to update theme",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>
                        Choose between light and dark mode for the application.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <Select value={user?.theme || "light"} onValueChange={handleChange} disabled={loading}>
                        <SelectTrigger className="w-full sm:w-56">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                        </SelectContent>
                    </Select>
                    {message && <p className="text-sm text-destructive">{message.text}</p>}
                </CardContent>
            </Card>
        </div>
    );
};

export default Theme;