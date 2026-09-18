export { cn } from "cn"

export function formatMount(monthStr) {
    const [year, month] = monthStr.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString("id-ID", { month: "short", year: "numeric" })
}