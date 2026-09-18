import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    PlusIcon,
    SearchIcon,
    PencilIcon,
    Trash2Icon,
} from "lucide-react";
import { getJobs, deleteJob } from "@/lib/service/jobs";
import { useDebounce } from "@/hooks/use-debounce";
import { JobFormDialog } from "@/components/application/job-form-dialog";
import { DeleteJobDialog } from "@/components/application/delete-job-dialog";
import { Link } from "react-router-dom";
import { STATUS_BADGE, STATUS_OPTIONS } from "@/constants/application-constant";

const Application = () => {
    const [jobs, setJobs] = useState([]);
    const [meta, setMeta] = useState({
        total: 0,
        page: 1,
        totalPages: 1,
    });

    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);

    const debouncedSearch = useDebounce(search, 500);

    const [formOpen, setFormOpen] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const [deletingJob, setDeletingJob] = useState(null);

    const fetchJobs = useCallback(async () => {
        setLoading(true);

        try {
            const result = await getJobs({
                page,
                limit: 10,
                status,
                search: debouncedSearch,
            });

            setJobs(result.items);
            setMeta(result.meta);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [page, status, debouncedSearch]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchJobs();
    }, [fetchJobs]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handleStatusChange = (value) => {
        setStatus(value);
        setPage(1);
    };

    const handleAdd = () => {
        setEditingJob(null);
        setFormOpen(true);
    };

    const handleEdit = (job) => {
        setEditingJob(job);
        setFormOpen(true);
    };

    const handleDelete = (job) => {
        setDeletingJob(job);
    };

    const handleDeleteConfirmed = async () => {
        try {
            await deleteJob(deletingJob.id);
            setDeletingJob(null);
            await fetchJobs();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    Lamaran Kerja
                </h1>

                <Button onClick={handleAdd}>
                    <PlusIcon className="mr-2 size-4" />
                    Tambah Lamaran
                </Button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                    <SearchIcon className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                    <Input
                        placeholder="Cari nama perusahaan atau posisi..."
                        value={search}
                        onChange={handleSearchChange}
                        className="pl-8"
                    />
                </div>

                <Select
                    value={status}
                    onValueChange={handleStatusChange}
                >
                    <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Filter status" />
                    </SelectTrigger>

                    <SelectContent>
                        {STATUS_OPTIONS.map((opt) => (
                            <SelectItem
                                key={opt.value}
                                value={opt.value}
                            >
                                {opt.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Perusahaan</TableHead>
                            <TableHead>Posisi</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Tanggal Lamar</TableHead>
                            <TableHead>Jarak</TableHead>
                            <TableHead className="text-right">
                                Aksi
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="py-8 text-center text-muted-foreground"
                                >
                                    Memuat data...
                                </TableCell>
                            </TableRow>
                        ) : jobs.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="py-8 text-center text-muted-foreground"
                                >
                                    Belum ada lamaran yang cocok
                                </TableCell>
                            </TableRow>
                        ) : (jobs.map((job) => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">
                                    <Link to={`/application/${job.id}`} className="hover:underline">
                                        {job.companyName}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {job.position}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        className={STATUS_BADGE[job.status]}
                                        variant="secondary"
                                    >
                                        {job.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {job.appliedDate
                                        ? new Date(
                                            job.appliedDate
                                        ).toLocaleDateString("id-ID")
                                        : "-"}
                                </TableCell>
                                <TableCell>
                                    {job.distanceKm
                                        ? `${job.distanceKm} km`
                                        : "-"}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleEdit(job)}
                                    >
                                        <PencilIcon className="size-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleDelete(job)}
                                    >
                                        <Trash2Icon className="size-4 text-destructive" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {meta.totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    setPage((p) => Math.max(1, p - 1))
                                }
                                className={
                                    page === 1
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                            />
                        </PaginationItem>

                        {Array.from(
                            { length: meta.totalPages },
                            (_, i) => i + 1
                        ).map((p) => (
                            <PaginationItem key={p}>
                                <PaginationLink
                                    isActive={p === page}
                                    onClick={() => setPage(p)}
                                    className="cursor-pointer"
                                >
                                    {p}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationNext
                                onClick={() =>
                                    setPage((p) =>
                                        Math.min(meta.totalPages, p + 1)
                                    )
                                }
                                className={
                                    page === meta.totalPages
                                        ? "pointer-events-none opacity-50"
                                        : "cursor-pointer"
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}

            <JobFormDialog
                open={formOpen}
                onOpenChange={setFormOpen}
                job={editingJob}
                onSuccess={fetchJobs}
            />

            <DeleteJobDialog
                job={deletingJob}
                onOpenChange={(open) =>
                    !open && setDeletingJob(null)
                }
                onConfirm={handleDeleteConfirmed}
            />
        </div>
    );
};

export default Application;