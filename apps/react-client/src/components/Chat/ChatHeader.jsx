import { Avatar, AvatarGroup } from '@nextui-org/react';

const ChatHeader = () => {
  return (
    <div className="w-full h-16 shadow bg-zinc-800/60 shadow-gray-700/30 fcc justify-between px-4">
      <div className="fcc gap-2">
        <div>
          <div># General Chat</div>
          <div className="text-sm text-zinc-500">
            48 Members <span>2 Online</span>
          </div>
        </div>

        <AvatarGroup className="cursor-pointer">
          <Avatar
            className="cursor-pointer"
            size="sm"
            src={'https://nextui-docs-v2.vercel.app/images/album-cover.png'}
          />
          <Avatar
            className="cursor-pointer"
            size="sm"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1105.jpg'
            }
          />
          <Avatar
            className="cursor-pointer"
            size="sm"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1079.jpg'
            }
          />
          <Avatar
            className="cursor-pointer"
            size="sm"
            src={'https://avatars.githubusercontent.com/u/79519650'}
          />
          <Avatar
            className="cursor-pointer"
            size="sm"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg'
            }
          />
          <Avatar
            className="cursor-pointer"
            size="sm"
            src={'https://avatars.githubusercontent.com/u/24959581'}
          />
        </AvatarGroup>
      </div>
      <div className="flex gap-3 text-xl">
        <p>💬</p>
        <p>📹</p>
        <p>📞</p>
      </div>
    </div>
  );
};

export default ChatHeader;
