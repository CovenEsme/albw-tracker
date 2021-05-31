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
        [Helper.GEAR.PROGRESSIVE_MAIL]: {
          0: import('../assets/gear/mail-0.png'),
          1: import('../assets/gear/mail-1.png'),
          2: import('../assets/gear/mail-2.png'),
          3: import('../assets/gear/mail-3.png'),
        },
        [Helper.GEAR.PROGRESSIVE_SHIELD]: {
          0: import('../assets/gear/shield-0.png'),
          1: import('../assets/gear/shield-1.png'),
          2: import('../assets/gear/shield-2.png'),
        },
        [Helper.GEAR.PROGRESSIVE_BRACELET]: {
          0: import('../assets/gear/bracelet-0.png'),
          1: import('../assets/gear/bracelet-1.png'),
          2: import('../assets/gear/bracelet-2.png'),
        },
        [Helper.GEAR.SAGE_GULLEY]: {
          0: import('../assets/gear/sage-gulley-0.png'),
          1: import('../assets/gear/sage-gulley-1.png'),
        },
        [Helper.GEAR.SAGE_OREN]: {
          0: import('../assets/gear/sage-oren-0.png'),
          1: import('../assets/gear/sage-oren-1.png'),
        },
        [Helper.GEAR.SAGE_ROSSO]: {
          0: import('../assets/gear/sage-rosso-0.png'),
          1: import('../assets/gear/sage-rosso-1.png'),
        },
        [Helper.GEAR.SAGE_IMPA]: {
          0: import('../assets/gear/sage-impa-0.png'),
          1: import('../assets/gear/sage-impa-1.png'),
        },
        [Helper.GEAR.SAGE_IRENE]: {
          0: import('../assets/gear/sage-irene-0.png'),
          1: import('../assets/gear/sage-irene-1.png'),
        },
        [Helper.GEAR.SAGE_OSFALA]: {
          0: import('../assets/gear/sage-osfala-0.png'),
          1: import('../assets/gear/sage-osfala-1.png'),
        },
        [Helper.GEAR.SAGE_SERES]: {
          0: import('../assets/gear/sage-seres-0.png'),
          1: import('../assets/gear/sage-seres-1.png'),
        },
        [Helper.GEAR.PENDANT_OF_POWER]: {
          0: import('../assets/gear/pendant-of-power-0.png'),
          1: import('../assets/gear/pendant-of-power-1.png'),
        },
        [Helper.GEAR.PENDANT_OF_WISDOM]: {
          0: import('../assets/gear/pendant-of-wisdom-0.png'),
          1: import('../assets/gear/pendant-of-wisdom-1.png'),
        },
        [Helper.GEAR.PENDANT_OF_COURAGE]: {
          0: import('../assets/gear/pendant-of-courage-0.png'),
          1: import('../assets/gear/pendant-of-courage-1.png'),
        },
        [Helper.GEAR.PROGRESSIVE_BRACELET]: {
          0: import('../assets/gear/bracelet-0.png'),
          1: import('../assets/gear/bracelet-1.png'),
          2: import('../assets/gear/bracelet-2.png'),
        },
        [Helper.GEAR.PROGRESSIVE_MITT]: {
          0: import('../assets/gear/mitt-0.png'),
          1: import('../assets/gear/mitt-1.png'),
          2: import('../assets/gear/mitt-2.png'),
        },
        [Helper.GEAR.PEGASUS_BOOTS]: {
          0: import('../assets/gear/boots-0.png'),
          1: import('../assets/gear/boots-1.png'),
        },
        [Helper.GEAR.ZORA_FLIPPERS]: {
          0: import('../assets/gear/flippers-0.png'),
          1: import('../assets/gear/flippers-1.png'),
        },
        [Helper.GEAR.BEE_BADGE]: {
          0: import('../assets/gear/badge-0.png'),
          1: import('../assets/gear/badge-1.png'),
        },
        [Helper.GEAR.STAMINA_SCROLL]: {
          0: import('../assets/gear/scroll-0.png'),
          1: import('../assets/gear/scroll-1.png'),
        },
        [Helper.GEAR.PIECE_OF_HEART]: {
          0: import('../assets/gear/heart-0.png'),
          1: import('../assets/gear/heart-1.png'),
          2: import('../assets/gear/heart-2.png'),
          3: import('../assets/gear/heart-3.png'),
        },
      },
      RUPEE: import('../assets/gear/rupee.png'),
      MAIAMAI: import('../assets/gear/maiamai.png'),
      MONSTER_TAIL: import('../assets/gear/tail.png'),
      MONSTER_HORN: import('../assets/gear/horn.png'),
      MONSTER_GUTS: import('../assets/gear/guts.png'),
      MASTER_ORE: import('../assets/gear/ore.png'),

      GEAR_OVERLAY: import('../assets/gear-overlay.png'),
    };
  }
}

export default Images;
