import Link from 'next/link';


const SportNavbar = () => {
    return (
        <nav className='flex justify-between p-5'>
            <ul className='flex gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/addPlayer'}>Add to Player</Link></li>
                <li><Link href={'/myBooking'}>My Booking</Link></li>
                <li><Link href={'/allFacilities'}>All Facilities</Link></li>
                <li><Link href={'/addMemberShip'}>Add Member Ship</Link></li>
            </ul>
            <div>
                <h2>Sport Page</h2>
            </div>
            <ul className='flex gap-3'>
                <li><Link href={'/profile'}>My Profile</Link></li>
                <li><Link href={'/singin'}>Sing IN</Link></li>
                <li><Link href={'/register'}>Register</Link></li>
            </ul>
        </nav>
    );
};

export default SportNavbar;