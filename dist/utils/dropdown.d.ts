/**
 * @param {boolean} isOpened
 * @param {HTMLDivElement} scrollContainer
 * @param {boolean} renderDropdown
 * @returns {void}
 */
export function positionDropdown(isOpened: boolean, scrollContainer: HTMLDivElement, renderDropdown: boolean): void;
/**
 * @typedef {object} ItemDimension
 * @property {number} size
 * @property {number} height
 *
 * @param {import('svelte').SvelteComponent} refVirtualList
 * @param {HTMLDivElement} scrollContainer
 * @param {array} options
 * @returns {ItemDimension}
 */
export function virtualListDimensionsResolver(refVirtualList: import('svelte').SvelteComponent, scrollContainer: HTMLDivElement, options: any[]): ItemDimension;
/**
 * @typedef {object} ScrollParams
 * @property {HTMLDivElement} container
 * @property {HTMLDivElement} scrollContainer
 * @property {boolean} virtualList
 * @property {boolean} center
 *
 * @param {ScrollParams} params
 * @param {number} dropdownIndex
 * @returns
 */
export function scrollIntoView({ container, scrollContainer, virtualList, center }: ScrollParams, dropdownIndex: number): void;
export type outValue = {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
    any: boolean;
};
export type ItemDimension = {
    size: number;
    height: number;
};
export type ScrollParams = {
    container: HTMLDivElement;
    scrollContainer: HTMLDivElement;
    virtualList: boolean;
    center: boolean;
};
