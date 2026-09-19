import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { forgotPassword } from "@/lib/service/auth";

export function ForgotPasswordForm({ className, ...props }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await forgotPassword(email);
            setSent(true);
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong, please try again");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="p-6 md:p-8">
                    {sent ? (
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Check your email</h1>
                                <p className="text-balance text-muted-foreground">
                                    If an account exists for <span className="font-medium text-foreground">{email}</span>,
                                    a password reset link has been sent. The link expires in 30 minutes.
                                </p>
                            </div>

                            <Field>
                                <Button type="button" variant="outline" onClick={() => setSent(false)}>
                                    Use a different email
                                </Button>
                            </Field>

                            <FieldDescription className="text-center">
                                Remembered your password? <Link to="/login">Back to login</Link>
                            </FieldDescription>
                        </FieldGroup>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <FieldGroup>
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <h1 className="text-2xl font-bold">Forgot password?</h1>
                                    <p className="text-balance text-muted-foreground">
                                        Enter the email associated with your{" "}
                                        <span className="font-black text-primary text-shadow-2xs">Jobfin</span> account
                                        and we'll send you a link to reset your password.
                                    </p>
                                </div>

                                {error && <p className="text-sm text-destructive text-center">{error}</p>}

                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Field>

                                <Field>
                                    <Button type="submit" className="font-bold text-black" disabled={loading}>
                                        {loading ? "Sending..." : "Send Reset Link"}
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