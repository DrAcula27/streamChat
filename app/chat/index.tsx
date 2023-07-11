import { useState } from "react";
import { Channel as ChannelType } from "stream-chat";
import {
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

const ChatScreen = () => {
  const [channel, setChannel] = useState<ChannelType>();

  if (channel) {
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    );
  }

  return <ChannelList onSelect={(channel) => setChannel(channel)} />;
};

export default ChatScreen;
