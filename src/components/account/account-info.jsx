import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const AccountInfoCard = ({ user }) => (
    <Card>
        <CardHeader>
            <CardTitle>Informasi Akun</CardTitle>
            <CardDescription>Data akun yang kamu pakai untuk login</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
            <Avatar className="size-16 rounded-lg">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback className="rounded-lg text-lg">
                    {user?.name?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <p className="font-medium text-foreground">{user?.name || "-"}</p>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="w-fit">
                    {user?.provider === "google" ? "Login via Google" : "Login manual"}
                </Badge>
            </div>
        </CardContent>
    </Card>
);