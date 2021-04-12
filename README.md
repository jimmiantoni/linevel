# Linevel

How to use?
Download or clone this repo.

Install dependencies.

1. npm install
// or
2. yarn install

Before running project Android / iOS 
1. cd android && ./gradlew clean / 
or
2. cd ios && pod install

Run project on iOS / Android.
1. react-native start
2. react-native run-android / react-native run-ios

Build Project Android / iOS
- Android
1. cd android && ./gradlew clean && ./gradlew assembleRelease && cd ..   —> .apk 
or
2. cd android && ./gradlew clean && ./gradlew bundleRelease && cd ..   —> .aab