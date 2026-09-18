import { EmptyState } from "@/components/dashboard/empty-state";
import SummaryCard from "@/components/dashboard/summary-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { GetDashboardSummary } from "@/lib/service/dashboard";
import { formatMount } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, XAxis, YAxis } from "recharts";

const STATUS_LABEL = {
    applied: "Applied",
    interview: "Interview",
    offer: "Offer",
    accepted: "Accepted",
    rejected: "Rejected",
};

const STATUS_COLOR = {
    applied: "#3b82f6",
    interview: "#eab308",
    offer: "#a855f7",
    accepted: "#22c55e",
    rejected: "#ef4444",
};

const chartConfig = {
    count: { label: "Jumlah" },
};

// Bandingkan 2 bulan terakhir dari monthlyTrend. Return null kalau datanya belum cukup,
// supaya SummaryCard tidak menampilkan badge tren yang tidak berdasar data nyata.
function computeMonthlyTrend(monthlyTrend) {
    if (!monthlyTrend || monthlyTrend.length < 2) return null

    const last = monthlyTrend[monthlyTrend.length - 1]
    const prev = monthlyTrend[monthlyTrend.length - 2]
    if (!prev.count) return null

    const diff = ((last.count - prev.count) / prev.count) * 100
    const direction = diff > 0 ? "up" : diff < 0 ? "down" : "flat"

    return {
        direction,
        value: `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}%`,
    }
}

export default function Dashboard() {
    const [summary, setSummary] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            try {
                const data = await GetDashboardSummary()
                setSummary(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    if (loading) {
        return <div className="p-6 text-muted-foreground">Loading Dashboard...</div>
    }

    if (!summary) {
        return <div className="p-6 text-muted-foreground">Failed to load dashboard data</div>
    }

    const { totalApplications, byStatus, averageDistanceKm, monthlyTrend } = summary

    const statusChartData = byStatus.map((stat) => ({
        status: STATUS_LABEL[stat.status] || stat.status,
        count: stat.count,
        fill: STATUS_COLOR[stat.status] || "#94a3b8",
    }))

    const trendChartData = monthlyTrend.map((trend) => ({
        month: formatMount(trend.month),
        count: trend.count,
    }))

    const topStatus =
        statusChartData.length > 0
            ? statusChartData.reduce((a, b) => (a.count > b.count ? a : b)).status
            : "-"

    const applicationsTrend = computeMonthlyTrend(monthlyTrend)

    return (
        <section className="flex flex-col gap-6 p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs dark:*:data-[slot=card]:bg-card">
                <SummaryCard
                    label="Total Applications"
                    value={totalApplications}
                    trend={applicationsTrend}
                    footerTitle={
                        applicationsTrend
                            ? applicationsTrend.direction === "down"
                                ? "Menurun dari bulan lalu"
                                : "Meningkat dari bulan lalu"
                            : "Jumlah lamaran yang tercatat"
                    }
                    footerDescription="Akumulasi seluruh lamaran"
                />
                <SummaryCard
                    label="Distance Average"
                    value={averageDistanceKm != null ? `${averageDistanceKm} km` : "-"}
                    footerTitle="Rata-rata jarak ke lokasi kerja"
                    footerDescription={
                        averageDistanceKm == null
                            ? "Belum ada lamaran dengan alamat perusahaan"
                            : "Dihitung dari lamaran dengan alamat lengkap"
                    }
                />
                <SummaryCard
                    label="Status Terbanyak"
                    value={topStatus}
                    footerTitle="Status dengan lamaran terbanyak"
                    footerDescription="Bandingkan dengan chart distribusi di bawah"
                />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Lamaran per Status</CardTitle>
                        <CardDescription>Distribusi status semua lamaran kamu</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {statusChartData.length === 0 ? (
                            <EmptyState text="Belum ada data status" />
                        ) : (
                            <ChartContainer config={chartConfig} className="h-64 w-full">
                                <BarChart data={statusChartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="status" tickLine={false} axisLine={false} />
                                    <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="count" radius={4}>
                                        {statusChartData.map((entry) => (
                                            <Cell key={entry.status} fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ChartContainer>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Tren Bulanan</CardTitle>
                        <CardDescription>Jumlah lamaran per bulan</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {trendChartData.length === 0 ? (
                            <EmptyState text="Belum ada data tren" />
                        ) : (
                            <ChartContainer config={chartConfig} className="h-64 w-full">
                                <LineChart data={trendChartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                                    <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Line
                                        type="monotone"
                                        dataKey="count"
                                        stroke="var(--color-count, #3b82f6)"
                                        strokeWidth={2}
                                        dot
                                    />
                                </LineChart>
                            </ChartContainer>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}