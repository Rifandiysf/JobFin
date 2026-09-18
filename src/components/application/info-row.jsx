export const InfoRow = ({ label, value, icon }) => (
    <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {icon}
            {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
);