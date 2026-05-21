import AllSportsCard from "@/componets/AllSportsCard";

const AddPlayerPage = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/sportsCollection`);
    const sportData = await res.json();
    console.log(sportData);
    return (
        <div className="max-w-7xl mx-auto">
            AddPlayerPage
            <div className="grid grid-cols-3 gap-5 ">
                {
                    sportData.map(sport => <AllSportsCard key={sport._id} sport={sport}></AllSportsCard>)
                }
            </div>
        </div>
    );
};

export default AddPlayerPage;