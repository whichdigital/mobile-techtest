# Mobile tech test

## Getting started

This is a React Native project.

Building on iOS requires a macOS development environment.

If you do not own a MacBook that is completely fine. However, this means that you will only be able to build on android. Please let us know - we will ensure to only review your test using an android simulator.

### Install node & watchman

brew install node
brew install watchman

### Setting up for iOS Development

#### Install Xcode

You will need to download Xcode from the store: https://apps.apple.com/us/app/xcode/id497799835?mt=12

This is a 12.6 GB installation so may take some time to download.

Open Xcode > Preferences > Locations. Select the most recent version of the command line tools from the dropdown menu.

To install a simulator, open Xcode > Preferences > Components. Select the simulator you wish to use, for example iPhone 13 would be suitable.

#### Install cocoapods

sudo gem install cocoapods

Troubleshooting: try upgrading your ruby version to 3.0.1 and install cocoapods again if you have any problems

### Setting up for Android development

#### Install Java Development Kit

brew tap homebrew/cask-versions
brew install --cask zulu11

#### Install Android Studio

Download from here: https://developer.android.com/studio/index.html

This is roughly 1 GB in size, so may take some time to download.

On the installation wizard, select the following checkbox options:

-   Android SDK
-   Android SDK Platform
-   Android Virtual Device

Open Android Studio > More actions > SDK manager > SDK Platforms > Show Package Details

Look for and expand the Android 12 (S) entry, then make sure the following items are checked:

-   Android SDK Platform 31
-   Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 31.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

#### Configure environment variable

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell.

Verify that ANDROID_SDK_ROOT has been set by running echo $ANDROID_SDK_ROOT and the appropriate directories have been added to your path by running echo $PATH.

### Running this project

npm install - download and install all necessary packages

npm start - starts the server

npm run ios - builds on your open iOS simulator

npm run android - builds on your open android simulator

### Testing and linting

npm run lint - we are using eslint

npm run format - autoformats your code using prettier

npm run test - we are using jest

## The exercise

Goal: Build a magazine home page.

Duration: 1-2hr (after set up is complete)

Description: The screen must have the title "Magazine issues". We would like you to display the data contained in data.json. Between the title and the data, you should create 4 toggles which filter based on cover name. The default is that all 4 are switched on. Switching off a toggle should hide all instances of that issue type. Switching it back on should bring them back. We would like you to include a footnote at the bottom "The full archive is available to Which? members". The whole screen should be scrollable, not just the data.

Constraints: You should consider mobile portrait, mobile landscape and tablet devices. Mobile portrait will have one item per row. Mobile landscape will have 2 items per row. Tablet will have 3 items per row with the content centered. The content should not touch the edge of the screen. You should take care to account for phone notches.

You do not need to use any additional libraries but if you do, you should be able to explain the reasons for your choices in this Readme file.

We are not expecting you to include navigation elements as part of this test.

## Criteria for assessment:

Project layout/structure
Coding style, i.e. your approach not whether you use semicolons or not ;)
Your approach to unit testing/TDD
Maintainability and extensibility
Use of responsive design
Accessibility
Naming conventions used
Meeting the requirements

The test won’t be assessed on design at all, so don’t worry how it looks.

Please update the Readme with justfications for any key decisions on your approach and style.
