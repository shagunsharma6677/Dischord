import RootLayout from '@/layouts/RootLayout';
import ServerSidebar from '@/components/Server/ServerSidebar';
import Chat from '@/components/Chat/Chat';
import ChatSidebar from '@/components/Chat/ChatSidebar';
import './App.css';

function App() {
  return (
    <RootLayout>
      <ServerSidebar />
      <Chat />
      <ChatSidebar />
    </RootLayout>
  );
}

export default App;
