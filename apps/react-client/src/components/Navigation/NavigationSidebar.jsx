import { Image } from '@nextui-org/image';
import { Avatar, Badge } from '@nextui-org/react';
import { faker } from '@faker-js/faker';

const NavigationSidebar = () => {
  return (
    <div className="app-navigation-sidebar bg-zinc-900 h-full fixed w-[72px] overflow-hidden ">
      <div className="h-14 flex justify-center items-center border-b border-b-gray-800">
        <div className="w-8">
          <Image
            isBlurred
            className="rounded-full"
            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
            alt="NextUI Album Cover"
          />
        </div>
      </div>
      <div className="fcc py-3 flex flex-col gap-4">
        <Badge color="purple" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="purple"
            radius="full"
            src={faker.image.avatar()}
          />
        </Badge>
        <Badge color="primary" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="primary"
            radius="full"
            src={faker.image.avatar()}
          />
        </Badge>
        <Badge color="secondary" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="secondary"
            radius="full"
            src={faker.image.avatar()}
          />
        </Badge>
        <Badge color="success" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="success"
            radius="full"
            src={faker.image.avatar()}
          />
        </Badge>
        <Badge color="warning" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="warning"
            radius="full"
            src={faker.image.avatar()}
          />
        </Badge>
        <Badge color="danger" shape="circle" showOutline={false}>
          <Avatar
            isBordered
            color="danger"
            radius="full"
            src={faker.image.avatar()}
          />
        </Badge>
      </div>
    </div>
  );
};

export default NavigationSidebar;
