//import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import Nav from '../Parts/Nav';
import axios from 'axios';
import Footer from '../Parts/Footer';

import AxiosFunction from '../AxiosFunction';

const HomePage = (props) => {

    axios.get(`${process.env.REACT_APP_ENV}/api/get-banner`).then(resp=>{
        console.log('Axios Data----->>>>',resp.data)
    })



    const [loader, setLoader] = useState(false)
    return (
        <LoadingOverlay active={loader} spinner>
            <ToastContainer />
            <div className="container-scroller">

                <Nav/>

                    <div className="container-fluid page-body-wrapper">

                    </div>
                    
                <Footer/>
            </div>
        </LoadingOverlay>
    )
}

export default HomePage
