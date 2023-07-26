import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options.js';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Doing great! Tell me about yourself',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'Having a bad day...',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const getPersonalOptions = (actionProvider) => {
  return [
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
      link: "/#project"
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
      link: "/#skill"
    },
    {
      text: 'Ask me',
      handler: () => actionProvider.handleAskMe(),
      id: 3,
      link: "/#contact"
    },
  ];
};

const config = {
  botName: 'George Cheng',
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm George Cheng. Nice to meet you! How are you today?",
      {
        widget: 'moodOptions',
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      Color: '#F7EDE2'
    },
    chatButton: {
      backgroundColor: '#FAD166',
    },
  },
  customComponents: {
    header: () => <div style={{ backgroundColor: '#FAD166', color: '#171737', padding: "12px", borderRadius: "3px" }}>George's chatbot</div>,
    botAvatar: () => <div class="react-chatbot-kit-chat-bot-avatar"><div class="react-chatbot-kit-chat-bot-avatar-container"><img className="rounded-full" src="/logo4.jpg" width="40" height="40"/> </div></div>,
    userChatMessage: (props) => <userChatMessage {...props} />
  },
  widgets: [
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'personalOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getPersonalOptions}
        />
      ),
    },
  ],
};

export default config;
