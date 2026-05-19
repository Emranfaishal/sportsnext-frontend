import BookingPlayer from "@/componets/BookingPlayer";
import { SportDeletePage } from "@/componets/SportDeleteCard";
import SportEditModel from "@/componets/SportEditModel";
import Image from "next/image";


const SportDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const res = await fetch(`http://localhost:5000/sportsCollection/${id}`);
    const data = await res.json();
    console.log(data);
    const { _id, imageUrl, destinationName, description, departureDate, country, category, price
    } = data;
    return (
        <div className="max-w-7xl mx-auto">
            SportDetailsPage
            <div className="flex justify-end gap-3 mt-4 mb-4">
                <SportEditModel data={data}></SportEditModel>
                <SportDeletePage data={data}></SportDeletePage>
            </div>
            <Image src={imageUrl} alt={destinationName} height={700} width={700}></Image>
            <div className="">
                <h2>{destinationName}</h2>
                <p>{description}</p>
                <p>{country}</p>
                <p>{price}</p>
                <BookingPlayer data={data}></BookingPlayer>
            </div>
            
                
            
        </div>
    );
};

export default SportDetailsPage;