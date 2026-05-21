import { Button } from "@heroui/react";
import AllSportsCard from "./AllSportsCard";
import Image from "next/image";
import Link from "next/link";

const SportAllData = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/sportsCollection`);
    const allPlears = await res.json()
    console.log('alll', allPlears);
    return (
        <div>
            <h2>all data</h2>
            <Link href={'/addPlayer'}><Button>alll</Button></Link>
            <div>
                {
                    allPlears.map(sport => <div key={sport._id}>
                        <div className='border p-5'>
                            <Image src={sport.imageUrl} alt={sport.destinationName} height={200} width={200}></Image>

                            <div>
                                <h2>{sport.destinationName}</h2>
                                <h3>{sport.country}</h3>
                            </div>
                           
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SportAllData;