import React from 'react';
import BannerContainer from './bodycomponents/BannerContainer';
import Sellingpointsstrip from './bodycomponents/Sellingpointsstrip';
import CategoriesMobile from './bodycomponents/CategoriesMobile';
import OrderMedicinesContainer from './bodycomponents/OrderMedicinesContainer';
import MedlifeRecipe from './bodycomponents/MedlifeRecipe';
import Orderhistory from './bodycomponents/Orderhistory';
import CallToOrder from './bodycomponents/CallToOrder';
import Recentlyviewed from './bodycomponents/Recentlyviewed';
import ShopHealthProducts from './bodycomponents/ShopHealthProducts';
import MedlifeEssentials from './bodycomponents/MedlifeEssentials';
import Topbrands from './bodycomponents/Topbrands';
import BookALabTest from './bodycomponents/BookALabTest';
import DoctorConsultation from './bodycomponents/DoctorConsultation';
import Testimonials from './bodycomponents/Testimonials';
import PartnerWithUs from './bodycomponents/PartnerWithUs';
import HealthArticles from './bodycomponents/HealthArticles';
import MedicalCertificates from './bodycomponents/MedicalCertificates';
import CitiesWeServe from './bodycomponents/CitiesWeServe';
import MobileFooter from './bodycomponents/MobileFooter';

export default function BodyWrapper() {
    return (
        <div className="main-container">
            <BannerContainer />
            <Sellingpointsstrip />
            <CategoriesMobile />
            <OrderMedicinesContainer />
            <MedlifeRecipe />
            {false && <Orderhistory />}
            <CallToOrder />
            {false && <Recentlyviewed />}
            {false && <ShopHealthProducts />}
            {false && <MedlifeEssentials />}
            {false && <Topbrands />}
            {false && <BookALabTest />}
            <DoctorConsultation />
            <Testimonials />
            <PartnerWithUs />
            <HealthArticles />
            <MedicalCertificates />
            <CitiesWeServe />
            <MobileFooter />
        </div>
    );
}
