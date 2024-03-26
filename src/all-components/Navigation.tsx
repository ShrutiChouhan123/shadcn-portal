import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export const Navigation = () => {
  return (
    <>
      <div>
        <Menubar className="w-full bg-blue-900 h-24">
          <div className="inline-flex gap-10">
          <div className="ml-10">
          <MenubarMenu>
              <MenubarTrigger className="bg-white">Test/Calls</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Tests
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
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
           </div>
            <div className="ml-10">
            <MenubarMenu>
              <MenubarTrigger className="bg-white">Attendence</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            </div>
           <div className="ml-10">
           <MenubarMenu>
              <MenubarTrigger className="bg-white">
                Employee Profile
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
           </div>
          </div>
        </Menubar>
      </div>
    </>
  );
};
