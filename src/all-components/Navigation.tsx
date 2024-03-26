import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <div className="">
        <Menubar className="w-full bg-blue-900 h-24 flex justify-end">
          <div className="inline-flex gap-10">
          <div className="ml-10">
              <MenubarMenu>
                <MenubarTrigger className="bg-white"><Link to={'/login'}>Login</Link></MenubarTrigger>
              </MenubarMenu>
            </div>

            <div className="ml-10">
              <MenubarMenu>
                <MenubarTrigger className="bg-white">Test/Calls</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link to={"/test"}> Tests</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Calls</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
            <div className="ml-10">
              <MenubarMenu>
                <MenubarTrigger className="bg-white">Projects</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Project Updates</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
            <div className="ml-10">
              <MenubarMenu>
                <MenubarTrigger className="bg-white">Attendence</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>My Daily Status</MenubarItem>
                  <MenubarItem>Send Daily Status</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>My Leaves</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Holiday</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
            <div className="ml-10">
              <MenubarMenu>
                <MenubarTrigger className="bg-white">
                  Employee Profile
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Change Status</MenubarItem>
                  <MenubarItem>Edit Profile</MenubarItem>
                  <MenubarItem>Edit Personal Info</MenubarItem>
                  <MenubarItem>Edit Skills</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Descussion Desk</MenubarItem>
                  <MenubarItem>Help Desk</MenubarItem>
                  <MenubarItem>Logout</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </div>
          </div>
        </Menubar>
      </div>
    </>
  );
};
