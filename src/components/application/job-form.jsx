import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { createJob, updateJob } from "@/lib/service/jobs";
import { DialogFooter } from "../ui/dialog";

const STATUS_OPTIONS = [
    "applied",
    "interview",
    "offer",
    "accepted",
    "rejected",
];

const emptyForm = {
    companyName: "",
    position: "",
    status: "applied",
    appliedDate: "",
    companyAddress: "",
    notes: "",
};

const getFormFromJob = (job) => {
    if (!job) {
        return { ...emptyForm };
    }

    return {
        companyName: job.companyName || "",
        position: job.position || "",
        status: job.status || "applied",
        appliedDate: job.appliedDate
            ? job.appliedDate.slice(0, 10)
            : "",
        companyAddress: job.companyAddress || "",
        notes: job.notes || "",
    };
};

const JobForm = ({ job, onOpenChange, onSuccess }) => {
    const isEdit = Boolean(job);

    const [form, setForm] = useState(() => getFormFromJob(job));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            if (isEdit) {
                await updateJob(job.id, form);
            } else {
                await createJob(form);
            }

            onOpenChange(false);
            onSuccess();
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Failed to save application"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            {error && (
                <p className="text-sm text-destructive">
                    {error}
                </p>
            )}

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="companyName">
                        Nama Perusahaan
                    </Label>
                    <Input
                        id="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="position">
                        Posisi
                    </Label>
                    <Input
                        id="position"
                        value={form.position}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="status">
                        Status
                    </Label>
                    <Select
                        value={form.status}
                        onValueChange={(value) =>
                            setForm((prev) => ({
                                ...prev,
                                status: value,
                            }))
                        }
                    >
                        <SelectTrigger id="status">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {STATUS_OPTIONS.map((status) => (
                                <SelectItem
                                    key={status}
                                    value={status}
                                >
                                    {status}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="appliedDate">
                        Tanggal Melamar
                    </Label>
                    <Input
                        id="appliedDate"
                        type="date"
                        value={form.appliedDate}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="companyAddress">
                    Alamat Perusahaan
                </Label>
                <Input
                    id="companyAddress"
                    placeholder="Untuk hitung jarak & rute otomatis"
                    value={form.companyAddress}
                    onChange={handleChange}
                />
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="notes">
                    Catatan
                </Label>
                <Textarea
                    id="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                />
            </div>

            <DialogFooter>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => onOpenChange(false)}
                >
                    Batal
                </Button>
                <Button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Menyimpan..."
                        : isEdit
                            ? "Simpan Perubahan"
                            : "Tambah Lamaran"}
                </Button>
            </DialogFooter>
        </form>
    );
};

export default JobForm