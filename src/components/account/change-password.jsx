import { changePassword } from "@/lib/service/setting";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ChangePasswordCard = () => {
    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setMessage(null);

        if (form.newPassword !== form.confirmPassword) {
            setMessage({ type: "error", text: "New password confirmation does not match" });
            return;
        }

        setLoading(true);

        try {
            await changePassword({
                currentPassword: form.currentPassword,
                newPassword: form.newPassword,
            });
            setMessage({ type: "success", text: "Password changed successfully" });
            setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
        } catch (err) {
            setMessage({
                type: "error",
                text: err.response?.data?.message || "Failed to change password",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Make sure your new password is strong and hasn't been used before.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 py-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                            id="currentPassword"
                            type="password"
                            value={form.currentPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                                id="newPassword"
                                type="password"
                                value={form.newPassword}
                                onChange={handleChange}
                                minLength={8}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                minLength={8}
                                required
                            />
                        </div>
                    </div>

                    {message && (
                        <p className={message.type === "success" ? "text-sm text-green-600" : "text-sm text-destructive"}>
                            {message.text}
                        </p>
                    )}
                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Saving..." : "Change Password"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};