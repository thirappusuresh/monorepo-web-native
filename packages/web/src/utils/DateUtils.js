/* eslint-disable import/prefer-default-export */
export const getMonthName = (monthIndex) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return months[monthIndex];
};

export const getParsedGMTString = gmtDateString => new Date(gmtDateString);
