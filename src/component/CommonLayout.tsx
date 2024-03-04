"use client"

import { ReactNode, useEffect, useState } from "react";
import Loading from "./Loading";

export default function CommonLayout({ children }: { children: ReactNode }) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("page loaded.........");
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? (<Loading />) : (children)}
        </>
    );
}

