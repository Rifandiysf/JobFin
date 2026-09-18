import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeftIcon, ClockIcon, RouteIcon, HomeIcon, BuildingIcon } from "lucide-react";
import { getJobById } from "@/lib/service/jobs";
import { useAuth } from "@/hooks/use-auth";
import { RouteMap } from "@/components/application/route-map";
import { MapPlaceholder } from "@/components/application/map-placeholder";
import { InfoRow } from "@/components/application/info-row";
import { STATUS_BADGE } from "@/constants/application-constant";

const ApplicationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            setLoading(true);
            setError(false);
            try {
                const data = await getJobById(id);
                setJob(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [id]);

    if (loading) return <DetailSkeleton />;

    if (error || !job) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 p-16 text-center">
                <p className="font-medium text-foreground">Lamaran tidak ditemukan</p>
                <Button variant="outline" onClick={() => navigate("/application")}>
                    Kembali ke daftar lamaran
                </Button>
            </div>
        );
    }

    const hasCoords = job.companyLat && job.companyLng;
    const hasRoute = Array.isArray(job.routeGeometry) && job.routeGeometry.length > 0;
    const hasHome = user?.homeLat && user?.homeLng;

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" asChild>
                    <Link to="/application">
                        <ArrowLeftIcon className="size-4" />
                    </Link>
                </Button>
                <div>
                    <h1 className="text-2xl font-bold text-foreground">{job.position}</h1>
                    <p className="text-sm text-muted-foreground">{job.companyName}</p>
                </div>
                <Badge className={STATUS_BADGE[job.status]} variant="secondary">
                    {job.status}
                </Badge>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Detail Lamaran</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <InfoRow label="Perusahaan" value={job.companyName} />
                        <InfoRow label="Posisi" value={job.position} />
                        <InfoRow
                            label="Tanggal Melamar"
                            value={job.appliedDate ? new Date(job.appliedDate).toLocaleDateString("id-ID") : "-"}
                        />
                        <InfoRow label="Alamat Perusahaan" value={job.companyAddress || "-"} />

                        {job.distanceKm != null && (
                            <InfoRow
                                label="Jarak dari Rumah"
                                value={`${job.distanceKm} km`}
                                icon={<RouteIcon className="size-4" />}
                            />
                        )}
                        {job.durationMin != null && (
                            <InfoRow
                                label="Estimasi Waktu Tempuh"
                                value={`${job.durationMin} menit`}
                                icon={<ClockIcon className="size-4" />}
                            />
                        )}

                        {job.notes && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-muted-foreground">Catatan</p>
                                <p className="whitespace-pre-wrap text-sm text-foreground">{job.notes}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Rute ke Perusahaan</CardTitle>
                        <CardDescription>
                            Perkiraan rute dari alamat rumah kamu ke lokasi perusahaan
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!hasHome ? (
                            <MapPlaceholder
                                icon={<HomeIcon className="size-8 text-muted-foreground" />}
                                text="Alamat rumah belum diisi"
                                actionLabel="Isi di Pengaturan"
                                actionHref="/setting"
                            />
                        ) : !hasCoords ? (
                            <MapPlaceholder
                                icon={<BuildingIcon className="size-8 text-muted-foreground" />}
                                text="Alamat perusahaan belum diisi pada lamaran ini"
                            />
                        ) : (
                            <RouteMap job={job} user={user} hasRoute={hasRoute} />
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

const DetailSkeleton = () => (
    <div className="flex flex-col gap-6 p-6">
        <div className="flex items-center gap-3">
            <Skeleton className="size-9 rounded-md" />
            <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-32" />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Skeleton className="h-96 w-full rounded-xl lg:col-span-1" />
            <Skeleton className="h-96 w-full rounded-xl lg:col-span-2" />
        </div>
    </div>
);

export default ApplicationDetail;