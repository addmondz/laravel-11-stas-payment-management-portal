import axios from 'axios';

const fetchUserDetails = async () => {
    try {
        const { data } = await axios.get(route('user.details'));
        return data;
    } catch (err) {
        console.error('Error fetching membership data:', err);
        throw err;
    }
};

const convertStringToNumber = (string) => {
    // Ensure it's a string and return the number without commas
    if (typeof string === 'string') {
        return string.replace(/,/g, '');
    }
    return string;
};

const formatPrice = (number) => {
    number = convertStringToNumber(number);

    // Convert to a number and format it to two decimal places
    const formattedNumber = Number(number).toFixed(2);

    // Format the number with commas as thousand separators
    return formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const formatNumberToTwoDecimals = (number) => {
    number = Number(number).toFixed(2);
    number = parseFloat(number);
    return number;
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const storedUserData = JSON.parse(sessionStorage.getItem('userData')) || {};

const getPriceAfterDiscount = (price, returnFormat = 'string') => {
    price = Number(price);
    const discount = Number(storedUserData?.membership_type?.discount) || 0;

    const discountedPrice = discount > 0
        ? price * ((100 - discount) / 100)
        : price;

    // Return number if specifiedZ
    if (returnFormat === 'number') {
        return formatNumberToTwoDecimals(discountedPrice);
    }

    // Otherwise, return formatted string
    return formatPrice(discountedPrice);
};

// Exporting functions
export { fetchUserDetails, formatPrice, apiBaseUrl, getPriceAfterDiscount, convertStringToNumber, formatNumberToTwoDecimals };
