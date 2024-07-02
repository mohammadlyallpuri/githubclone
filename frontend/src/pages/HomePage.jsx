import ProfileInfo from "../components/ProfileInfo";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Repos from "../components/Repos"; // Import the Repos component

const HomePage = () => {
    return (
        <div className='m-4'>
            <Search />
            <SortRepos />
            <div className="flex gap-4 flex-col lg:flex justify-center items-start">
                <ProfileInfo />
                <Repos />
            </div>
        </div>
    );
};

export default HomePage;
