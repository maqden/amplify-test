import {Skeleton} from "@/components/ui/skeleton"

export function Loading() {
    return (
        <ul>
            <li><Skeleton className="h-4 w-[250px]"/></li>
            <li><Skeleton className="h-4 w-[230px]"/></li>
            <li><Skeleton className="h-4 w-[290px]"/></li>
            <li><Skeleton className="h-4 w-[220px]"/></li>
            <li><Skeleton className="h-4 w-[210px]"/></li>
            <li><Skeleton className="h-4 w-[270px]"/></li>
            <li><Skeleton className="h-4 w-[220px]"/></li>
        </ul>
    )
}
