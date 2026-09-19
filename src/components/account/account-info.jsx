import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const AccountInfoCard = ({ user }) => (
    <Card>
        <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Account information used to sign in</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
            <Avatar className="size-16 rounded-full">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback className="rounded-full text-lg">
                    {user?.name?.[0]?.toUpperCase() || "JF"}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <p className="font-medium text-foreground">{user?.name || "-"}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="w-fit">
                    {user?.provider === "google" ? "Signed in with Google" : "Signed in with email"}
                </Badge>
            </div>
        </CardContent>
    </Card>
);