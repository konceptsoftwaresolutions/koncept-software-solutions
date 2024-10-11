import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// loader
import Loading from "../components/loader/Loading";

// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProvidedRoutes = ({ children }) => {
    return <>
        <BrowserRouter>
            <HelmetProvider>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </HelmetProvider>
        </BrowserRouter>
    </>
}

export default ProvidedRoutes;