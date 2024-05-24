import ChatMessage from './ChatMessage';

const ChatBox = () => {
  return (
    <div
      style={{ maxHeight: 'calc(100% - 84px)' }}
      className=" h-full overflow-y-auto p-3 px-4 flex gap-6 flex-col"
    >
      <ChatMessage className={''} />
      <ChatMessage className={''} />
      <ChatMessage className={''} />
      <ChatMessage className={''} />
    </div>
  );
};

export default ChatBox;
