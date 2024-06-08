# AR React

Simple React application, that uses Zappar for Three.js to track a specified image with a red cube mesh.

## Target Image

![alt text](target.png)

### Set your own target image

1. Install Zapworks CLI `npm i -g @zappar/zapworks-cli`
2. Train the target file `zapworks train path/to/my/image` (You should downgrade your node version to <= 16.0.0 to run this command)
3. Place generated .zpt file to src/assets/track-target.zpt
