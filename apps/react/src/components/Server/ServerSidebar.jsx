import { Avatar, Badge, Code } from '@nextui-org/react';
import Accordian from '@/components/Ui/Accordian';
import DropdownWrapper from '../Ui/Dropdown';
import { Settings } from 'lucide-react';

const ServerSidebar = () => {
  return (
    <div className="ml-20 w-[600px] bg-zinc-800/60 shadow-gray-700/30  h-[calc(100%-64px)]">
      <DropdownWrapper>
        <div className="flex w-full justify-start  bg-default-100 rounded-full items-center px-4 py-1  gap-4 shadow shadow-gray-700/30 ">
          <div className="fcc">
            <Badge shape="circle" showOutline={false}>
              <Avatar
                size="sm"
                radius="full"
                src={'https://avatars.githubusercontent.com/u/24959581'}
                className="cursor-pointer"
              />
            </Badge>
          </div>
          <div className="flex flex-col text-xs gap-[2px]">
            <div>OG Esport</div>
            <Code className="px-3 py-0" size="sm" radius="lg">
              <span className="text-[10px] text-blue-400 shadow-md">
                @Mormobed01
              </span>
            </Code>
          </div>
          <div className="flex ml-auto">
            <Settings className="w-4 h-4" />
          </div>
        </div>
      </DropdownWrapper>
      <div className="h-full w-full pt-4 px-3">
        <Accordian />
      </div>
    </div>
  );
};

export default ServerSidebar;
