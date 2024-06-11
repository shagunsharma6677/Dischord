import Chat from '@/components/Chat/Chat';
import ChatSidebar from '@/components/Chat/ChatSidebar';
import ServerSidebar from '@/components/Server/ServerSidebar';
import RootLayout from '@/layouts/RootLayout';
import React from 'react';

const Dashboard = () => {
  return (
    <RootLayout>
      <ServerSidebar />
      <Chat />
      <ChatSidebar />
    </RootLayout>
  );
};

export default Dashboard;
