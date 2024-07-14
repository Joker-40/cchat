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
        {/* <SendbirdProvider accessToken='' appId={""} userId={""} nickname={"Prithick Samui"}>
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
        </SendbirdProvider> */}
      </div>
    </div>
  );
}

export default App;
