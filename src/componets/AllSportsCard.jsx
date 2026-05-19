import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllSportsCard = ({ sport }) => {
    const { _id, imageUrl, destinationName, description, departureDate, country, category, price
    } = sport;

    return (
        <div className='border p-5'>
            <Image src={imageUrl} alt={destinationName} height={200} width={200}></Image>

            <div>
                <h2>{destinationName}</h2>
                <h3>{country}</h3>
            </div>
            <div>
                <Link href={`/addPlayer/${_id}`}><Button variant='ghost' className={'text-cyan-500'}>Book new</Button></Link>
            </div>
        </div>
    );
};

export default AllSportsCard;