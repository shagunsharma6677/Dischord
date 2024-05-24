import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';

const Chat = () => {
  return (
    <div style={{ maxHeight: 'calc(100% - 64px)' }} className="w-full h-full">
      <ChatHeader />
      <ChatBox />
    </div>
  );
};

export default Chat;
