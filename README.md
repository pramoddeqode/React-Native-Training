# React-Native-Training

Q1. What is React?

React is a JavaScript library created by Facebook
React is a User Interface (UI) library
React is a tool for building UI components

React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.

Q2. How React is different from other Javascript Frameworks?

Flexibility, Compared to other frontend frameworks, the React code is easier to maintain and is flexible due to its modular structure. This flexibility, in turn, saves huge amount of time and cost to businesses.
The main feature of React. js that distinguishes it from other popular JavaScript frameworks is flexibility. You can grab a library and use it to display a simple page or a view, but you can also combine React. js with other tools and use it as a framework that will lay the foundation for a complex application.

Q3. Whats is the relationship between react and react native.

React is an open-source JS library for building the UIs for web applications; besides, React Native is used to build rich mobile UI from declarative components using only JavaScript. Both React and React Native are ruling the industry and are widely used for mobile and web applications. In React JS, React is the base abstraction of React DOM for the web platform, while with React Native, React is still the base abstraction but of React Native. So the syntax and workflow remain similar, but the components are different.

Q4. How does react native code compile and execute?
  Compilation:-
  The uniqueness of React Native is a single JavaScript codebase used for both platforms. React Native compiles the JavaScript code to native components, thus, using platform-specific APIs and modules. By using such native components as Images, Text, and View as building blocks, software developers can create new ones.
Execution:-
When a React Native application is launched, it spawns up the following threading queues. Main thread (Native Queue) - This is the main thread which gets spawned as soon as the application launches. It loads the app and starts the JS thread to execute the Javascript code.

Q5 How React Reconciliation works?

The reconciliation process makes React work faster. Reconciliation is the process through which React updates the Browser DOM.

Important concepts behind the working of the Reconciliation process are:

Virtual DOM  
Diffing Algorithmc

Q6. Javascript vs typescript
TypeScript is known as an Object-oriented programming language whereas JavaScript is a prototype based language.
TypeScript has a feature known as Static typing but JavaScript does not support this feature.
TypeScript supports Interfaces but JavaScript does not.

 TypeScript is an object-oriented programming language developed by Microsoft Corporation, whereas JavaScript is the programming language for the web. TypeScript is an open-source language to build large-scale web apps, whereas JavaScript is a server-side programming language that helps to develop interactive web pages.

Q7.
Step 1: Install Expo CLI  Step 2: Install Xcode (for Mac OS) Step 
3: Install Android Studio. Step 
4: Install IDE.
...
Make sure the boxes next to all of the following are checked:
Android SDK.
Android SDK Platform.
Android Virtual Device.

Before creating a new Expo app, you have to make sure that:
Expo CLI is installed on your development machine
Expo Go app is installed on your iOS or Android physical device or emulator
 create the App by this command:
npx create-expo-app my-app
cd my-app

Starting the development server
Start the development server by running the following command:

expo start

Opening the app on your phone/tablet
To open the app:
On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal.
On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.

Q8. Hot reload and live reload

Live reloading will reload the whole app and completely reinitialize the state. Hot reloading only reloads the file that changed. 

Setup react native 
install node,jdk and android studio,
While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

Android SDK
Android SDK Platform
Android Virtual Device
Then, click "Next" to install all of these components.
Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.
Install the Android SDK,

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 12 (S) entry, then make sure the following items are checked:

Android SDK Platform 31
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 31.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

Configure the ANDROID_SDK_ROOT environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

export ANDROID_SDK_ROOT=$HOME/Library/Android/Sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

Create project by npx react-native init AwesomeProject command

Using a physical device
If you have a physical Android device, you can use it for development in place of an AVD by plugging it in to your computer using a USB cable and following the instructions here.

Using a virtual device
If you use Android Studio to open ./AwesomeProject/android, you can see the list of available Android Virtual Devices (AVDs) by opening the "AVD Manager" from within Android Studio. 

To start Metro, run npx react-native start inside your React Native project folder:

npx react-native start
and run project
npx react-native run-android

 React_Native_Assignment_Day_3

Q1 Which is better for react native app - Javascript vs typescript
 Typescript still provides great value to your project. You will save many hours of debugging time by using TypeScript. Therefore, you should definitely use TypeScript in your React Native Project.03

Q2. Can I do native changes in case of expo?

The tradeoff is that Expo Go does not allow you to add custom native code, you can only use native modules built into the Expo SDK. There are many great libraries available outside of the Expo SDK, and you may even want to build your own native library.

Q3. Can we convert a react expo app to react native CLI?
yes  we  can convert a react expo app to react native CLI?
 i have to install exp using npm i -g expo & then used expo eject to detach the project Also I added some fields in app.json for it to work as follows

{
  "expo": {
    "name": "Project",
    "slug": "project",
    "sdkVersion": "18.0.0",
    "privacy": "public",
    "android": {
      "package": "com.example.project"
    }
 }
}

Q4. What are the limitations of react native expo? 
  Not all iOS and Android APIs are availabl
  It requires Android Studio and XCode to run the projects. You can't build an app for iOS without having a Mac. There is no need to connect the device via USB to use for testing. There is no need to import fonts by hand in XCode.