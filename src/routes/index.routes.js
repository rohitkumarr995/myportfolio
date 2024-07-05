import React from "react"
import { Route, Routes } from "react-router-dom"
import Loader from "../utils/loading"
const LazyHome = React.lazy(()=>import('../components/home'))
const LazyAbout = React.lazy(()=>import('../components/about'))
const LazyResume = React.lazy(()=>import('../components/resume'))
const LazyContact = React.lazy(()=>import('../components/contact'))
const LazyServices = React.lazy(()=>import('../components/services'))


const AppRoutes = () =>{

    return(
        <Routes>
            <Route path="/home" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyHome/>
                </React.Suspense>
            }/>
            <Route path="/about" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyAbout/>
                </React.Suspense>
            }/>
            <Route path="/resume" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyResume/>
                </React.Suspense>
            }/>
            <Route path="/services" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyServices/>
                </React.Suspense>
            }/>
            <Route path="/contact" element={
                <React.Suspense fallback={<Loader/>}>
                    <LazyContact/>
                </React.Suspense>
            }/>
        </Routes>
    )
}

export default AppRoutes