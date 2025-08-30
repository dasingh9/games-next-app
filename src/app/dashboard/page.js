import CustomCard from "@/components/CustomCard";

export default async function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <CustomCard title="My Sample Card">
                <div>
                    I will show some numbers here later!
                </div>
            </CustomCard>
        </>
    )
}