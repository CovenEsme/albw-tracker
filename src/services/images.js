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
        [Helper.GEAR.SMOOTH_GEM]: {
          0: import('../assets/gear/gem-0.png'),
          1: import('../assets/gear/gem-1.png'),
        },
        [Helper.GEAR.POUCH]: {
          0: import('../assets/gear/pouch-0a.png'),
          1: import('../assets/gear/pouch-1a.png'),
        },
        [Helper.GEAR.BELL]: {
          0: import('../assets/gear/bell-0.png'),
          1: import('../assets/gear/bell-1.png'),
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

      ITEMS: {
        [Helper.ITEMS.PROGRESSIVE_LAMP]: {
          0: import('../assets/items/lamp-0.png'),
          1: import('../assets/items/lamp-1.png'),
          2: import('../assets/items/lamp-2.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_BOW]: {
          0: import('../assets/items/bow-0.png'),
          1: import('../assets/items/bow-1.png'),
          2: import('../assets/items/bow-2.png'),
          3: import('../assets/items/bow-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_TROD]: {
          0: import('../assets/items/trod-0.png'),
          1: import('../assets/items/trod-1.png'),
          2: import('../assets/items/trod-2.png'),
          3: import('../assets/items/trod-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_HAMMER]: {
          0: import('../assets/items/hammer-0.png'),
          1: import('../assets/items/hammer-1.png'),
          2: import('../assets/items/hammer-2.png'),
          3: import('../assets/items/hammer-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_BOMBS]: {
          0: import('../assets/items/bombs-0.png'),
          1: import('../assets/items/bombs-1.png'),
          2: import('../assets/items/bombs-2.png'),
          3: import('../assets/items/bombs-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_BOOMERANG]: {
          0: import('../assets/items/boomerang-0.png'),
          1: import('../assets/items/boomerang-1.png'),
          2: import('../assets/items/boomerang-2.png'),
          3: import('../assets/items/boomerang-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_HOOKSHOT]: {
          0: import('../assets/items/hookshot-0.png'),
          1: import('../assets/items/hookshot-1.png'),
          2: import('../assets/items/hookshot-2.png'),
          3: import('../assets/items/hookshot-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_IROD]: {
          0: import('../assets/items/irod-0.png'),
          1: import('../assets/items/irod-1.png'),
          2: import('../assets/items/irod-2.png'),
          3: import('../assets/items/irod-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_SROD]: {
          0: import('../assets/items/srod-0.png'),
          1: import('../assets/items/srod-1.png'),
          2: import('../assets/items/srod-2.png'),
          3: import('../assets/items/srod-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_FROD]: {
          0: import('../assets/items/frod-0.png'),
          1: import('../assets/items/frod-1.png'),
          2: import('../assets/items/frod-2.png'),
          3: import('../assets/items/frod-3.png'),
        },
        [Helper.ITEMS.PROGRESSIVE_NET]: {
          0: import('../assets/items/net-0.png'),
          1: import('../assets/items/net-1.png'),
          2: import('../assets/items/net-2.png'),
        },

        [Helper.ITEMS.HINT_GLASSES]: {
          0: import('../assets/items/hint-glasses-0.png'),
          1: import('../assets/items/hint-glasses-1.png'),
        },
        [Helper.ITEMS.BOW_OF_LIGHT]: {
          0: import('../assets/items/bow-of-light-0.png'),
          1: import('../assets/items/bow-of-light-1.png'),
        },
        [Helper.ITEMS.SCOOT_FRUIT]: {
          0: import('../assets/items/scoot-fruit-0.png'),
          1: import('../assets/items/scoot-fruit-1.png'),
        },
        [Helper.ITEMS.FOUL_FRUIT]: {
          0: import('../assets/items/foul-fruit-0.png'),
          1: import('../assets/items/foul-fruit-1.png'),
        },

        [Helper.ITEMS.NOTE_BOTTLE]: {
          0: import('../assets/items/note-bottle-0.png'),
          1: import('../assets/items/note-bottle-1.png'),
          2: import('../assets/items/note-bottle-2.png'),
        },
        [Helper.ITEMS.BOTTLE_ONE]: {
          0: import('../assets/items/bottle-0.png'),
          1: import('../assets/items/bottle-1.png'),
        },
        [Helper.ITEMS.BOTTLE_TWO]: {
          0: import('../assets/items/bottle-0.png'),
          1: import('../assets/items/bottle-1.png'),
        },
        [Helper.ITEMS.BOTTLE_THREE]: {
          0: import('../assets/items/bottle-0.png'),
          1: import('../assets/items/bottle-1.png'),
        },
        [Helper.ITEMS.BOTTLE_FOUR]: {
          0: import('../assets/items/bottle-0.png'),
          1: import('../assets/items/bottle-1.png'),
        },
      },

      GEAR_OVERLAY: import('../assets/gear/gear-overlay.png'),
      ITEMS_OVERLAY: import('../assets/items/items-overlay.png'),
      LABEL: import('../assets/gear/gear-label.png'),
    };
  }
}

export default Images;
