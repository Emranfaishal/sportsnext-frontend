import { BookingDelete } from '@/componets/BookingDelete';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    // console.log(session);
    const user = session?.user;
    // console.log(user);
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
    const bookings = await res.json();
    // console.log("data",data);



    return (
        <div>
            <h2>my booking player</h2>
            {
                bookings.map(booking => <div key={booking._id}>
                    <Image
                        src={booking.dataImage}
                        alt={booking.dataName}
                        height={300}
                        width={300}
                    />
                    <p>
                        {
                            new Date(booking.departureDate).toLocaleDateString("en-US", {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })
                        }
                    </p>
                    <BookingDelete bookingId={booking._id}></BookingDelete>
                    
                </div>)
            }
        </div>
    );
};

export default MyBookingPage;