import * as React from "react";
import {Add} from "@/components/customer/add";
import {List} from "@/components/customer/list";

export default function Home() {
    return (
        <main className="grid gap-8 p-4">
            <section className="flex-between">
                <h1 className="font-bold text-3xl">Clientes</h1>

                <div className="flex-center gap-4">
                    <Add />
                </div>
            </section>

            <section>
                <List />
            </section>
        </main>
    );
}
