import { Headphones, LogOut, MessageCircleMore, Mic } from 'lucide-react';
import ChatInput from '@/components/Chat/ChatInput';
import { User } from '@nextui-org/react';

const NavigationBottomBar = () => {
  return (
    <div className="w-full fixed flex bottom-0 z-50 h-16 bg-neutral-800 shadow shadow-gray-700/30 ">
      <div className="w-[140px] h-full fcc">
        <div className="rounded-full bg-black ">
          <LogOut className="m-2 cursor-pointer" color="gray" />
        </div>
      </div>
      <div className="w-[600px] h-full z-60" />
      <div className="w-full px-4 flex items-center">
        <ChatInput />
      </div>
      <div className="w-[640px] z-50 bg-neutral-800">
        <div className="py-4 px-1 space-y-4 overflow-y-auto ">
          <div className="fcc justify-between px-5">
            <User
              name="Jane Doe"
              avatarProps={{
                src: 'https://nextui.org/images/album-cover.png',
              }}
            />
            <div className="flex gap-2">
              <button className="px-3 rounded-full text-sm bg-green-600">
                <span>On</span>
              </button>
              <MessageCircleMore className="w-5 h-5" />
              <Headphones className="w-5 h-5" />
              <Mic className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBottomBar;
