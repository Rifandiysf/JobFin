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
                <p className="font-medium text-foreground">Application not found</p>
                <Button variant="outline" onClick={() => navigate("/application")}>
                    Back to applications
                </Button>
            </div>
        );
    }

    const hasCoords = job.companyLat && job.companyLng;
    const hasRoute = Array.isArray(job.routeGeometry) && job.routeGeometry.length > 0;
    const hasHome = user?.homeLat && user?.homeLng;

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex justify-between items-center gap-3 max-md:flex-col">
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
                <div className="">
                    <h1>This feature is still in <span className="bg-primary/60 px-2 py-1 rounded-full">Beta</span> and may not be fully accurate</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Route to Company</CardTitle>
                        <CardDescription>
                            Estimated route from your home address to the company location
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!hasHome ? (
                            <MapPlaceholder
                                icon={<HomeIcon className="size-8 text-muted-foreground" />}
                                text="Home address not set"
                                actionLabel="Set it in Settings"
                                actionHref="/account"
                            />
                        ) : !hasCoords ? (
                            <MapPlaceholder
                                icon={<BuildingIcon className="size-8 text-muted-foreground" />}
                                text="Company address has not been added to this application"
                            />
                        ) : (
                            <RouteMap job={job} user={user} hasRoute={hasRoute} />
                        )}
                    </CardContent>
                </Card>

                <Card className="lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Application Details</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <InfoRow label="Company" value={job.companyName} />
                        <InfoRow label="Position" value={job.position} />
                        <InfoRow
                            label="Applied Date"
                            value={job.appliedDate ? new Date(job.appliedDate).toLocaleDateString("id-ID") : "-"}
                        />
                        <InfoRow label="Company Address" value={job.companyAddress || "-"} />

                        {job.distanceKm != null && (
                            <InfoRow
                                label="Distance from Home"
                                value={`${job.distanceKm} km`}
                                icon={<RouteIcon className="size-4" />}
                            />
                        )}
                        {job.durationMin != null && (
                            <InfoRow
                                label="Estimated Travel Time"
                                value={`${job.durationMin} minute`}
                                icon={<ClockIcon className="size-4" />}
                            />
                        )}

                        {job.notes && (
                            <div className="flex flex-col gap-1">
                                <p className="text-sm text-muted-foreground">Notes</p>
                                <p className="whitespace-pre-wrap text-sm text-foreground">{job.notes}</p>
                            </div>
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