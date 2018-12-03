import React from 'react';
import BannerContainer from './bodycomponents/BannerContainer';
import Sellingpointsstrip from './bodycomponents/Sellingpointsstrip';
import CategoriesMobile from './bodycomponents/CategoriesMobile';
import OrderMedicinesContainer from './bodycomponents/OrderMedicinesContainer';
import MedlifeRecipe from './bodycomponents/MedlifeRecipe';
import CallToOrder from './bodycomponents/CallToOrder';
import SubscribeButtonMobile from './bodycomponents/SubscribeButtonMobile';
import DoctorConsultation from './bodycomponents/DoctorConsultation';
import PartnerWithUs from './bodycomponents/PartnerWithUs';
import HealthArticles from './bodycomponents/HealthArticles';
import MedicalCertificates from './bodycomponents/MedicalCertificates';
import CitiesWeServe from './bodycomponents/CitiesWeServe';
import MobileFooter from './bodycomponents/MobileFooter';
import { renderAsyncComponent } from './common/AsyncComponent';

export default function BodyWrapper() {
    return (
        <div className="main-container">
            <BannerContainer />
            <Sellingpointsstrip />
            <CategoriesMobile />
            <OrderMedicinesContainer />
            <MedlifeRecipe />

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/Orderhistory'),
                })
            )}

            <SubscribeButtonMobile />
            <CallToOrder />

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/Recentlyviewed'),
                })
            )}

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/ShopHealthProducts'),
                })
            )}

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/MedlifeEssentials'),
                })
            )}

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/Topbrands'),
                })
            )}

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/BookALabTest'),
                })
            )}

            <DoctorConsultation />

            {false && (
                renderAsyncComponent({
                    fetchComponent: () => import('./bodycomponents/Testimonials'),
                })
            )}

            <PartnerWithUs />
            <HealthArticles />
            <MedicalCertificates />
            <CitiesWeServe />
            <MobileFooter />
        </div>
    );
}
