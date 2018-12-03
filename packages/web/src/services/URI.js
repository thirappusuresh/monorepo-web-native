import env from '../../env';

export const BLOG_URI = 'https://www.medlife.com/blog/wp-json/wp/v2/posts?per_page=4&_embed';
export const TESTIMONIAL_URI = 'http://192.168.21.25:8091/api/v1/ml-ui-services/testimonials/0/3';
export const PINCODE_CHECK_URI = 'https://svc.medlife.com/ml-rest-services/v1/medlife/customer/pincode';

// const SUBSCRIBE_URI = 'https://www.medlife.com/ml-rest-services/v1/medlife/customer/newsletter/subscribe';
const SUBSCRIBE_URI = '/ml-rest-services/v1/medlife/customer/newsletter/subscribe';

const getURI = (type) => {
    const root = env['medlifeConst.medlife_com_root'];
    switch (type) {
        case 'SUBSCRIBE_URI': {
            return `${root}${SUBSCRIBE_URI}`;
        }

        default: {
            return '';
        }
    }
};

export default getURI;
