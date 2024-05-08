import { Fragment } from 'react';
import NavigationSidebar from '@/components/Navigation/NavigationSidebar';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="dark text-foreground bg-background h-screen">
        <NavigationSidebar />
      </div>
    </Fragment>
  );
}

export default App;
