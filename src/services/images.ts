import _ from "lodash";

import Helper from "./helper";

type ImageType = Promise<typeof import("*.png")>;

class Images {
  static _images = {};

  static get IMAGES(): Record<string, string> {
    return this._images;
  }

  static getImage(obtainableName: string, obtainableCount: number): string {
    const obtainableImages = _.get(this._images, [obtainableName]);

    return _.get(obtainableImages, obtainableCount);
  }

  static async importImages(): Promise<void> {
    await Promise.all(
      _.map(
        this._IMAGE_IMPORTS,
        (value, key) => this._importSubSet(value, key),
      ),
    );
  }

  static async _importSubSet(arrayOfImages: ImageType[],
                             key: string): Promise<void> {
    await Promise.all(
      _.map(arrayOfImages,
            (imagePromise, index) => this._loadImage(imagePromise, key, index),
      ),
    );
  }

  static async _loadImage(importPromise: ImageType, imageKey: string,
                          imageIndex: number): Promise<void> {
    const updatedKeys: string[] = [imageKey, imageIndex.toString()];
    const imageImport = await importPromise;

    _.set(this._images, updatedKeys, imageImport.default);
  }

  static get _IMAGE_IMPORTS(): Record<string, ImageType[]> {
    return {
      [Helper.OBTAINABLES.PROGRESSIVE_SWORD]: [
        import("../assets/gear/sword-0.png"),
        import("../assets/gear/sword-1.png"),
        import("../assets/gear/sword-2.png"),
        import("../assets/gear/sword-3.png"),
        import("../assets/gear/sword-4.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_MAIL]: [
        import("../assets/gear/mail-0.png"),
        import("../assets/gear/mail-1.png"),
        import("../assets/gear/mail-2.png"),
        import("../assets/gear/mail-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_SHIELD]: [
        import("../assets/gear/shield-0.png"),
        import("../assets/gear/shield-1.png"),
        import("../assets/gear/shield-2.png")
      ],

      [Helper.OBTAINABLES.SAGE_GULLEY]: [
        import("../assets/gear/sage-gulley-0.png"),
        import("../assets/gear/sage-gulley-1.png")
      ],
      [Helper.OBTAINABLES.SAGE_OREN]: [
        import("../assets/gear/sage-oren-0.png"),
        import("../assets/gear/sage-oren-1.png")
      ],
      [Helper.OBTAINABLES.SAGE_ROSSO]: [
        import("../assets/gear/sage-rosso-0.png"),
        import("../assets/gear/sage-rosso-1.png")
      ],
      [Helper.OBTAINABLES.SAGE_IMPA]: [
        import("../assets/gear/sage-impa-0.png"),
        import("../assets/gear/sage-impa-1.png")
      ],
      [Helper.OBTAINABLES.SAGE_IRENE]: [
        import("../assets/gear/sage-irene-0.png"),
        import("../assets/gear/sage-irene-1.png")
      ],
      [Helper.OBTAINABLES.SAGE_OSFALA]: [
        import("../assets/gear/sage-osfala-0.png"),
        import("../assets/gear/sage-osfala-1.png")
      ],
      [Helper.OBTAINABLES.SAGE_SERES]: [
        import("../assets/gear/sage-seres-0.png"),
        import("../assets/gear/sage-seres-1.png")
      ],

      [Helper.OBTAINABLES.PENDANT_OF_POWER]: [
        import("../assets/gear/pendant-of-power-0.png"),
        import("../assets/gear/pendant-of-power-1.png")
      ],
      [Helper.OBTAINABLES.PENDANT_OF_WISDOM]: [
        import("../assets/gear/pendant-of-wisdom-0.png"),
        import("../assets/gear/pendant-of-wisdom-1.png")
      ],
      [Helper.OBTAINABLES.PENDANT_OF_COURAGE]: [
        import("../assets/gear/pendant-of-courage-0.png"),
        import("../assets/gear/pendant-of-courage-1.png")
      ],

      [Helper.OBTAINABLES.PROGRESSIVE_BRACELET]: [
        import("../assets/gear/bracelet-0.png"),
        import("../assets/gear/bracelet-1.png"),
        import("../assets/gear/bracelet-2.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_MITT]: [
        import("../assets/gear/mitt-0.png"),
        import("../assets/gear/mitt-1.png"),
        import("../assets/gear/mitt-2.png")
      ],
      [Helper.OBTAINABLES.PEGASUS_BOOTS]: [
        import("../assets/gear/boots-0.png"),
        import("../assets/gear/boots-1.png")
      ],
      [Helper.OBTAINABLES.ZORA_FLIPPERS]: [
        import("../assets/gear/flippers-0.png"),
        import("../assets/gear/flippers-1.png")
      ],
      [Helper.OBTAINABLES.BEE_BADGE]: [
        import("../assets/gear/badge-0.png"),
        import("../assets/gear/badge-1.png")
      ],
      [Helper.OBTAINABLES.STAMINA_SCROLL]: [
        import("../assets/gear/scroll-0.png"),
        import("../assets/gear/scroll-1.png")
      ],

      [Helper.OBTAINABLES.SMOOTH_GEM]: [
        import("../assets/gear/gem-0.png"),
        import("../assets/gear/gem-1.png")
      ],
      [Helper.OBTAINABLES.POUCH]: [
        import("../assets/gear/pouch-0a.png"),
        import("../assets/gear/pouch-1a.png")
      ],
      [Helper.OBTAINABLES.BELL]: [
        import("../assets/gear/bell-0.png"),
        import("../assets/gear/bell-1.png")
      ],

      [Helper.OBTAINABLES.PIECE_OF_HEART]: [
        import("../assets/gear/heart-0.png"),
        import("../assets/gear/heart-1.png"),
        import("../assets/gear/heart-2.png"),
        import("../assets/gear/heart-3.png")
      ],

      [Helper.OBTAINABLES.RUPEE]: [
        import("../assets/gear/rupee.png")
      ],
      [Helper.OBTAINABLES.MAIAMAI]: [
        import("../assets/gear/maiamai.png")
      ],
      [Helper.OBTAINABLES.MONSTER_TAIL]: [
        import("../assets/gear/tail.png")
      ],
      [Helper.OBTAINABLES.MONSTER_HORN]: [
        import("../assets/gear/horn.png")
      ],
      [Helper.OBTAINABLES.MONSTER_GUTS]: [
        import("../assets/gear/guts.png")
      ],
      [Helper.OBTAINABLES.MASTER_ORE]: [
        import("../assets/gear/ore.png")
      ],

      [Helper.OBTAINABLES.PROGRESSIVE_LAMP]: [
        import("../assets/items/lamp-0.png"),
        import("../assets/items/lamp-1.png"),
        import("../assets/items/lamp-2.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_BOW]: [
        import("../assets/items/bow-0.png"),
        import("../assets/items/bow-1.png"),
        import("../assets/items/bow-2.png"),
        import("../assets/items/bow-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_TROD]: [
        import("../assets/items/trod-0.png"),
        import("../assets/items/trod-1.png"),
        import("../assets/items/trod-2.png"),
        import("../assets/items/trod-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_HAMMER]: [
        import("../assets/items/hammer-0.png"),
        import("../assets/items/hammer-1.png"),
        import("../assets/items/hammer-2.png"),
        import("../assets/items/hammer-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_BOMBS]: [
        import("../assets/items/bombs-0.png"),
        import("../assets/items/bombs-1.png"),
        import("../assets/items/bombs-2.png"),
        import("../assets/items/bombs-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_BOOMERANG]: [
        import("../assets/items/boomerang-0.png"),
        import("../assets/items/boomerang-1.png"),
        import("../assets/items/boomerang-2.png"),
        import("../assets/items/boomerang-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_HOOKSHOT]: [
        import("../assets/items/hookshot-0.png"),
        import("../assets/items/hookshot-1.png"),
        import("../assets/items/hookshot-2.png"),
        import("../assets/items/hookshot-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_IROD]: [
        import("../assets/items/irod-0.png"),
        import("../assets/items/irod-1.png"),
        import("../assets/items/irod-2.png"),
        import("../assets/items/irod-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_SROD]: [
        import("../assets/items/srod-0.png"),
        import("../assets/items/srod-1.png"),
        import("../assets/items/srod-2.png"),
        import("../assets/items/srod-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_FROD]: [
        import("../assets/items/frod-0.png"),
        import("../assets/items/frod-1.png"),
        import("../assets/items/frod-2.png"),
        import("../assets/items/frod-3.png")
      ],
      [Helper.OBTAINABLES.PROGRESSIVE_NET]: [
        import("../assets/items/net-0.png"),
        import("../assets/items/net-1.png"),
        import("../assets/items/net-2.png")
      ],

      [Helper.OBTAINABLES.HINT_GLASSES]: [
        import("../assets/items/hint-glasses-0.png"),
        import("../assets/items/hint-glasses-1.png")
      ],
      [Helper.OBTAINABLES.BOW_OF_LIGHT]: [
        import("../assets/items/bow-of-light-0.png"),
        import("../assets/items/bow-of-light-1.png")
      ],
      [Helper.OBTAINABLES.SCOOT_FRUIT]: [
        import("../assets/items/scoot-fruit-0.png"),
        import("../assets/items/scoot-fruit-1.png")
      ],
      [Helper.OBTAINABLES.FOUL_FRUIT]: [
        import("../assets/items/foul-fruit-0.png"),
        import("../assets/items/foul-fruit-1.png")
      ],

      [Helper.OBTAINABLES.NOTE_BOTTLE]: [
        import("../assets/items/note-bottle-0.png"),
        import("../assets/items/note-bottle-1.png"),
        import("../assets/items/note-bottle-2.png")
      ],
      [Helper.OBTAINABLES.BOTTLE_TWO]: [
        import("../assets/items/bottle-0.png"),
        import("../assets/items/bottle-1.png")
      ],
      [Helper.OBTAINABLES.BOTTLE_THREE]: [
        import("../assets/items/bottle-0.png"),
        import("../assets/items/bottle-1.png")
      ],
      [Helper.OBTAINABLES.BOTTLE_FOUR]: [
        import("../assets/items/bottle-0.png"),
        import("../assets/items/bottle-1.png")
      ],
      [Helper.OBTAINABLES.BOTTLE_FIVE]: [
        import("../assets/items/bottle-0.png"),
        import("../assets/items/bottle-1.png")
      ],

      "GEAR_OVERLAY": [
        import("../assets/gear/gear-overlay.png")
      ],
      "ITEMS_OVERLAY": [
        import("../assets/items/items-overlay.png")
      ],
      "LABEL": [
        import("../assets/tooltip-label.png")
      ],

      "HYRULE_MAP": [
        import("../assets/maps/hyrule-map.png")
      ],
      "LORULE_MAP": [
        import("../assets/maps/lorule-map.png")
      ],
      "MAP_TOOLTIP": [
        import("../assets/maps/hyrule-map-tooltip.png")
      ],
      "CHANGE_MAP_UP": [
        import("../assets/maps/map-button-up.png")
      ],
      "CHANGE_MAP_DOWN": [
        import("../assets/maps/map-button-down.png")
      ]
    };
  }
}

export default Images;
