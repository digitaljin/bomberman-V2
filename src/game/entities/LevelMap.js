import { Entity } from 'engine/Entity.js';
import { drawTile } from 'engine/context.js';
import { STAGE_MAP_MAX_SIZE, tileMap } from 'game/constants/LevelData.js';
import { TILE_SIZE } from 'game/constants/game.js';

export class LevelMap extends Entity {

  tileMap = [...tileMap];

  image = document.querySelector('img#stage');
  stageImage = new OffscreenCanvas(STAGE_MAP_MAX_SIZE, STAGE_MAP_MAX_SIZE);

  constructor() {
    super({ x: 0, y: 0 });

    this.stageImageContext = this.stageImage.getContext('2d');
    this.buildStage();
  }

  updateStageImageAt(columnIndex, rowIndex, tile) {
    drawTile(this.stageImageContext, this.image, tile, columnIndex * TILE_SIZE, rowIndex * TILE_SIZE, TILE_SIZE);
  }

  buildStage() {
    for (let rowIndex = 0; rowIndex < this.tileMap.length; rowIndex++) {
      for (let columnIndex = 0; columnIndex < this.tileMap[rowIndex].length; columnIndex++) {
        const tile = this.tileMap[rowIndex][columnIndex];
        this.updateStageImageAt(columnIndex, rowIndex, tile);
      }
    }
  }

  update = () => undefined;

  draw(context, camera) {
    context.drawImage(this.stageImage, -camera.position.x, -camera.position.y);
  }
}
