const sharpBanner = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/images/banner');
const destination = path.resolve(__dirname, 'src/images/banner');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    sharpBanner(`${target}/${image}`)
      .resize(576)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-sm.jpg`));

    sharpBanner(`${target}/${image}`)
      .resize(992)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-md.jpg`));

    sharpBanner(`${target}/${image}`)
      .resize(1440)
      .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
        .slice(0, -1)
        .join('.')}-lg.jpg`));
  });
