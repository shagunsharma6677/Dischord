import { Avatar, Badge, cn } from '@nextui-org/react';

const ChatMessage = ({ className }) => {
  return (
    <div className={cn('flex', className)}>
      <div className="w-full  flex gap-3">
        <div className="flex justify-between items-start p-2">
          <div className="flex gap-2">
            <Badge
              content=""
              color="success"
              shape="circle"
              placement="bottom-right"
            >
              <Avatar
                radius="full"
                src={'https://avatars.githubusercontent.com/u/24959581'}
              />
            </Badge>
          </div>
        </div>
        <div className="flex w-full flex-col gap-1 ">
          <div className="flex gap-3">
            <div>Orep</div>
            <div className="text-zinc-500 font-semibold">12:05</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum
            laboriosam of Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Dolor accusamus provident aspernatur officiis aperiam sit
            eius! Asperiores rerum recusandae delectus error placeat modi,
            consequatur non eligendi necessitatibus dolorem quas?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
