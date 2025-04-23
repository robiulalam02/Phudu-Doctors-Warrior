
const storedData = () => {
    const getStoredData = localStorage.getItem('appoinment');
    if (getStoredData) {
        const convertedData = JSON.parse(getStoredData);
        return convertedData;
    } else {
        return [];
    }
}

const setLocalData = (doctor, successfulToast, unseccessfulToast) => {
    const storedWishListData = storedData();
    if (storedWishListData.some(item => item.id === doctor.id)) {
        unseccessfulToast();
    } else {
        storedWishListData.push(doctor);
        const data = JSON.stringify(storedWishListData);
        localStorage.setItem('appoinment', data);
        successfulToast();
    }
}

const removeLocalStorage = id => {
    const localStorageData = storedData();
    const filteredData = localStorageData.filter(data=> data.id !== id)
    localStorage.setItem('appoinment', JSON.stringify(filteredData))
}


export { setLocalData, storedData, removeLocalStorage };