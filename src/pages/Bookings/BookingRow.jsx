
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {booking.service_img && <img src={booking.service_img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>{booking.email}</td>
            <td>
                {booking.service_title}
            </td>
            <td>{booking.date}</td>
            <td>${booking.dueamount}</td>
            <th>
                {
                    booking.status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(booking._id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;