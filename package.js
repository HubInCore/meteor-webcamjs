Package.describe({
  name: "emdagon:webcamjs",
  version: "0.0.1",
  summary: "WebcamJS wrapper for Meteor",
  git: "https://github.com/emdagon/meteor-webcamjs.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.export("webcam");
  api.addFiles([
    "webcamjs/webcam.js",
    "webcamjs/webcam.swf"
  ], 'client');
});
