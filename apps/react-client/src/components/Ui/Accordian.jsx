import { Accordion, AccordionItem } from '@nextui-org/react';
import { AudioLines, Hash, Home, Users, Video } from 'lucide-react';

const Accordian = () => {
  const itemClasses = {
    base: 'py-0 w-full ',
    title: 'font-bold text-small text-zinc-500',
    trigger:
      'px-4 py-0 data-[hover=true]:bg-default-100 bg-default-100 rounded-3xl h-10 flex items-center',
    indicator: 'text-small text-white',
    content: 'text-small px-2 ',
  };

  const defaultContent = '# General';
  return (
    <Accordion
      showDivider={false}
      isCompact
      className="p-2 flex flex-col gap-2 w-full border-none"
      itemClasses={itemClasses}
      selectionMode="multiple"
      defaultExpandedKeys={['1', '2']}
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Getting Started"
        startContent={'🎉'}
        // indicator={<Settings className="h-5 w-5 ml-auto" />}
      >
        <div className="flex flex-col gap-4">
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full justify-start px-7 data-[hover=true]:bg-zinc-700">
            <span>
              <Home size={15} />
            </span>
            <span className="text-sm text-zinc-500">Home</span>
          </div>
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full  justify-start px-7">
            <span>
              <Users size={15} />
            </span>
            <span className="text-sm text-zinc-500">Member</span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Text Channels"
        startContent={'💬'}
        // indicator={<Settings className="h-5 w-5 ml-auto" />}
      >
        <div className="flex flex-col gap-4">
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full  justify-start px-7">
            <span>
              <Hash size={15} />
            </span>
            <span className="text-sm text-zinc-500">General Chat</span>
          </div>
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full  justify-start px-7">
            <span>
              <Hash size={15} />
            </span>
            <span className="text-sm text-zinc-500">Onboarding</span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Audio Channels"
        startContent={'📞'}
        // indicator={<Settings className="h-5 w-5 ml-auto" />}
      >
        <div className="flex flex-col gap-4">
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full  justify-start px-7">
            <span>
              <AudioLines size={15} />
            </span>
            <span className="text-sm text-zinc-500">Audio Chat</span>
          </div>
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full  justify-start px-7">
            <span>
              <AudioLines size={15} />
            </span>
            <span className="text-sm text-zinc-500">Daily Huddle</span>
          </div>
        </div>
      </AccordionItem>

      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        classNames={{ subtitle: 'text-warning' }}
        startContent={'📹'}
        title="Video Channels"
        // indicator={<Settings className="h-5 w-5 ml-auto" />}
      >
        <div className="flex flex-col gap-4">
          <div className="fcc gap-4 hover:bg-default-100 p-1 rounded-full  justify-start px-7">
            <span>
              <Video size={15} />
            </span>
            <span className="text-sm text-zinc-500">Video Call</span>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        startContent={'📢'}
        title="Announcements"
        // indicator={<Settings className="h-5 w-5 ml-auto" />}
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        startContent={'❤️'}
        title="Support"
        // indicator={<Settings className="h-5 w-5 ml-auto" />}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
