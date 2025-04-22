const storedData = () => {
    const getStoredData = localStorage.getItem('appoinment');
    if (getStoredData) {
        const convertedData = JSON.parse(getStoredData);
        return convertedData;
    } else {
        return [];
    }
}

const setLocalData = (doctor) => {
    const storedWishListData = storedData();
    if (storedWishListData.some(item=> item.id === doctor.id)) {
        alert('already marked book as read');
    } else {
        storedWishListData.push(doctor);
        const data = JSON.stringify(storedWishListData);
        localStorage.setItem('appoinment', data);
        alert('Apppoinment booked successfully')
    }
}

export { setLocalData, storedData };