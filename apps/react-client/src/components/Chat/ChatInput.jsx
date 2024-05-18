import { Mic, Smile } from 'lucide-react';
import Picker from 'emoji-picker-react';

import { useState } from 'react';

const ChatInput = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmojiClick = (event, emojiObject) => {
    setMessage((prevMessage) => prevMessage + event.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="relative bg-black fcc justify-start w-full rounded-full px-2 py-[5px] bg-dark">
      <button className="p-[2px] w-7 absolute rounded-full bg-zinc-800">
        +
      </button>
      <div className="relative left-8 max-w-screen-xl w-full">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={'Type message here...'}
          className=" h-full w-11/12 p-2 text-zinc-500 outline-none border-none shadow-none bg-black placeholder-zinc-600"
          type="text"
        />
      </div>

      <div className="absolute right-4 flex gap-2">
        <Mic className="cursor-pointer text-zinc-500" size={21} />

        <Smile
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="cursor-pointer text-zinc-500"
          size={21}
        />
      </div>
      {showEmojiPicker && (
        <div className="absolute bottom-14 right-4 z-10">
          <Picker
            width={'350px'}
            height={'500px'}
            Theme={'dark'}
            className="scroll-my-0"
            onEmojiClick={handleEmojiClick}
          />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
