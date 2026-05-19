
"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react"; import { Card } from '@heroui/react';
import React, { useState } from 'react';

const BookingPlayer = ({ data }) => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log('userrkjfdjkld',user);
    const [departureDate, setDepartureDate] = useState(null);
    console.log(new Date(departureDate));
    return (
        <div>
            <Card>
                BookingPlayer
                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button>booing new</Button>
            </Card>
        </div>
    );
};

export default BookingPlayer;