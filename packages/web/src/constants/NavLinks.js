import navigationLinks from './navigations';

const navLinks = [
    {
        label: 'MEDICAL STORE',
        path: navigationLinks.order,
    },
    {
        label: 'HEALTH PRODUCTS',
        path: 'https://shop.medlife.com/',
    },
    {
        label: 'DOCTOR CONSULTATION',
        path: 'https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true',
    },
    {
        label: 'LAB TESTS',
        path: 'https://labs.medlife.com/',
    },
    {
        label: 'MORE',
        path: '/',
        subLinks: [
            {
                label: 'Medlife Essentials',
                path: 'https://www.medlife.com/medlife-essentials',
            },
            {
                label: 'Find Doctor',
                path: 'https://www.medlife.com/doctors/',
            },
            {
                label: 'For Doctors',
                path: 'https://www.medlife.com/fordoctors',
            },
            {
                label: 'Affiliates',
                path: 'https://www.medlife.com/affiliate',
            },
            {
                label: 'Franchise',
                path: 'https://www.medlife.com/affiliate',
            },
            {
                label: 'Offers',
                path: 'https://www.medlife.com/web/offers/',
            },
            {
                label: 'Blog',
                path: 'https://www.medlife.com/blog/',
            },
        ],
    },
];
const menuLinks = [
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'Order History',
                path: 'https://m.medlife.com/#/root/MyOrder',
                iconsrc: 'static/icons/history.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'My Health Records',
                path: 'https://m.medlife.com/#/root/ehr',
                iconsrc: 'static/icons/records.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'Payments',
                path: 'https://m.medlife.com/#/root/eCash',
                iconsrc: 'static/icons/payments.svg',
            },
        ],
    },
    {
        label: 'Order Medicine',
        path: '/',
        subLinks: [
            {
                label: 'Upload Prescription',
                path: 'https://m.medlife.com/',
                iconsrc: 'static/icons/rx-upload.svg',
            },
            {
                label: 'I Dont have a Prescription',
                path: 'https://m.medlife.com/#/root/norxoptions',
                iconsrc: 'static/icons/no-rx.svg',
            },
            {
                label: 'Create Subscription',
                path: 'https://m.medlife.com/#/root/home/subscription/info?flow=subscription',
                iconsrc: 'static/icons/subscription.svg',
            },
        ],
    },
    {
        label: 'Shop',
        path: '/',
        subLinks: [
            {
                label: 'Health Products',
                path: 'https://shop.medlife.com/',
                iconsrc: 'static/icons/health-product.svg',
            },
        ],
    },
    {
        label: 'Doctor Consultation',
        path: '/',
        subLinks: [
            {
                label: 'Book By Speciality',
                path: 'https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true',
                iconsrc: 'static/icons/speciality.svg',
            },
            {
                label: 'Book By Symptoms',
                path: 'https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true',
                iconsrc: 'static/icons/symptom.svg',
            },
        ],
    },
    {
        label: 'Lab Tests',
        path: '/',
        subLinks: [
            {
                label: 'Book A Lab Test',
                path: 'https://labs.medlife.com/',
                iconsrc: 'static/icons/lab-test.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'Refer and Earn',
                path: 'https://m.medlife.com/#/root/ShareEarn',
                iconsrc: 'static/icons/share-and-earn.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'Offers',
                path: 'https://www.medlife.com/web/offers/',
                iconsrc: 'static/icons/offers.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'Notifications',
                path: 'https://m.medlife.com/#/root/home/notificationHistory',
                iconsrc: 'static/icons/notifications.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'About Medlife',
                path: 'http://careers.medlife.com/',
                iconsrc: 'static/icons/about-medlife.svg',
            },
        ],
    },
    {
        label: null,
        path: '/',
        subLinks: [
            {
                label: 'FAQ',
                path: 'https://m.medlife.com/#/root/faq',
                iconsrc: 'static/icons/faq.svg',
            },
        ],
    },
];

export {
    navLinks,
    menuLinks,
};
