import * as React from "react";
import {Suspense} from "react";
import {Input} from "@/components/ui/input";
import {Loading} from "@/components/customer/loading";
import {ScrollArea} from "@/components/ui/scroll-area";

export async function List() {
    const response = await fetch('http://localhost:8000/customers')
    const data = await response.json()

    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="flex-start gap-2">
                <Input placeholder="Pesquisar aqui..." />
            </div>

            <ScrollArea className="h-auto">
                <Suspense fallback={<Loading />}>
                    <ul className="grid gap-1">
                        {data.map((item: any) => (
                            <li key={item.id} className="bg-accent text-accent-foreground p-2.5 space-y-1 rounded font-medium">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </Suspense>
            </ScrollArea>
        </div>
    )
}