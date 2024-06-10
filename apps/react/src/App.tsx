import RootLayout from '@/layouts/RootLayout';
import ServerSidebar from '@/components/Server/ServerSidebar';
import Chat from '@/components/Chat/Chat';
import ChatSidebar from '@/components/Chat/ChatSidebar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '@/components/Auth/Login';
function App() {
  return (
    <RootLayout>
      {/* <ServerSidebar /> */}
      {/* <Chat /> */}

      {/* <ChatSidebar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
