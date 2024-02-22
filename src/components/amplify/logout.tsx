import * as React from "react";

import {LogOut} from "lucide-react";
import {signOut} from "@aws-amplify/auth";
import {Button} from "@/components/ui/button";

export default function Logout() {
    return (
        <Button variant="outline" size="icon" onClick={async () => await signOut()}>
            <LogOut className="h-6 w-6" />
            <span className="sr-only">Sair</span>
        </Button>
    );
}