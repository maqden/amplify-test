import * as React from "react";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";

export async function Add() {
    return (
        <div>
            <Button variant="outline" size="icon">
                <Plus className="h-6 w-6"/>
                <span className="sr-only">Adicionar cliente</span>
            </Button>
        </div>
    )
}