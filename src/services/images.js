import _ from 'lodash';

import Helper from './helper';

class Images {
  static get IMAGES() {
    return this.images;
  }

  static async importImages() {
    this.images = {};

    await this._resolveImports(this._IMAGE_IMPORTS);
  }

  static async _resolveImports(imageImports, keys = []) {
    await Promise.all(
      _.map(
        imageImports,
        (importValue, importKey) => this._resolveImportValue(importValue, keys, importKey),
      ),
    );
  }

  static async _resolveImportValue(value, keys, newKey) {
    const updatedKeys = _.concat(keys, newKey);

    if (_.isPlainObject(value)) {
      await this._resolveImports(value, updatedKeys);
    } else {
      await this._loadImage(value, updatedKeys);
    }
  }

  static async _loadImage(importPromise, imageKeys) {
    const imageImport = await importPromise;
    _.set(this.images, imageKeys, imageImport.default);
  }

  static get _IMAGE_IMPORTS() {
    return {
      GEAR: {
        [Helper.GEAR.PROGRESSIVE_SWORD]: {
          0: import('../assets/gear/sword-0.png'),
          1: import('../assets/gear/sword-1.png'),
          2: import('../assets/gear/sword-2.png'),
          3: import('../assets/gear/sword-3.png'),
          4: import('../assets/gear/sword-4.png'),
        },
      },
      GEAR_OVERLAY: import('../assets/gear-overlay.png'),
    };
  }
}

export default Images;
