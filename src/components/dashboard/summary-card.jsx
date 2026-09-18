import { Minus, TrendingDown, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const TREND_ICON = {
    up: TrendingUp,
    down: TrendingDown,
    flat: Minus,
}

const SummaryCard = ({ label, value, trend, footerTitle, footerDescription }) => {
    const TrendIcon = trend ? TREND_ICON[trend.direction] ?? Minus : null
    const hasFooter = Boolean(footerTitle || footerDescription)

    return (
        <Card className="@container/card">
            <CardHeader>
                <CardDescription>{label}</CardDescription>
                <CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {value}
                </CardTitle>
                {trend && (
                    <CardAction>
                        <Badge variant="outline">
                            <TrendIcon className="size-3.5" />
                            {trend.value}
                        </Badge>
                    </CardAction>
                )}
            </CardHeader>
            {hasFooter && (
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    {footerTitle && (
                        <div className="line-clamp-1 flex items-center gap-2 font-medium">
                            {footerTitle}
                            {TrendIcon && <TrendIcon className="size-4" />}
                        </div>
                    )}
                    {footerDescription && (
                        <div className="text-muted-foreground">{footerDescription}</div>
                    )}
                </CardFooter>
            )}
        </Card>
    )
}

export default SummaryCard