import { toast } from "react-toastify";
import { removeLocalStorage } from "../Utility/bookings";

const Appoinments = ({ appoinment, handleDelete }) => {

    const notify = () => toast(`${appoinment.name}'s Appoinment has Canceled Successfully`);

    const handleCancelBooking = (id) => {
        removeLocalStorage(id);
        handleDelete(id)
        notify()
    }

    return (
        <div className='bg-white p-5 rounded-2xl'>
            <div className='flex items-center justify-between border-b border-dashed border-gray-600'>
                <div className='py-2'>
                    <h3 className='pb-2 text-xl font-bold'>{appoinment.name}</h3>
                    <p>{appoinment.education}</p>
                </div>
                <p>Appoinment Fee: <span>{appoinment.consultationFee}</span> Taka+ Vat</p>
            </div>
            <div>
                <button onClick={() => handleCancelBooking(appoinment.id)} className='text-[#FF0000] border w-full border-[#FF0000] py-3 rounded-full font-bold mt-4'>Cancel Appoinment</button>
            </div>
        </div>
    );
};

export default Appoinments;