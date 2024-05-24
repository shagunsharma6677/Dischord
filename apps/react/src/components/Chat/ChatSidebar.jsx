import {
  Ellipsis,
  MessageCircleMore,
  ReceiptText,
  Settings,
  Users,
} from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Snippet,
  User,
} from '@nextui-org/react';

const ChatSidebar = () => {
  return (
    <div
      style={{ maxHeight: 'calc(100% - 64px)' }}
      className="w-[640px] bg-zinc-800/60"
    >
      <div className="w-full h-16 shadow bg-zinc-800/60 shadow-gray-700/30 fcc px-4">
        <div className="ml-auto">
          <Settings />
        </div>
      </div>
      <div className="h-full px-2">
        <div className="fcc flex-col gap-2 pt-4">
          <Badge shape="circle" showOutline={false}>
            <Avatar
              size="lg"
              radius="full"
              src={'https://avatars.githubusercontent.com/u/24959581'}
              className="cursor-pointer"
            />
          </Badge>
          <div className="text-sm">OG Esport</div>
          <div className="text-sm px-1 space-y-2">
            <div className="flex justify-between rounded-full p-1 px-4 bg-default-100">
              <div className="fcc gap-2">
                <span>
                  <ReceiptText className="w-4 h-4" />
                </span>
                <span>Details</span>
              </div>
              <div>
                <Ellipsis size={20} />
              </div>
            </div>
            <div className="text-zinc-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              culpa soluta repellendus quibusdam nemo voluptatum aliquam ratione
              sint quidem labore.
            </div>
          </div>
        </div>
        <div className="fcc py-4">
          <div>
            <Snippet symbol="" size="sm">
              @OG_Esport/mabarsantuy
            </Snippet>
          </div>
        </div>
        <div className="border border-zinc-700/55"></div>

        <Accordion
          showDivider={false}
          isCompact
          itemClasses={{
            base: 'py-0 w-full ',
            title: 'font-bold text-small text-zinc-500',
            trigger:
              'px-4 py-0 data-[hover=true]:bg-default-100 bg-default-100 rounded-3xl h-10 flex items-center',
            indicator: 'text-small text-white',
            content: 'text-small px-2 ',
          }}
          className="p-2 flex flex-col gap-2 w-full border-none"
          selectionMode="multiple"
          defaultExpandedKeys={['1']}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Members (15)"
            startContent={<Users className="h-5 w-5" />}
          >
            <div className="py-4 px-1 space-y-4 overflow-y-auto ">
              <div className="fcc justify-between">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
                  }}
                />
                <div className="flex gap-3">
                  <button className="px-3 rounded-full text-sm bg-green-600">
                    <span>On</span>
                  </button>
                  <MessageCircleMore />
                </div>
              </div>

              <div className="fcc justify-between">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: 'https://avatars.githubusercontent.com/u/79519650',
                  }}
                />
                <div className="flex gap-3">
                  <button className="px-3 rounded-full text-sm bg-green-600">
                    <span>On</span>
                  </button>
                  <MessageCircleMore />
                </div>
              </div>
              <div className="fcc justify-between">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: 'https://avatars.githubusercontent.com/u/24959581',
                  }}
                />
                <div className="flex gap-3">
                  <button className="px-3 rounded-full text-sm bg-green-600">
                    <span>On</span>
                  </button>
                  <MessageCircleMore />
                </div>
              </div>
              <div className="fcc justify-between">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg',
                  }}
                />
                <div className="flex gap-3">
                  <button className="px-3 rounded-full text-sm bg-green-600">
                    <span>On</span>
                  </button>
                  <MessageCircleMore />
                </div>
              </div>
              <div className="fcc justify-between ">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1105.jpg',
                  }}
                />
                <div className="flex gap-3">
                  <button className="px-3 rounded-full text-sm bg-green-600">
                    <span>On</span>
                  </button>
                  <MessageCircleMore />
                </div>
              </div>

              <div className="fcc justify-between">
                <User
                  name="Jane Doe"
                  avatarProps={{
                    src: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/624.jpg',
                  }}
                />
                <div className="flex gap-3">
                  <button className="px-3 rounded-full text-sm bg-green-600">
                    <span>On</span>
                  </button>
                  <MessageCircleMore />
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ChatSidebar;
