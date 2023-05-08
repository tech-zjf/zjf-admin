import PublishCard from "@/components/global/publish-card"

const HomePage: React.FC = () => {
    return (
        <div className=" grid grid-cols-5 mt-10">
            <div className=" col-span-1">left</div>
            <div className=" col-span-3">center</div>
            <div className=" col-span-1 px-3">
                <PublishCard />
            </div>
        </div>
    )
}
export default HomePage