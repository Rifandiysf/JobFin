import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/lib/service/auth";

export function ResetPasswordForm({ className, ...props }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!token) {
            setError("Reset link is invalid or missing. Please request a new one.");
            return;
        }

        if (form.newPassword !== form.confirmPassword) {
            setError("Password confirmation does not match");
            return;
        }

        setLoading(true);

        try {
            await resetPassword({ token, newPassword: form.newPassword });
            setSuccess(true);
            setTimeout(() => navigate("/login"), 2500);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "This reset link is invalid or has expired. Please request a new one."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="p-6 md:p-8">
                    {success ? (
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Password reset!</h1>
                                <p className="text-balance text-muted-foreground">
                                    Your password has been changed successfully. Redirecting you to login...
                                </p>
                            </div>
                        </FieldGroup>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <FieldGroup>
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <h1 className="text-2xl font-bold">Set a new password</h1>
                                    <p className="text-balance text-muted-foreground">
                                        Choose a strong new password for your{" "}
                                        <span className="font-black text-primary text-shadow-2xs">Jobfin</span> account.
                                    </p>
                                </div>

                                {!token && (
                                    <p className="text-sm text-destructive text-center">
                                        Reset link is invalid or missing. Please request a new one from the{" "}
                                        <Link to="/forgot-password" className="underline">
                                            forgot password
                                        </Link>{" "}
                                        page.
                                    </p>
                                )}

                                {error && <p className="text-sm text-destructive text-center">{error}</p>}

                                <Field>
                                    <FieldLabel htmlFor="newPassword">New Password</FieldLabel>
                                    <Input
                                        id="newPassword"
                                        type="password"
                                        value={form.newPassword}
                                        onChange={handleChange}
                                        minLength={8}
                                        required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="confirmPassword">Confirm New Password</FieldLabel>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                        minLength={8}
                                        required
                                    />
                                </Field>

                                <Field>
                                    <Button type="submit" className="font-bold text-black" disabled={loading || !token}>
                                        {loading ? "Resetting..." : "Reset Password"}
                                    </Button>
                                </Field>

                                <FieldDescription className="text-center">
                                    Remembered your password? <Link to="/login">Back to login</Link>
                                </FieldDescription>
                            </FieldGroup>
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}