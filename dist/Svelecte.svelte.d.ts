/**
 * Provide ability to add additional renderers in raw html string format
 *
 * @param {string|Record<string, RenderFunction>} name
 * @param {RenderFunction} rendererFn
 */
export function addRenderer(name: string | Record<string, RenderFunction>, rendererFn: RenderFunction): void;
export const config: import("./settings.js").Settings;
/** @typedef {typeof __propDef.props}  SvelecteProps */
/** @typedef {typeof __propDef.events}  SvelecteEvents */
/** @typedef {typeof __propDef.slots}  SvelecteSlots */
export default class Svelecte extends SvelteComponentTyped<{
    parentValue?: string | number;
    options?: any[];
    value?: any;
    virtualList?: boolean;
    name?: string;
    focus?: () => void;
    inputId?: string;
    required?: boolean;
    disabled?: boolean;
    anchor_element?: string;
    optionResolver?: OptionResolverFunction;
    valueField?: string;
    labelField?: string;
    groupLabelField?: string;
    groupItemsField?: string;
    disabledField?: string;
    placeholder?: string;
    searchable?: boolean;
    clearable?: boolean;
    renderer?: string | RenderFunction;
    disableHighlight?: boolean;
    highlightFirstItem?: boolean;
    selectOnTab?: boolean | "select-navigate";
    resetOnBlur?: boolean;
    resetOnSelect?: boolean;
    closeAfterSelect?: string | boolean;
    dndzone?: Function;
    validatorAction?: any[];
    strictMode?: boolean;
    multiple?: boolean;
    max?: number;
    collapseSelection?: "blur" | "always";
    keepSelectionInList?: boolean | "auto";
    creatable?: boolean;
    creatablePrefix?: string;
    allowEditing?: boolean;
    keepCreated?: boolean;
    delimiter?: string;
    createFilter?: CreateFilterFunction;
    createHandler?: CreateHandlerFunction;
    fetch?: string;
    fetchProps?: any;
    fetchMode?: "init" | "auto";
    fetchCallback?: Function;
    fetchResetOnBlur?: boolean;
    fetchDebounceTime?: number;
    minQuery?: number;
    lazyDropdown?: boolean;
    vlHeight?: number;
    vlItemSize?: number;
    searchProps?: import("./utils/list.js").SearchProps;
    class?: string;
    i18n?: any;
    readSelection?: any;
    valueAsObject?: boolean;
    setSelection?: (selection: any, triggerChangeEvent: any) => void;
    getSelection?: (onlyValues: any) => any;
    refetchWith?: (value: string | number | any[]) => void;
}, {
    mousedown: MouseEvent;
    invalidValue: CustomEvent<any>;
    change: CustomEvent<any>;
    createoption: CustomEvent<any>;
    createFail: CustomEvent<any>;
    enterKey: CustomEvent<any>;
    focus: CustomEvent<any>;
    blur: CustomEvent<any>;
    fetchError: CustomEvent<any>;
    fetch: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    collapsedSelection: {
        selectedOptions: any[];
        i18n: import("./settings.js").I18nObject;
    };
    selection: {
        selectedOptions: any[];
        bindItem: typeof bindItem;
    };
    'clear-icon': {
        selectedOptions: any[];
        inputValue: string;
    };
    'dropdown-toggle': {
        isOpen: boolean;
    };
    'control-end': {};
    'list-header': {};
    option: {
        item: any;
    };
    'create-row': {
        isCreating: boolean;
        inputValue: string;
        i18n: import("./settings.js").I18nObject;
    };
}> {
    get focus(): () => void;
    get setSelection(): (selection: any, triggerChangeEvent: any) => void;
    get getSelection(): (onlyValues: any) => any;
    get refetchWith(): (value: string | number | any[]) => void;
}
/**
 * Due to adding `$selected` property to items and ability to render selected items in dropdown
 * second parameter is not related to option selection status, buth whether it's rendered in selection (true)
 * or in dropdown (false)
 */
export type RenderFunction = (item: object, selectionSection?: boolean, inputValue?: string) => string;
export type CreateFilterFunction = (inputValue: string) => boolean;
/**
 * Resolver function for creating new items. Async functions are support
 */
export type CreateHandlerFunction = (props: {
    inputValue: string;
    valueField: string;
    labelField: string;
    prefix: string;
}) => Promise<object> | object;
export type OptionResolverFunction = (options: any, selectedKeys: Set<any>) => object[];
export type SvelecteProps = typeof __propDef.props;
export type SvelecteEvents = typeof __propDef.events;
export type SvelecteSlots = typeof __propDef.slots;
import { bindItem } from './utils/actions.js';
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        parentValue?: string | number | null | undefined;
        options?: any[];
        value?: any[] | string | number | object | null;
        virtualList?: boolean;
        name?: string;
        focus?: () => void;
        inputId?: string;
        required?: boolean;
        disabled?: boolean;
        anchor_element?: string;
        optionResolver?: OptionResolverFunction;
        valueField?: string;
        labelField?: string;
        groupLabelField?: string;
        groupItemsField?: string;
        disabledField?: string;
        placeholder?: string;
        searchable?: boolean;
        clearable?: boolean;
        renderer?: string | RenderFunction;
        disableHighlight?: boolean;
        highlightFirstItem?: boolean;
        selectOnTab?: boolean | 'select-navigate';
        resetOnBlur?: boolean;
        resetOnSelect?: boolean;
        closeAfterSelect?: string | boolean;
        dndzone?: Function;
        validatorAction?: any[];
        strictMode?: boolean;
        multiple?: boolean;
        max?: number;
        collapseSelection?: 'blur' | 'always' | null;
        keepSelectionInList?: boolean | 'auto';
        creatable?: boolean;
        creatablePrefix?: string;
        allowEditing?: boolean;
        keepCreated?: boolean;
        delimiter?: string;
        createFilter?: CreateFilterFunction;
        createHandler?: CreateHandlerFunction;
        fetch?: string | null;
        fetchProps?: object;
        fetchMode?: 'auto' | 'init';
        fetchCallback?: Function;
        fetchResetOnBlur?: boolean;
        fetchDebounceTime?: number;
        minQuery?: number;
        lazyDropdown?: boolean;
        vlHeight?: number;
        vlItemSize?: number;
        searchProps?: import('./utils/list.js').SearchProps | null;
        class?: string;
        i18n?: any;
        readSelection?: any;
        valueAsObject?: boolean;
        setSelection?: (selection: any, triggerChangeEvent: any) => void;
        getSelection?: (onlyValues: any) => any;
        refetchWith?: (value: string | number | any[]) => void;
    };
    events: {
        mousedown: MouseEvent;
        invalidValue: CustomEvent<any>;
        change: CustomEvent<any>;
        createoption: CustomEvent<any>;
        createFail: CustomEvent<any>;
        enterKey: CustomEvent<any>;
        focus: CustomEvent<any>;
        blur: CustomEvent<any>;
        fetchError: CustomEvent<any>;
        fetch: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        collapsedSelection: {
            selectedOptions: any[];
            i18n: import("./settings.js").I18nObject;
        };
        selection: {
            selectedOptions: any[];
            bindItem: typeof bindItem;
        };
        'clear-icon': {
            selectedOptions: any[];
            inputValue: string;
        };
        'dropdown-toggle': {
            isOpen: boolean;
        };
        'control-end': {};
        'list-header': {};
        option: {
            item: any;
        };
        'create-row': {
            isCreating: boolean;
            inputValue: string;
            i18n: import("./settings.js").I18nObject;
        };
    };
};
export {};
