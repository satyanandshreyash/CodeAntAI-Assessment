import Repos from "../components/dashboard/Repos"
import SideBar from "../components/dashboard/SideBar"

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <SideBar />
            <div className="bg-[#FAFAFA] md:flex-1 md:p-4">
                <Repos />
            </div>
        </div>
    )
}

export default Dashboard
