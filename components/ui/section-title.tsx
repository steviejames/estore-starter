import { cn } from "@/lib/utils";

export default function SectionTitle({ title, className }: { title: string, className?: string }) {
    return (
        <h2 className={cn("text-xl font-bold mb-4", className)}>{title}</h2>
    )
}