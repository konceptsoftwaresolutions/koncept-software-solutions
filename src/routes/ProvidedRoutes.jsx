import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// loader
import Loading from "../components/loader/Loading";

// slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// scroll
import TopLoader from "../components/loader/topLoader";
import useScroll from "../hooks/useScroll";

const ProvidedRoutes = ({ children }) => {
    const myScroll = useScroll();
    // console.log(myScroll);

    return <>
        <BrowserRouter>
            <HelmetProvider>
                <Suspense fallback={<Loading />}>
                    <TopLoader percent={myScroll} />
                    <ToastContainer />
                    {children}
                </Suspense>
            </HelmetProvider>
        </BrowserRouter>
    </>
}

export default ProvidedRoutes;