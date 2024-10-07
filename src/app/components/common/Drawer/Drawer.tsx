import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";
import { RxCross2 } from "react-icons/rx";
import AccountDetails from "../../AccountDetails";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  runData: {
    modal: string;
    runTime: string;
    type: string;
    devices: string;
  } | null;
}
const CustomDrawer: React.FC<DrawerProps> = ({ isOpen, onClose ,runData}) => {
  console.log(runData,"data")
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      placement="right"
      width={600}
    >
      <div className="bg-[#1C2124] h-screen text-white">
        <div className="p-8 flex justify-between items-center">
          <h1 className="font-bold text-2xl mb-4">Account Details</h1>
          <div>
            <RxCross2
              className="font-bold cursor-pointer"
              size={20}
              onClick={onClose}
            />
          </div>
        </div>
        <div>
          <AccountDetails name={runData?.modal}/>
        </div>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
