import {Loader} from "lucide-react";
import React from "react";

export default function Loading() {
    return  <div className="flex justify-center items-center gap-2 py-10">
    <Loader className="h-6 w-6 animate-spin text-emerald-600" />
    <span className="text-emerald-700 text-lg">Φόρτωση...</span>
    </div>;
}