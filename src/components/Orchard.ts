import { Component, Tag } from '../framework';
import { ComponentLogger } from '../framework/logger/Log';

const componentName = 'c-orchard';
const logger = new ComponentLogger(componentName);

@Tag(componentName)
export class Orchard extends HTMLElement implements Partial<Component> {
  constructor() {
    super();
  }

  @logger.invoke()
  public async connectedCallback() {
    logger.data('Orchard ON!');
  }
}
