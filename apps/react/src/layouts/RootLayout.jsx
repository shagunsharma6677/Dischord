import NavigationSidebar from '@/components/Navigation/NavigationSidebar';
import NavigationBottomBar from '@/components/Navigation/NavigationBottomBar';

const RootLayout = ({ children }) => {
  return (
    <div className="dark text-foreground bg-zinc-950 h-screen">
      {/* <NavigationSidebar /> */}
      {/* <NavigationBottomBar /> */}
      <div className="flex h-full overflow-hidden">{children}</div>
    </div>
  );
};

export default RootLayout;
