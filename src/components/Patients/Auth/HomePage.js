//import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import Nav from '../Parts/Nav';
import axios from 'axios';
import Footer from '../Parts/Footer';

import AxiosFunction from '../AxiosFunction';

const HomePage = (props) => {


    const [banners, setBanners] = useState([]);

    const [specialiest, setSpecialiest] = useState([]);

    const [issues, setIssues] = useState([])
    const [loader, setLoader] = useState(true)
    // api/get-specialty', views.getSpecialty, name='get-specialty'),
    // path('api/get-health-issues


    


    useEffect(() => {
        let mounted = true;
        if (mounted) {


            axios.get(`${process.env.REACT_APP_ENV}/api/get-banner`).then(resp=>{
                //console.log('Axios Data----->>>>',resp.data.data)
                setBanners(resp.data.data)
            })

            axios.get(`${process.env.REACT_APP_ENV}/api/get-specialty`).then(resp=>{
                console.log('Axios Data Speciliest----->>>>',resp.data)
                //setBanners(resp.data.data)
            })

            axios.get(`${process.env.REACT_APP_ENV}/api/get-health-issues`).then(resp=>{
                console.log('Axios Data Issues----->>>>',resp.data)
                //setBanners(resp.data.data)
                setLoader(false)
            })

        }
        return () => mounted = false;
        }, [])



    
    return (
        <LoadingOverlay active={loader} spinner>
            <ToastContainer />
            <div className="container-scroller">

                

                <Nav/>

                    <div className="container-fluid page-body-wrapper">

                       
                       

                    {banners.map((i,id)=>(

                    <p key={id}> 
                        Id: {i.id} 
                        Name: {i.name} 
                        <br/>
                        
                        </p>
                        ))}

                    </div>
                    
                <Footer/>
            </div>
        </LoadingOverlay>
    )
}

export default HomePage
