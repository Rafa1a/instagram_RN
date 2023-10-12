import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MyComponent = () => {
  return (
  
      <WebView
        source={{
          html: `
            <html>
              <head>
                <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                  rel="stylesheet"
                />
              </head>
              <body>
                <div id="app">
                  <p style="font-family: 'Roboto', sans-serif; font-size: 20px;">
                    Hello, Google Fonts!
                  </p>
                </div>
              </body>
            </html>
          `,
        }}
      />
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
