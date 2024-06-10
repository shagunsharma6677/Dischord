import { NavigationSidebar } from '../../components/navigation/navigation-sidebar';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-full w-[72px] hidden fixed inset-y-0 md:flex flex-col z-30 ">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
};

export default MainLayout;
