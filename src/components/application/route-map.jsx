import { BuildingIcon, HomeIcon } from "lucide-react";
import { Map, MapMarker, MapRoute, MarkerContent, MarkerTooltip } from "../ui/map";

export const RouteMap = ({ job, user, hasRoute }) => {
    const home = { lng: Number(user.homeLng), lat: Number(user.homeLat) };
    const company = { lng: Number(job.companyLng), lat: Number(job.companyLat) };

    const centerLng = (home.lng + company.lng) / 2;
    const centerLat = (home.lat + company.lat) / 2;

    const routeCoordinates = hasRoute
        ? job.routeGeometry.map(([lng, lat]) => [lng, lat])
        : [[home.lng, home.lat], [company.lng, company.lat]];

    return (
        <div className="h-105 w-full overflow-hidden rounded-lg border">
            <Map center={[centerLng, centerLat]} zoom={11}>
                <MapRoute coordinates={routeCoordinates} color="#3b82f6" width={4} opacity={0.8} />

                <MapMarker longitude={home.lng} latitude={home.lat}>
                    <MarkerContent>
                        <div className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-green-500 text-white shadow-lg">
                            <HomeIcon className="size-3.5" />
                        </div>
                    </MarkerContent>
                    <MarkerTooltip>Rumah kamu</MarkerTooltip>
                </MapMarker>

                <MapMarker longitude={company.lng} latitude={company.lat}>
                    <MarkerContent>
                        <div className="flex size-6 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white shadow-lg">
                            <BuildingIcon className="size-3.5" />
                        </div>
                    </MarkerContent>
                    <MarkerTooltip>{job.companyName}</MarkerTooltip>
                </MapMarker>
            </Map>
        </div>
    );
};