import { Avatar, Badge, Image } from '@nextui-org/react';

const NavigationSidebar = () => {
  return (
    <div className="app-navigation-sidebar shadow shadow-gray-700/30  hidden sm:flex flex-col bg-neutral-800 h-full fixed inset-y-0 z-30 w-20 overflow-hidden ">
      <div className="h-16 flex justify-center items-center shadow shadow-gray-700/30 ">
        <div className="w-8">
          <Image
            isBlurred
            className="rounded-full cursor-pointer"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
          />
        </div>
      </div>
      <div className="fcc py-5 flex flex-col gap-5">
        <Badge color="purple" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="primary"
            radius="full"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1105.jpg'
            }
            className="cursor-pointer"
          />
        </Badge>
        <Badge color="primary" shape="circle" showOutline={false}>
          <Avatar
            radius="full"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1079.jpg'
            }
            className="cursor-pointer"
          />
        </Badge>
        <Badge shape="circle" showOutline={false}>
          <Avatar
            radius="full"
            src={'https://avatars.githubusercontent.com/u/79519650'}
            className="cursor-pointer"
          />
        </Badge>
        <Badge shape="circle" showOutline={false}>
          <Avatar
            radius="full"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/595.jpg'
            }
            className="cursor-pointer"
          />
        </Badge>
        <Badge shape="circle" showOutline={false}>
          <Avatar
            radius="full"
            src={
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg'
            }
            className="cursor-pointer"
          />
        </Badge>
      </div>
    </div>
  );
};

export default NavigationSidebar;
