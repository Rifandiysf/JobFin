import { Link } from "lucide-react";
import { Button } from "../ui/button";

export const MapPlaceholder = ({ icon, text, actionLabel, actionHref }) => (
    <div className="flex h-105 flex-col items-center justify-center gap-3 rounded-lg border border-dashed text-center">
        {icon}
        <p className="text-sm text-muted-foreground">{text}</p>
        {actionLabel && (
            <Button asChild size="sm" variant="outline">
                <Link to={actionHref}>{actionLabel}</Link>
            </Button>
        )}
    </div>
);