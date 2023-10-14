declare module 'react-native-gravatar' {
    export interface GravatarProps {
      options: {
        email: string;
        parameters?: {};
        
        secure:Boolean;
      };
      style?: {};
    }
  
    export default class Gravatar extends React.Component<GravatarProps> {}
  }
  