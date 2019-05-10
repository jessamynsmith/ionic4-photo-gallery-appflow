# photo-gallery

Ionic V4 tutorial example

This app was created from the instructions at the [Ionic V4 tutorial](https://ionicframework.com/docs/developer-resources/guides/first-app-v4/intro).

### Development


Ensure you have executables on path:

    npm install -g cordova ionic
    
Fork this repo, then clone it:

    git clone https://github.com/<username>/photo-gallery.git

Do each time dependencies have changed:

    npm install

See the app in the browser:

    ionic serve

To see the app on a device, connect a device with USB and run using one of the following commands:

    ionic cordova run android
    ionic cordova run ios -- --buildFlag="-UseModernBuildSystem=0"

### Notes


    ionic cordova plugin add cordova-plugin-file
    npm install --save @ionic-native/file

    ionic cordova plugin add cordova-plugin-zip
    npm install --save @ionic-native/zip
