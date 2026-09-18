import { useAuth } from "@/hooks/use-auth";
import { AccountInfoCard } from "@/components/account/account-info";
import { HomeAddressCard } from "@/components/account/home-address";
import { ChangePasswordCard } from "@/components/account/change-password";

const Account = () => {
    const { user, refetchUser } = useAuth();

    return (
        <div className="flex flex-col gap-6 p-6">
            <div>
                <h1 className="text-2xl font-bold text-foreground">Pengaturan</h1>
                <p className="text-sm text-muted-foreground">
                    Kelola informasi akun, alamat rumah, tema, dan keamanan akun kamu.
                </p>
            </div>

            <AccountInfoCard user={user} />
            <HomeAddressCard user={user} refetchUser={refetchUser} />
            {user?.provider !== "google" && <ChangePasswordCard />}
        </div>
    );
};







export default Account;