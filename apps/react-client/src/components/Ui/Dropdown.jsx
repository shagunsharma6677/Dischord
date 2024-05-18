import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from '@nextui-org/react';
import { PlusCircle, Settings, UserPlus, Users } from 'lucide-react';

const DropdownWrapper = ({ children }) => {
  return (
    <Dropdown backdrop="blur" className="w-[320px] p-1 bg-neutral-950">
      <DropdownTrigger>
        <div className="px-4 h-16 fcc">{children}</div>
      </DropdownTrigger>
      <DropdownMenu
        variant="solid"
        aria-label="Static Actions"
        className="bg-neutral-950 text-foreground-50 w-full"
      >
        <DropdownSection title="Actions" showDivider>
          <DropdownItem
            endContent={<UserPlus className="h-4 w-4 ml-auto" />}
            key="new"
            color="primary"
            className="text-primary"
          >
            Invite People
          </DropdownItem>
          <DropdownItem
            endContent={<Settings className="h-4 w-4 ml-auto" />}
            key="copy"
          >
            Server Settings
          </DropdownItem>
          <DropdownItem
            endContent={<Users className="h-4 w-4 ml-auto" />}
            key="edit"
          >
            Manage Members
          </DropdownItem>
          <DropdownItem
            endContent={<PlusCircle className="h-4 w-4 ml-auto" />}
            key="edit"
          >
            Create Channels
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Delete" showDivider>
          <DropdownItem
            endContent={<PlusCircle className="h-4 w-4 ml-auto" />}
            key="edit"
            className="text-danger"
            color="danger"
          >
            Delete Channels
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownWrapper;
