import Sidebar from "../components/Sidebar/Sidebar";

const UserLayout = ({children}) => {
    return (
         <div className="w-screen h-[calc(100vh-175px)] md:h-[calc(100vh-100px)] overflow-y-scroll md:scrollbar-none relative xl:flex xl:justify-center">
           <div className="w-full h-full md:flex md:flex-row-reverse">
                {children}
                <div className="hidden md:flex flex-1">
                    <Sidebar/>
                </div>
           </div>
        </div>
    );
}
 
export default UserLayout;