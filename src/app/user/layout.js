import Sidebar from "../components/Sidebar/Sidebar";

const UserLayout = ({children}) => {
    return (
        <div className="w-screen h-[calc(100vh-175px)] md:h-[calc(100vh-100px)] overflow-y-scroll md:scrollbar-none relative xl:flex xl:justify-center">
            <div className="w-full h-full md:flex md:flex-row-reverse xl:w-[1366px] xl:p-[10px]">
                <div className="w-full h-full flex flex-col  p-[10px] md:flex-2 overflow-scroll md:scrollbar-none">
                    {children}
                </div>
                <div className="w-full max-h-[800px] hidden md:flex flex-1 shadow-gray-400 shadow-md rounded-[15px] p-[10px]">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}
 
export default UserLayout;