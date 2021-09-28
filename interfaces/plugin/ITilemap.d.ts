/**
 * The `ITilemapInstance` interface derives from [IWorldInstance](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/object-interfaces/iworldinstance) to add APIs specific to the [Tilemap plugin](https://www.construct.net/en/make-games/manuals/construct-3/plugin-reference/tilemap).
 *
 * Refer to [ITilemapInstance on construct.net](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap) for more information about the APIs and decoding tile ids.
 */
export class ITilemapInstance {
  /** See [ITilemapInstance on construct.net](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap) */
  static TILE_FLIPPED_HORIZONTAL: 0x80000000;
  /** See [ITilemapInstance on construct.net](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap) */
  static TILE_FLIPPED_VERTICAL: 0x40000000;
  /** See [ITilemapInstance on construct.net](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap) */
  static TILE_FLIPPED_DIAGONAL: 0x20000000;
  /** See [ITilemapInstance on construct.net](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap) */
  static TILE_FLAGS_MASK: 0xe0000000;
  /** See [ITilemapInstance on construct.net](https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap) */
  static TILE_ID_MASK: 0x1fffffff;

  /** The size of the tilemap, in tiles (read-only). */
  readonly mapWidth: number;
  /** The size of the tilemap, in tiles (read-only). */
  readonly mapHeight: number;
  /**
   * The displayed size of the tilemap, in tiles (read-only).
   *
   * **Note**: This can differ from `mapWidth`/`mapHeight` if the Tilemap is resized smaller at runtime - in that case the display size will be smaller, but the map size will stay the same.
   */
  readonly mapDisplayWidth: number;
  /**
   * The displayed size of the tilemap, in tiles (read-only).
   *
   * **Note**: This can differ from `mapWidth`/`mapHeight` if the Tilemap is resized smaller at runtime - in that case the display size will be smaller, but the map size will stay the same.
   */
  readonly mapDisplayHeight: number;
  /** The size of a tile in pixels (read-only). */
  readonly tileWidth: number;
  /** The size of a tile in pixels (read-only). */
  readonly tileHeight: number;
  /** Get the tile at a given position in tiles (i.e. (0, 0) is the top-left tile of the tilemap, regardless of the tilemap's position or the tile size). Returns -1 for empty tiles or tiles outside the tilemap; otherwise use bit operations to determine tile ID or flags separately. */
  getTileAt(x: number, y: number): number;
  /** Set the tile at a given position in tiles. Use -1 to set a tile empty; otherwise use bit operations to combine the tile ID and flags. */
  setTileAt(x: number, y: number, tile: number): void;
}
