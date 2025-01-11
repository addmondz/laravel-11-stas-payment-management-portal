import axios from 'axios';
import moment from 'moment';

export const fetchUserDetails = async () => {
    try {
        const { data } = await axios.get(route('user.details'));
        return data;
    } catch (err) {
        console.error('Error fetching user data:', err);
        throw err;
    }
};

export const convertStringToNumber = (string) => {
    // Ensure it's a string and return the number without commas
    if (typeof string === 'string') {
        return string.replace(/,/g, '');
    }
    return string;
};

export const formatPrice = (number) => {
    number = convertStringToNumber(number);

    // Convert to a number and format it to two decimal places
    const formattedNumber = Number(number).toFixed(2);

    // Format the number with commas as thousand separators
    return formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatNumberToString = (number) => {
    return number.toLocaleString();
}

export const formatNumberToTwoDecimals = (number) => {
    number = Number(number).toFixed(2);
    number = parseFloat(number);
    return number;
};

export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const storedUserData = JSON.parse(sessionStorage.getItem('userData')) || {};

export const formatDate = (date) => {
    return moment(date).format('DD-MM-YYYY');
};

export const formatId = (id) => String(id).padStart(5, '0');

export const formatString = str => str
    .toLowerCase()
    .split('_')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');

export const formatDateWithTime = (date) => {
    return moment(date).format('DD MMMM YYYY · hh:mm:ss A');
};

export const toUcWords = (input) => {
    return input
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export const handleReportAction = async (action, generateReportData, urlMap) => {
    try {
        let response;
        const config = { headers: { 'Content-Type': 'application/json' } };

        if (action === 'preview') {
            window.open(urlMap.preview, '_blank');
        } else if (action === 'test' || action === 'export') {
            const responseType = action === 'test' ? 'json' : 'blob';
            response = await axios.post(urlMap[action], generateReportData, { ...config, responseType });

            if (action === 'test' && response.data?.html) {
                const url = URL.createObjectURL(new Blob([response.data.html], { type: 'text/html' }));
                const newTab = window.open(url, '_blank');
                if (!newTab) console.error('Failed to open HTML in new tab');
                URL.revokeObjectURL(url);
            } else if (action === 'export') {
                const url = URL.createObjectURL(response.data);
                const a = Object.assign(document.createElement('a'), { href: url, download: 'summary_report.pdf', style: { display: 'none' } });
                document.body.appendChild(a);
                a.click();
                URL.revokeObjectURL(url);
            }
        }
    } catch (error) {
        console.error('Error during action:', action, error);
    }
};
