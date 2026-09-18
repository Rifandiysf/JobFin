import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import JobForm from "./job-form";

export const JobFormDialog = ({
    open,
    onOpenChange,
    job,
    onSuccess,
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {job ? "Edit Lamaran" : "Tambah Lamaran"}
                    </DialogTitle>
                    <DialogDescription>
                        {job
                            ? "Perbarui detail lamaran kerja kamu."
                            : "Isi detail lamaran kerja baru."}
                    </DialogDescription>
                </DialogHeader>

                {open && (
                    <JobForm
                        key={job?.id ?? "new"}
                        job={job}
                        onOpenChange={onOpenChange}
                        onSuccess={onSuccess}
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};