import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// loader
import Loading from "../components/loader/Loading";

// slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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