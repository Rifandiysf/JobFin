import { updateHomeAddress } from "@/lib/service/setting";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label } from "recharts";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const HomeAddressCard = ({ user, refetchUser }) => {
    const [homeAddress, setHomeAddress] = useState(user?.homeAddress || "");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            await updateHomeAddress(homeAddress);
            await refetchUser();
            setMessage({ type: "success", text: "Home address updated successfully" });
        } catch (err) {
            setMessage({
                type: "error",
                text: err.response?.data?.message || "Failed to update address. Please check the address and try again.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <CardTitle>Home Address</CardTitle>
                    <CardDescription>
                        Used to automatically calculate the distance and route to each job application.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col py-4">
                    <div className="flex flex-col gap-2 pb-3">
                        <Label htmlFor="homeAddress">Address</Label>
                        <Input
                            id="homeAddress"
                            placeholder="123 Example Street, City, Province"
                            value={homeAddress}
                            onChange={(e) => setHomeAddress(e.target.value)}
                            required
                        />
                    </div>

                    {user?.homeLat && user?.homeLng && (
                        <p className="text-xs text-muted-foreground pb-3">
                            Saved coordinates: {Number(user.homeLat).toFixed(5)}, {Number(user.homeLng).toFixed(5)}
                        </p>
                    )}

                    {message && (
                        <p className={message.type === "success" ? "text-sm text-green-600" : "text-sm text-destructive pb-3"}>
                            {message.text}
                        </p>
                    )}
                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Saving..." : "Save Address"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};