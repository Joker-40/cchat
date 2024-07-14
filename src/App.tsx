import './App.css';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider'
import GroupChannelList from '@sendbird/uikit-react/GroupChannelList'
import GroupChannel from '@sendbird/uikit-react/GroupChannel'
import React from 'react';

function App() {
  const [currentChannelUrl, setCurrentChannelUrl] = React.useState<string>()
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div className="App">
        <SendbirdProvider accessToken='c48b6eb862ac46d735d299fb6553efad5a64b094' appId={"FBC2144A-9257-4C73-819B-60A6EA36F39E"} userId={"sendbird_desk_agent_id_abbafcea-e238-43c2-9ae9-bf1242aca504"} nickname={"Prithick Samui"}>
          <>
            <div className="sendbird-app__channellist-wrap">
              <GroupChannelList
                selectedChannelUrl={currentChannelUrl}
                onChannelCreated={(channel) => {
                  setCurrentChannelUrl(channel.url)
                }}
                onChannelSelect={(channel) => {
                  setCurrentChannelUrl(channel?.url)
                }}
              />
            </div>
            <div className="sendbird-app__conversation-wrap">
              <GroupChannel channelUrl={currentChannelUrl!} />
            </div>
          </>
        </SendbirdProvider>
      </div>
    </div>
  );
}

export default App;
