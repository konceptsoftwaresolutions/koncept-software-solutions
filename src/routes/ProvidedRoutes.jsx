import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// loader
import Loading from "../components/loader/Loading";

const ProvidedRoutes = ({ children }) => {
    return <>
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </BrowserRouter>
    </>
}

export default ProvidedRoutes;