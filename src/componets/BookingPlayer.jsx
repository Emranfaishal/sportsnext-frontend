
"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react"; import { Card } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingPlayer = ({ data }) => {
    // console.log('data ton', data);
    const { _id, imageUrl, destinationName, description, country, category, price
    } = data;

    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log('userrkjfdjkld', user);
    const [departureDate, setDepartureDate] = useState(null);
    // console.log(new Date(departureDate));
    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            dataId: _id,
            dataName: destinationName,
            dataPrice: price,
            dataImage: imageUrl,
            dataCountry: country,
            departureDate: new Date(departureDate)

        }
        // console.log("bookinData",bookingData);
        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        const dataAdd = await res.json();
        console.log(dataAdd);
        toast.success('your booking success');
    }
    return (
        <div>
            <Card>
                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <p>{price}</p>
                <Button onClick={handleBooking}>booing new</Button>
            </Card>
        </div>
    );
};

export default BookingPlayer;