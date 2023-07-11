import { Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";

const API_KEY = "vnfrejsn6scx";
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {
  useEffect(() => {
    // connect the user to stream
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "testUser123",
          name: "Test",
          image: "https://i.imgur.com/fR9Jz14.png", //optional
        },
        client.devToken("testUser123")
      );

      const channel = client.channel("livestream", "public", {
        name: "Public",
        // image: "https://i.imgur.rcom/fR9Jz14.png",
      });
      await channel.create();
    };
    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, []);
  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Messages" }} />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
