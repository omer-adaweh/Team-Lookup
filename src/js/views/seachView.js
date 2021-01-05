import { elements } from './base';
export const getInput = () => elements.searchtext.value;
export const clearInput = () => {
    elements.searchtext.value = '';
};