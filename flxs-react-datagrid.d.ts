declare module 'flxs-react-datagrid/adapter/material/LibraryImports' {
	import { TypedObject, ComboBox, ToolbarAction, UIUtils, Constants, UIComponent, ReactDataGrid, ReactDataGridColumn, TriStateCheckBox } from 'flxs-react-datagrid/js/library';
	export { TypedObject, ComboBox, ToolbarAction, UIUtils, Constants, UIComponent, ReactDataGrid, ReactDataGridColumn, TriStateCheckBox };

}
declare module 'flxs-react-datagrid/adapter/material/MaterialAdapter' {
	/**
	 * A utility class that maps utility functions from Flexicious into JQuery
	 * @constructor
	 * @namespace com.flexicious.adapters
	 */
	export default class MaterialAdapter {
	    getClassNames(): any[];
	    setupInputMask(input: any, options: any): void;
	    showDialog(elem: any, parent: any, modal: any, w: any, h: any, title: any, actions: any): any;
	    createSettingsPopup(): any;
	    createSaveSettingsPopup(): any;
	    createExportPopup(): any;
	    createDateTimePicker(dateFormat: any, dflt: any, hintText: any, ref: any, onChangeCallBack: any): any;
	    getDateFromPicker(picker: any): any;
	    showMessage(msg: any): void;
	    showTooltip(relativeTo: any, tooltip: any, dataContext: any, point: any, leftOffset: any, topOffset: any, offScreenMath: any, where: any, container: any, bounds: any): void;
	    showToaster(message: any, title: any, type?: string, toasterPosition?: string, animationDuration?: number, visibleDuration?: number, moveAnimate?: boolean, fadeAnimate?: boolean): void;
	}

}
declare module 'flxs-react-datagrid/adapter/material/MaterialExportOptionsView' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import { UIComponent } from 'flxs-react-datagrid/adapter/material/LibraryImports';
	/**
	 * A ExportOptionsView that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class ExportOptionsView
	 * @namespace flexiciousNmsp
	 */
	export default class MaterialExportOptionsView extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    setGrid(val: any): void;
	    onOK(domElement: any): void;
	    close(dialogResult: any): void;
	    onCancel(evt: any): void;
	    showDialog(): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/adapter/material/MaterialSaveSettingsPopup' {
	import { UIComponent } from 'flxs-react-datagrid/adapter/material/LibraryImports';
	/**
	 * A SaveSettingsPopup that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class SaveSettingsPopup
	 * @namespace flexiciousNmsp
	 */
	export default class MaterialSaveSettingsPopup extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    showDialog(): void;
	    setGrid(val: any): void;
	    onClearSettings(evt: any): void;
	    onCancel(evt: any): void;
	    onSaveSettings(domElementdiv: any): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/adapter/material/MaterialSettingsPopup' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import { UIComponent } from 'flxs-react-datagrid/adapter/material/LibraryImports';
	/**
	 * A SettingsPopup that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class SettingsPopup
	 * @namespace flexiciousNmsp
	 */
	export default class MaterialSettingsPopup extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @param val
	     */
	    setGrid(val: any): void;
	    /**
	     *
	     * @type {on}
	     */
	    onOK(dialog: any): void;
	    /**
	     *
	     * @param evt
	     */
	    onCancel(evt: any): void;
	    showDialog(): void;
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/library' {
	import AdvancedFilter from 'flxs-react-datagrid/js/flexgrid/grids/filters/AdvancedFilter';
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	import CellInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/CellInfo';
	import CellUtils from 'flxs-react-datagrid/js/flexgrid/utils/CellUtils';
	import ChangeInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/ChangeInfo';
	import ClassFactory from 'flxs-react-datagrid/js/utils/ClassFactory';
	import ComboBox from 'flxs-react-datagrid/js/controls/ComboBox';
	import ComponentAdditionResult from 'flxs-react-datagrid/js/flexgrid/valueobjects/ComponentAdditionResult';
	import ComponentInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/ComponentInfo';
	import Constants from 'flxs-react-datagrid/js/utils/Constants';
	import CsvExporter from 'flxs-react-datagrid/js/flexgrid/export/CsvExporter';
	import ExcelExporter from 'flxs-react-datagrid/js/flexgrid/export/CsvExporter';
	import CurrencyFormatter from 'flxs-react-datagrid/js/utils/CurrencyFormatter';
	import DateComboBox from 'flxs-react-datagrid/js/controls/DateComboBox';
	import DateFormatter from 'flxs-react-datagrid/js/utils/DateFormatter';
	import DatePicker from 'flxs-react-datagrid/js/controls/DatePicker';
	import DateRange from 'flxs-react-datagrid/js/utils/DateRange';
	import DateRangePicker from 'flxs-react-datagrid/js/controls/DateRangePicker';
	import DateUtils from 'flxs-react-datagrid/js/utils/DateUtils';
	import DisplayList from 'flxs-react-datagrid/js/core/DisplayList';
	import DocExporter from 'flxs-react-datagrid/js/flexgrid/export/DocExporter';
	import ElasticContainer from 'flxs-react-datagrid/js/flexgrid/grids/ElasticContainer';
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	import ExpandCollapseIcon from 'flxs-react-datagrid/js/flexgrid/cells/ExpandCollapseIcon';
	import ExportController from 'flxs-react-datagrid/js/flexgrid/export/ExportController';
	import ExportEvent from 'flxs-react-datagrid/js/flexgrid/export/ExportEvent';
	import ExportOptions from 'flxs-react-datagrid/js/flexgrid/export/ExportOptions';
	import ExportOptionsView from 'flxs-react-datagrid/js/flexgrid/export/ExportOptionsView';
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	import ExtendedExportController from 'flxs-react-datagrid/js/flexgrid/export/ExtendedExportController';
	import ExtendedFilterPageSortChangeEvent from 'flxs-react-datagrid/js/flexgrid/events/ExtendedFilterPageSortChangeEvent';
	import FactoryKey from 'flxs-react-datagrid/js/flexgrid/grids/cache/FactoryKey';
	import Filter from 'flxs-react-datagrid/js/flexgrid/grids/filters/Filter';
	import FilterContainerImpl from 'flxs-react-datagrid/js/flexgrid/grids/filters/FilterContainerImpl';
	import FilterExpression from 'flxs-react-datagrid/js/flexgrid/grids/filters/FilterExpression';
	import FilterSort from 'flxs-react-datagrid/js/flexgrid/grids/filters/FilterSort';
	import FilterPageSortChangeEvent from 'flxs-react-datagrid/js/flexgrid/events/FilterPageSortChangeEvent';
	import FlexDataGrid from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGrid';
	import FlexDataGridBodyContainer from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridBodyContainer';
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	import FlexDataGridCheckBoxColumn from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridCheckBoxColumn';
	import FlexDataGridColumn from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumn';
	import FlexDataGridColumnGroup from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumnGroup';
	import FlexDataGridColumnGroupCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridColumnGroupCell';
	import FlexDataGridColumnLevel from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumnLevel';
	import FlexDataGridContainerBase from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridContainerBase';
	import FlexDataGridDataCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridDataCell';
	import FlexDataGridEvent from 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridEvent';
	import FlexDataGridExpandCollapseCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridExpandCollapseCell';
	import FlexDataGridExpandCollapseHeaderCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridExpandCollapseHeaderCell';
	import FlexDataGridFilterCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridFilterCell';
	import FlexDataGridFooterCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridFooterCell';
	import FlexDataGridHeaderCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridHeaderCell';
	import FlexDataGridHeaderContainer from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridHeaderContainer';
	import FlexDataGridHeaderSeperator from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridHeaderSeperator';
	import FlexDataGridItemEditEvent from 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridItemEditEvent';
	import FlexDataGridLevelRendererCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridLevelRendererCell';
	import FlexDataGridPaddingCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridPaddingCell';
	import FlexDataGridPagerCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridPagerCell';
	import FlexDataGridVirtualBodyContainer from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridVirtualBodyContainer';
	import GridPreferencesInfo from 'flxs-react-datagrid/js/flexgrid/persistence/GridPreferencesInfo';
	import PreferenceInfo from 'flxs-react-datagrid/js/flexgrid/persistence/PreferenceInfo';
	import HtmlExporter from 'flxs-react-datagrid/js/flexgrid/export/HtmlExporter';
	import InsertionLocationInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/InsertionLocationInfo';
	import ItemLoadInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/ItemLoadInfo';
	import ItemPositionInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/ItemPositionInfo';
	import KeyValuePairCollection from 'flxs-react-datagrid/js/flexgrid/grids/cache/KeyValuePairCollection';
	import Label from 'flxs-react-datagrid/js/controls/Label';
	import LevelSelectionInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/LevelSelectionInfo';
	import LockedContent from 'flxs-react-datagrid/js/flexgrid/grids/LockedContent';
	import MultiSelectComboBox from 'flxs-react-datagrid/js/controls/MultiSelectComboBox';
	import MSCBCustom from 'flxs-react-datagrid/js/controls/MSCBCustom';
	import MultiSelectComboBoxEx from 'flxs-react-datagrid/js/controls/MultiSelectComboBoxEx';
	import MultiSelectTextInput from 'flxs-react-datagrid/js/controls/MultiSelectTextInput';
	import NdgBase from 'flxs-react-datagrid/js/flexgrid/grids/NdgBase';
	import NumberFormatter from 'flxs-react-datagrid/js/utils/NumberFormatter';
	import NumericRangeBox from 'flxs-react-datagrid/js/controls/NumericRangeBox';
	import OpenSettingsPopup from 'flxs-react-datagrid/js/flexgrid/persistence/OpenSettingsPopup';
	import PageSize from 'flxs-react-datagrid/js/flexgrid/print/PageSize';
	import PagerControl from 'flxs-react-datagrid/js/flexgrid/toolbar/PagerControlAS';
	import Point from 'flxs-react-datagrid/js/utils/Point';
	import PreferencePersistenceEvent from 'flxs-react-datagrid/js/flexgrid/events/PreferencePersistenceEvent';
	import PrintOptions from 'flxs-react-datagrid/js/flexgrid/print/PrintOptions';
	import ReactDataGrid from 'flxs-react-datagrid/js/table/ReactDataGrid';
	import ReactDataGridCellContainer from 'flxs-react-datagrid/js/core/ReactDataGridCellContainer';
	import ReactDataGridPsuedoScroll from 'flxs-react-datagrid/js/table/psuedoscroll/ReactDataGridPsuedoScroll';
	import ReactDataGridPsuedoScrollBodyContainer from 'flxs-react-datagrid/js/table/psuedoscroll/ReactDataGridPsuedoScrollBodyContainer';
	import ReactDataGridColumn from 'flxs-react-datagrid/js/table/ReactDataGridColumn';
	import ReactDataGridColumnGroup from 'flxs-react-datagrid/js/table/ReactDataGridColumnGroup';
	import ReactDataGridColumnLevel from 'flxs-react-datagrid/js/table/ReactDataGridColumnLevel';
	import Rectangle from 'flxs-react-datagrid/js/flexgrid/utils/Rectangle';
	import RendererCache from 'flxs-react-datagrid/js/flexgrid/grids/cache/RendererCache';
	import RowInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/RowInfo';
	import RowPositionInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/RowPositionInfo';
	import SaveSettingsPopup from 'flxs-react-datagrid/js/flexgrid/persistence/SaveSettingsPopup';
	import SelectionInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/SelectionInfo';
	import SettingsPopup from 'flxs-react-datagrid/js/flexgrid/persistence/SettingsPopup';
	import SortInfo from 'flxs-react-datagrid/js/flexgrid/valueobjects/SortInfo';
	import SpinnerBehavior from 'flxs-react-datagrid/js/behaviors/SpinnerBehavior';
	import StyleDefaults from 'flxs-react-datagrid/js/flexgrid/grids/StyleDefaults';
	import TextInput from 'flxs-react-datagrid/js/controls/TextInput';
	import Timer from 'flxs-react-datagrid/js/utils/Timer';
	import ToolbarAction from 'flxs-react-datagrid/js/flexgrid/valueobjects/ToolbarAction';
	import TooltipBehavior from 'flxs-react-datagrid/js/behaviors/TooltipBehavior';
	import TriStateCheckBox from 'flxs-react-datagrid/js/controls/TriStateCheckBox';
	import TxtExporter from 'flxs-react-datagrid/js/flexgrid/export/TxtExporter';
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	import UIUtils from 'flxs-react-datagrid/js/utils/UIUtils';
	import UserSettingsController from 'flxs-react-datagrid/js/flexgrid/persistence/UserSettingsController';
	import UserSettingsOptions from 'flxs-react-datagrid/js/flexgrid/persistence/UserSettingsOptions';
	import XmlExporter from 'flxs-react-datagrid/js/flexgrid/export/XmlExporter';
	export { AdvancedFilter, BaseEvent, CellInfo, CellUtils, ChangeInfo, ClassFactory, ComboBox, ComponentAdditionResult, ComponentInfo, Constants, CsvExporter, CurrencyFormatter, DateComboBox, DateFormatter, DatePicker, DateRange, DateRangePicker, DateUtils, DisplayList, DocExporter, ElasticContainer, EventDispatcher, ExcelExporter, ExpandCollapseIcon, ExportController, ExportEvent, ExportOptions, ExportOptionsView, Exporter, ExtendedExportController, ExtendedFilterPageSortChangeEvent, FactoryKey, Filter, FilterContainerImpl, FilterExpression, FilterPageSortChangeEvent, FilterSort, FlexDataGrid, FlexDataGridBodyContainer, FlexDataGridCell, FlexDataGridCheckBoxColumn, FlexDataGridColumn, FlexDataGridColumnGroup, FlexDataGridColumnGroupCell, FlexDataGridColumnLevel, FlexDataGridContainerBase, FlexDataGridDataCell, FlexDataGridEvent, FlexDataGridExpandCollapseCell, FlexDataGridExpandCollapseHeaderCell, FlexDataGridFilterCell, FlexDataGridFooterCell, FlexDataGridHeaderCell, FlexDataGridHeaderContainer, FlexDataGridHeaderSeperator, FlexDataGridItemEditEvent, FlexDataGridLevelRendererCell, FlexDataGridPaddingCell, FlexDataGridPagerCell, FlexDataGridVirtualBodyContainer, GridPreferencesInfo, HtmlExporter, InsertionLocationInfo, ItemLoadInfo, ItemPositionInfo, KeyValuePairCollection, Label, LevelSelectionInfo, LockedContent, MultiSelectComboBox, MSCBCustom, MultiSelectComboBoxEx, MultiSelectTextInput, NdgBase, NumberFormatter, NumericRangeBox, OpenSettingsPopup, PageSize, PagerControl, Point, PreferenceInfo, PreferencePersistenceEvent, PrintOptions, ReactDataGrid, ReactDataGridCellContainer, ReactDataGridColumn, ReactDataGridColumnGroup, ReactDataGridColumnLevel, ReactDataGridPsuedoScroll, ReactDataGridPsuedoScrollBodyContainer, Rectangle, RendererCache, RowInfo, RowPositionInfo, SaveSettingsPopup, SelectionInfo, SettingsPopup, SortInfo, SpinnerBehavior, StyleDefaults, TextInput, Timer, ToolbarAction, TooltipBehavior, TriStateCheckBox, TxtExporter, TypedObject, UIComponent, UIUtils, UserSettingsController, UserSettingsOptions, XmlExporter };

}
declare module 'flxs-react-datagrid/js/behaviors/SpinnerBehavior' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Attaches the spinner behavior to the owner component.
	 * When the startspin method of this behavior is called, the
	 * behavior will instantiate a new spinner based on the owners
	 * Spinner Factory, and position it in the middle of the owner
	 * components display area.
	 * When the stop spin method is called, the behavior will remove
	 * the spinner from the owner component and stop the spin.
	 * @namespace flexiciousNmsp
	 * @class SpinnerBehavior
	 *
	 * @constructor
	 */
	export default class SpinnerBehavior extends TypedObject {
	    constructor(ownerComponent: any);
	    getClassNames(): string[];
	    onOwnerCreationComplete(event: any): void;
	    /**
	     * Shows the spinner with default values defined below:<br/>
	     * Label: "Loading please wait"<br/>
	     * X Position : center X of the grid <br/>
	     * Y Position : center Y of the grid<br/>
	     * Grid Alpa when the spinner is active : 0.3<br/>
	     * Spinner appearance can be modified using styles <br/>.
	     * @method showSpinner
	     */
	    showSpinner(msg: any): void;
	    showMessage(msg: any): void;
	    /**
	     * Removes the spinner and sets the bodyContainer.alpha back to 1
	     * @method hideSpinner
	     */
	    hideSpinner(): void;
	    /**
	     * @method kill
	     */
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/behaviors/TooltipBehavior' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Attaches the tooltip behavior to any UI component. The behavior does not
	 * automatically trigger, however, it does wrap all the functionality needed to
	 * display a tooltip type control next to the requesting control.
	 * @namespace flexiciousNmsp
	 * @class TooltipBehavior
	 *
	 * @constructor
	 */
	export default class TooltipBehavior extends TypedObject {
	    constructor(ownerComponent: any);
	    getClassNames(): string[];
	    /**
	     * Displays a tooltip for the control in question. The tooltip will disappear if the mouse
	     * moves over an area that is not the 'relativeTo' component or the tooltip component.
	     *
	     * By default, the tooltip will go away once you hover the mouse out of the trigger cell or the tooltip and stayed that way for tooltipWatcherTimeout. You may also
	     * manually remove the tooltip by calling the hideToolTip() function.
	     *
	     * @method showTooltip
	     * @param relativeTo Which component to position the popup relative to
	     * @param tooltip The popup to display
	     * @param dataContext If the popup has a data property, it will be set to this value
	     * @param point If you specify this, the relativeTo is ignored, and the popup appears at the exact point you specify. Please ensure that the X and Y are relative to the Grid.
	     * @param leftOffset Whether to shift the popup left after calculating the positions, for customizing the actual position
	     * @param topOffset	Whether to shift the popup top after calculating the positions, for customizing the actual position
	     * @param offScreenMath	Whether or not to adjust the popup if it appears off screen
	     * @param where		One of three values, left, right or none. If left, positions to bottom left, if right, positions to bottom right, if none, positions right below the relativeTo component.
	     * @param container	The holder for the tooltip, defaults to UIUtils.getTopLevelApplication(). You may need to override in multi window Air apps.
	     */
	    showTooltip(relativeTo: any, tooltip: any, dataContext: any, point: any, leftOffset: any, topOffset: any, offScreenMath: any, where: any, container: any): void;
	    /**
	     * @method hideTooltip
	     * Hides the current tooltip.
	     */
	    hideTooltip(): void;
	    /**
	     * @method kill
	     */
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/ComboBox' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A ComboBox that implements ISingleSelectFilterControl (IFilterControl) and ISingleSelectDataBoundControl (IDataBoundControl)
	 * which enables it to be used within the filtering/binding infrasturcture.
	 * @class ComboBox
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class ComboBox extends UIComponent {
	    constructor();
	    getClassNames(): string[];
	    changeEventHandler(e: any): void;
	    keyUpHandler(e: any): void;
	    updateDisplayList(unscaledWidth: any, unscaledHeight: any): void;
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    commitDataProvider(): void;
	    componentDidMountCustom(): void;
	    /**
	     *
	     */
	    commitPropertiesSelectedValue(): void;
	    /**
	     *
	     * @param val
	     *
	     */
	    setSelectedValue(val: any): void;
	    /**
	     * Gets the selected value on our comboboxes. Just like the
	     * selected label, but applies to the data property.
	     *
	     * Needs the datafield property to be set.
	     */
	    getSelectedValue(): any;
	    commitPropertiesAddAllItem(): void;
	    /**
	     * Flag, when set will cause the associated control to have
	     * an Filter.ALL_ITEM Item value, which can then be used by the filtering
	     * infrastructure to ignore the column in the search
	     * @return
	     *
	     */
	    getAddAllItem(): any;
	    /**
	     *
	     */
	    setAddAllItem(value: any): void;
	    register(container: any): void;
	    /**
	     *
	     * @return {Array}
	     */
	    getDataProvider(): any;
	    /**
	     *
	     * @param value
	     */
	    setDataProvider(value: any): void;
	    getSelectedIndex(): any;
	    setSelectedIndex(value: any): void;
	    getSelectedItem(): any;
	    setSelectedItem(value: any): void;
	    render(): any;
	    /**
	     *  Returns the String that the item renderer displays for the given data object.
	     */
	    itemToLabel(data: any): any;
	    static itemToLabel(control: any, data: any): any;
	    onChange(e: any): void;
	    static addAllItemToDataProvider(control: any): void;
	    static setSelectedItemFromValue(control: any): void;
	    /**
	     * Sets the focus on the textbox
	     **/
	    focus(): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/DateComboBox' {
	import ComboBox from 'flxs-react-datagrid/js/controls/ComboBox';
	/**
	 * A DateComboBox that which can be used within the filtering/binding infrastructure.
	 * @class DateComboBox
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class DateComboBox extends ComboBox {
	    constructor(props: any);
	    getClassNames(): string[];
	    /**
	     *
	     */
	    onClick(e: any): void;
	    onDatePickerCancel(evt: any): void;
	    onDatePicker(picker: any): boolean;
	    dispatchEvent(evt: any): any;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    /**
	     * The calculated date range start
	     */
	    getSearchRangeStart(): any;
	    /**
	     * The calculated date range end
	     */
	    getSearchRangeEnd(): any;
	    /**
	     * Maximum value for the date picker
	     */
	    getMaxValue(): Date;
	    /**
	     * Minimum value for the date picker
	     */
	    getMinValue(): Date;
	    getDateRange(): any;
	    /**
	     *
	     */
	    setDateRange(value: any): void;
	    /**
	     * An array of DateRange.DATE_RANGE_* constants.
	     */
	    setDateRangeOptions(val: any): void;
	    /**
	     * An array of DateRange.DATE_RANGE_* constants.
	     */
	    getDateRangeOptions(): any;
	}

}
declare module 'flxs-react-datagrid/js/controls/DatePicker' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	export default class DatePicker extends UIComponent {
	    constructor(tag: any);
	    componentDidMountCustom(): void;
	    getClassNames(): string[];
	    setValue(val: any): void;
	    getValue(): any;
	    getSelectedDate(): any;
	    setSelectedDate(val: any): void;
	    checkChange(evt: any, newDate: any): void;
	    /**
	     * Sets the focus on the textbox
	     **/
	    focus(): void;
	    kill(): void;
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/controls/DateRangePicker' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A control composed of two date fields, start date and end date, and an
	 * optional DateComboBox, that allows for easy keyboard entry of date ranges.
	 * @class DateRangePicker
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class DateRangePicker extends UIComponent {
	    constructor(props: any);
	    render(): any;
	    onCancelClick(evt: any): void;
	    onOkClick(evt: any): void;
	    static validate(pop: any): boolean;
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/controls/Image' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A Image that which can be used within the filtering/binding infrastructure.
	 * @class Image
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Image extends UIComponent {
	    constructor();
	    getClassNames(): string[];
	    /**a
	     * Getter for the href property
	     */
	    getSource(): any;
	    /**
	     * Setter for the href property
	     * @param val
	     */
	    setSource(val: any): void;
	    componentDidMountCustom(): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/Label' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A Label that which can be used within the filtering/binding infrastructure.
	 * @class Label
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Label extends UIComponent {
	    constructor(props: any);
	    componentDidMountCustom(): void;
	    getClassNames(): string[];
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/MultiSelectComboBox' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import TextInput from 'flxs-react-datagrid/js/controls/TextInput';
	/**
	 * A MultiSelectComboBox that implements IMultiSelectDataBoundControl (IFilterControl) and IMultiSelectDataBoundControl (IDataBoundControl)
	 * which enables it to be used within the filtering/binding infrasturcture.
	 * @class MultiSelectComboBox
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class MultiSelectComboBox extends TextInput {
	    constructor(tag: any);
	    getClassNames(): string[];
	    showPopup(parent: any): void;
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    /**
	     * Flag, when set will cause the associated control to have
	     * an Filter.ALL_ITEM Item value, which can then be used by the filtering
	     * infrastructure to ignore the column in the search
	     * @return
	     *
	     */
	    getAddAllItem(): any;
	    /**
	     *
	     */
	    setAddAllItem(value: any): void;
	    /**
	     * Updates the value of the current check boxes from selectedValues and dataProvider
	     */
	    updateCheckBoxes(): void;
	    highlightRow(row: any): void;
	    onOkButton(): void;
	    destroyPopup(force: any): void;
	    onDocumentMouseUp(e: any): void;
	    getDataProvider(): any;
	    setDataProvider(value: any): void;
	    /**
	     *  Returns the String that the item renderer displays for the given data object.
	     */
	    itemToLabel(data: any): any;
	    updateDisplayList(w: any, h: any): void;
	    setLabel(): void;
	    setSelectedItem(val: any): void;
	    owns(elem: any): any;
	    kill(): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    initialize(): void;
	    componentDidMountCustom(): void;
	    /**
	     * Returns true if the all item is selected
	     * false otherwise
	     * @return
	        *
	     */
	    getIsAllSelected(): boolean;
	    isItemSelected(item: any): any;
	    getSelectedItems(item: any): any[];
	    restoreStateAndDestroyPopup(): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/MultiSelectComboBoxEx' {
	import MultiSelectComboBox from 'flxs-react-datagrid/js/controls/MultiSelectComboBox';
	export default class MultiSelectComboBoxEx extends MultiSelectComboBox {
	    constructor(props: any, tag: any, shouldInit: any);
	    onOk(): void;
	    selectAllItems(): void;
	    getFilteredDataBySearch(dp: any, text: any): any;
	    createCheckBoxes(checkBoxContainer: any, dp: any): void;
	    delayedUpdateCheckBoxes(that: any): void;
	    destroyCheckBoxes(checkBoxContainer: any): void;
	    /**
	     * @override
	     * @param parent
	     */
	    showPopup(parent: any): void;
	    /**
	     * @override
	     */
	    updateCheckBoxes(): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/MultiSelectTextInput' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import TextInput from 'flxs-react-datagrid/js/controls/TextInput';
	/**
	 * A MultiSelectTextInput that implements IMultiSelectDataBoundControl (IFilterControl) and IMultiSelectDataBoundControl (IDataBoundControl)
	 * which enables it to be used within the filtering/binding infrasturcture.
	 * @class MultiSelectTextInput
	 * @constructor
	 * @namespace flexiciousNmsp
	 */
	export default class MultiSelectTextInput extends TextInput {
	    constructor(tag: any);
	    componentDidMountCustom(): void;
	    addTemplate(): void;
	    getClassNames(): string[];
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    removeSelectedItem(evt: any): void;
	    setLabel(): void;
	    createSpanItem(index: any, value: any): any;
	    getSelectedItemsWidth(): number;
	    setAddAllItem(): void;
	    getAddAllItem(): boolean;
	    getDataProvider(): any;
	    /**
	     * Applies the selected item from the list to the autocomplete textbox
	     *
	     */
	    applyAutoCompleteValue(): void;
	    dispatchEvent(evt: any): void;
	    setIconVisible(event: any): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/NumericRangeBox' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A NumericRangeBox that which can be used within the filtering/binding infrastructure.	/**
	 * An  HBox that contains two textboxes to specify a range.
	 * Implements IRangeFilterControl (IFilterControl)
	 * @class NumericRangeBox
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class NumericRangeBox extends UIComponent {
	    constructor();
	    getClassNames(): string[];
	    componentDidMount(): void;
	    /**
	     * Clears out the textboxes
	     */
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any[] | null;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    onChange_textBoxEnd(evt: any): void;
	    onChange_textBoxStart(evt: any): void;
	    onChange(): void;
	    onMouseOver(event: any): void;
	    onMouseOut(event: any): void;
	    isValidNumber(txtBox: any): any;
	    checkDirty(): void;
	    showErrorTip(txtBox: any): void;
	    hideErrorTip(): void;
	    isRangeValid(): boolean;
	    /**
	     *Wipes out the text boxes
	     */
	    reset(): void;
	    setActualSize(w: any, h: any): void;
	    /**
	     *Sets the focus on the first checkbox
	     */
	    focus(): void;
	    /**
	     * Returns the minimum value of the range
	     */
	    getMinValue(): number;
	    /**
	     * Returns the maximum value of the range
	     */
	    getMaxValue(): number;
	    /**
	     *If the range is valid, returns the first value of the range.
	     */
	    getSearchRangeStart(): number | null;
	    /**
	     *If the range is invalid, returns the last value of the range.
	     */
	    getSearchRangeEnd(): number | null;
	    /**
	     * The start of the range
	     */
	    getRangeStart(): number;
	    /**
	     *
	     */
	    setRangeStart(o: any): void;
	    /**
	     *Returns an array of [rangeStart,rangeEnd]
	     */
	    getRange(): any[] | null;
	    /**
	     *
	     */
	    setRange(value: any): void;
	    /**
	     * The end of the range
	     */
	    getRangeEnd(): number;
	    /**
	     * The start of the range
	     */
	    setRangeEnd(o: any): void;
	}

}
declare module 'flxs-react-datagrid/js/controls/Spinner' {
	import Image from 'flxs-react-datagrid/js/controls/Image';
	/**
	 * A Image that which can be used within the filtering/binding infrastructure.
	 * @class Image
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Spinner extends Image {
	    constructor();
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/controls/TextInput' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A TextInput  that implements ITextFilterControl (IFilterControl) and ITextDataBoundControl (IDataBoundControl)
	 * which enables it to be used within the filtering/binding infrasturcture. It also adds support for a number
	 * of features like autocomplete, inside and outside icons, etc.
	 * @class TextInput
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class TextInput extends UIComponent {
	    constructor(props: any, tag: any, shouldInit: any);
	    componentDidMountCustom(): void;
	    addTemplate(): void;
	    setWidth(w: any): void;
	    sizeComponents(): void;
	    getClassNames(): string[];
	    onFocusIn(event: any): void;
	    onFocusOut(event: any): void;
	    onTextInputDelayedChange(event: any): void;
	    /**
	     * If the mouse is clicked up, and we dont own the target, kill autocomplete.
	     * @param event
	     *
	     */
	    onAutoCompleteMouseUpHandler(event: any): void;
	    /**
	     * Apply the list item value.
	     */
	    onAutoCompleteItemClick(event: any): void;
	    /**
	     * Applies the selected item from the list to the autocomplete textbox
	     *
	     */
	    applyAutoCompleteValue(): void;
	    keyDownHandler(e: any): void;
	    /**
	 * If the mouse is clicked up, and we dont own the target, kill autocomplete.
	 * @param event
	 */
	    keyUpHandler(event: any): void;
	    /**
	     * @private
	     */
	    refreshAutoComplete(): void;
	    /**
	     * Shows the autocomplete.
	     * @private
	     */
	    showAutoComplete(): void;
	    /**
	     * Destroys the autocomplete list.
	     *
	     */
	    destroyAutoComplete(): void;
	    /**
	     * Based on the autoCompleteMatchType, filter the autocomplete dataprovider that
	     * @param item
	     * @return
	     *
	     */
	    filterAutoCompete(item: any): boolean;
	    dispatchEvent(evt: any): any;
	    onTimerComplete(event: any): void;
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    /**
	     * Returns the inner text input
	     */
	    getTextBox(): any;
	    /**
	     * Returns the icon within the text input (This is usually the clear icon)
	     */
	    getInsideIcon(): any;
	    /**
	     * Returns the icon outside the span (This is usually the picker icon)
	     */
	    getOutsideIcon(): any;
	    /**
	     * Sets the visibility of the icons when there is text in the box on basis of the showIconWhenHasText flag.
	     */
	    setIconVisible(event: any): void;
	    /**
	     * Sets the provided value as the source for the auto complete options.
	     */
	    setDataProvider(val: any): void;
	    /**
	     * When icon is enabled, handles the click event of the icon. If clearTextOnIconClick is set to true, clears the text.
	     * Dispatches the INSIDE_ICON_CLICK event.
	     * @param evt
	     **/
	    onInsideIcon(evt: any): void;
	    onInsideIconLoad(evt: any): void;
	    onOutsideIconLoad(evt: any): void;
	    /**
	     * When icon is enabled, handles the click event of the icon. If clearTextOnIconClick is set to true, clears the text.
	     * Dispatches the INSIDE_ICON_CLICK event.
	     * @param evt
	     **/
	    onOutsideIcon(evt: any): void;
	    /**
	     * Dispatches the filter programmatic.
	     **/
	    forceFilter(): void;
	    /**
	     * Sets the focus on the textbox
	     **/
	    focus(): void;
	    getText(): any;
	    setText(val: any): void;
	    /**
	     * Sets the selection on the text box.
	     **/
	    setSelection(begin: any, end: any): void;
	    setMaxLength(len: any): void;
	    validate(evt: any): void;
	    setPlaceHolder(placeHolder: any): void;
	    getPlaceHolder(): any;
	}

}
declare module 'flxs-react-datagrid/js/controls/TriStateCheckBox' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A Checkbox  that implements ITriStateCheckBoxFilterControl (IFilterControl)
	 * which enables it to be used within the filtering/binding infrasturcture.
	 * In addition to the on and off states supported by the regular check box, the Tristate checkbox supports
	 * an additional middle state, which is depicted by a checkbox with a fill, an is designed to indicate
	 * that the checkbox is neither on or off, just in a undefined/null state.
	 * @class TriStateCheckBox
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class TriStateCheckBox extends UIComponent {
	    constructor();
	    getClassNames(): string[];
	    dispatchEvent(event: any): any;
	    onTimerComplete(event: any): void;
	    clear(): void;
	    /**
	     * Generic function that returns the value of a IFilterControl
	     */
	    getValue(): any;
	    /**
	     * Generic function that sets the value of a IFilterControl
	     * @param val
	     */
	    setValue(val: any): void;
	    /**
	     * Returns one of STATE_MIDDLE|STATE_CHECKED|STATE_UNCHECKED
	     * on basis of what the user has selected.
	     */
	    getSelectedState(): any;
	    /**
	     * Switches the state to middle state.
	     */
	    setMiddle(val: any): void;
	    /**
	     * Returns if the current state is middle state.
	     */
	    getMiddle(): any;
	    setSelectedState(val: any): void;
	    setActualSize(w: any, h: any): void;
	    /**
	     * The width of this label
	     * @return
	     */
	    getWidth(): any;
	    /**
	     * The height of this label
	     * @return
	     */
	    getHeight(): any;
	    /**
	     * Default click handler
	     * @param event
	     **/
	    clickHandler(event: any): void;
	    /**
	     * On basis of the selectedState, sets the icon
	     **/
	    updateDisplayList(w: any, h: any): void;
	    setSelected(val: any): void;
	    getSelected(): any;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/core/DisplayList' {
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * This class keeps track of all display list objects that are in need of validation.
	 * This class supports deferred rendering, to prevent the UI from having to refresh on each
	 * property change. Instead, once all property changes are committed, the UI can refresh.
	 * This class is supposed to be used as a singleton. Do NOT instantiate new DisplayList objects
	 * instead, use DisplayList.instance().
	 * @constructor
	 * @class DisplayList
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class DisplayList extends EventDispatcher {
	    constructor();
	    getClassNames(): any[];
	    /**
	     * Singleton DisplayList Instance.
	     */
	    static instance(): any;
	    /**
	     * Removes all event listeners
	     */
	    kill(): void;
	    /**
	     * Queues the provided object for a validate call. Once the validateObjects method is called, all the queued objects
	     * get their render method called on them.
	     * @param obj Object to invalidate
	     */
	    addInvalidObject(obj: any): void;
	    /**
	     * If you wish to remove the object from a validation queue prior to it being rendered.
	     * @param obj Object that was previously invalidated.
	     */
	    removeInvalidObject(obj: any): void;
	    /**
	     * Instantly validates all objects, rather than waiting for them to validate.
	     */
	    validateObjects(): void;
	    /**
	     * An object to validate now, rather than waiting for the invalidation timer
	     * @param obj   An object to validate now
	     */
	    validateNow(obj: any): void;
	}

}
declare module 'flxs-react-datagrid/js/core/EventDispatcher' {
	import React from 'react';
	/**
	 * A base class for all objects that are capable of dispatching events.
	 * @constructor
	 * @class EventDispatcher
	 * @namespace flexiciousNmsp
	 */
	export default class EventDispatcher extends React.Component {
	    constructor(props: any, arg1: any, arg2: any);
	    constructed(): void;
	    /**
	     * Returns true if the class name to check is in the list of class names defined for this class.
	     * @method implementsOrExtends
	     * @param name Name of the class to check
	     * @return {Boolean}
	     */
	    implementsOrExtends(name: any): any;
	    getClassNames(): any[];
	    /**
	     * Registers an event listener object with an EventDispatcher object so that the listener receives notification of an event.
	     * If you no longer need an event listener, remove it by calling removeEventListener(), or memory problems could result.
	     * Event listeners are not automatically removed from memory because the garbage collector does not remove the listener as long as the dispatching object exists.
	     *
	     * @param context  The "this" property in the event listener function will be set to the value of this parameter.
	     * @param type  The type of event.
	     * @param listener  The listener function that processes the event. This function must accept an Event object as its
	     * only parameter and must return nothing
	     */
	    addEventListener(context: any, type: any, listener: any): void;
	    /**
	     * Removes a listener from the EventDispatcher object.
	     * If there is no matching listener registered with the EventDispatcher object, a call to this method has no effect.
	     * @param type  The type of event.
	     * @param listener  The listener function that processes the event. This function must accept an Event object as its
	     * only parameter and must return nothing
	     */
	    removeEventListener(type: any, listener: any): void;
	    /**
	     * Returns true if an event listener exists
	     * @param type  The type of event.
	     * @return {Boolean}
	     */
	    hasEventListener(type: any): boolean;
	    /**
	     * Dispatches an event into the event flow.
	     * The event target is the EventDispatcher object upon which the dispatchEvent() method is called.
	     *
	     * @param event The Event object that is dispatched into the event flow.
	     */
	    dispatchEvent(event: any): boolean;
	    /**
	     * Removes all event listeners
	     */
	    kill(): void;
	    /**
	     * Given an array of event dispatchers, calls the kill method on each of them.
	     * @param arr   The list of event dispatchers to kill.
	     */
	    killArray(arr: any): void;
	    /**
	     * Gets the value of the prop property on this object
	     */
	    getStyle(prop: any): any;
	    /**
	     * Sets the value of the prop property on this object
	     */
	    setStyle(prop: any, val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/core/NameSpaces' {
	export default class NameSpaces {
	}

}
declare module 'flxs-react-datagrid/js/core/ReactDataGridCellContainer' {
	import React from 'react';
	/**
	 * This class is the base class for all Flexicious classes. It defines the basis for the
	 * Object oriented design, by implementing the "implementsOrExtends" function, which is a
	 * replacement for the "is" keyword from other OO languages.
	 * @namespace flexiciousNmsp
	 * @class TypedObject
	 * @name TypedObject
	 */
	export default class ReactDataGridCellContainer extends React.Component {
	    constructor(props: any);
	    shouldComponentUpdate(): boolean;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    componentWillMount(): void;
	    componentWillUpdate(): void;
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/core/TypedObject' {
	/**
	 * This class is the base class for all Flexicious classes. It defines the basis for the
	 * Object oriented design, by implementing the "implementsOrExtends" function, which is a
	 * replacement for the "is" keyword from other OO languages.
	 * @namespace flexiciousNmsp
	 * @class TypedObject
	 * @name TypedObject
	 */
	export default class TypedObject {
	    constructor();
	    constructed(): void;
	    /**
	     * Returns true if the class name to check is in the list of class names defined for this class.
	     * @method implementsOrExtends
	     * @param name Name of the class to check
	     * @return {Boolean}
	     */
	    implementsOrExtends(name: any): any;
	    /**
	     * Returns a list of strings that represent the object hierarchy for this object.
	     * @return {Array}
	     * @method getClassNames
	     */
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/core/UIComponent' {
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * A Utility class that contains generic functions needed in multiple
	 * places.
	 * @constructor
	 * @class UIComponent
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class UIComponent extends EventDispatcher {
	    static clearPendingUpdates(): void;
	    static flushPendingUpdates(): void;
	    constructor(propsOrTagName: any, tagName: any, shouldInit: any);
	    initFromProps(props: any): void;
	    componentWillReceiveProps(nextProps: any): void;
	    componentWillMount(): void;
	    componentWillUpdate(): void;
	    getAllChildren(): any;
	    render(): any;
	    setStateIfDomPresent(state: any, db: any): void;
	    removeComponentAttribute(attr: any): void;
	    getStyleAttribute(attr: any): any;
	    getAttribute(attr: any): any;
	    setComponentStyleAttribute(attr: any, val: any): void;
	    mergeObjects(obj1: any, obj2: any): {};
	    setStyleAttribute(attr: any, val: any): void;
	    setAttribute(attr: any, val: any): void;
	    getComponentStyleAttribute(attr: any): any;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    getClassNames(): any[];
	    /**
	     * Sets the domElement of this UIComponent to the specified element, and creates a property on the dom element
	     * called component to this.
	     * @param elem  The domElement to associate with the current UIComponent.
	     */
	    setDomElement(elem: any): void;
	    /**
	     * Recursively iterates through the parent hierarchy of the given element to check to see if the current node is
	     * in its parent hierarchy.
	     * @param elem  The element to check
	     * @return {Boolean}    If the current node is in the hierarchy of the given element
	     */
	    owns(elem: any): boolean;
	    /**
	     * Called as a part of render phase.
	     * @param w
	     * @param h
	     */
	    updateDisplayList(w: any, h: any): void;
	    /**
	     * This method will queue the component so the display list will render it once the current frame of execution is over.
	     */
	    invalidateDisplayList(): void;
	    /**
	     * Any initialization code is supposed to go in this method.
	     */
	    initialize(): void;
	    /**
	     * This methods takes another UIComponent object, and adds it to the dom as a child of the domElement of this UIComponent.
	     * @param child Can be either another UIComponent or a DomElement.
	     */
	    addChild(child: any): void;
	    /**
	     * This methods takes another UIComponent object, and adds it to the dom as a child of the domElement of this UIComponent.
	     * @param child Can be either another UIComponent or a DomElement.
	     * @param idx to add the child at
	     */
	    addChildAt(child: any, idx: any): void;
	    /**
	     * This methods takes another UIComponent object, and removes it from the dom.
	     * @param child Can be either another UIComponent or a DomElement.
	     */
	    removeChild(child: any): void;
	    removeAllChildren(child: any): void;
	    /**
	     * This methods takes another UIComponent object, and removes it from the dom.
	     */
	    removeChildAt(idx: any): void;
	    /**
	     * Converts the given local Point to global co-ordinates.
	     * @param ptIn {flexiciousNmsp.Point}
	     * @return {flexiciousNmsp.Point}
	     */
	    localToGlobal(ptIn: any): any;
	    /**
	     * Converts the given global Point to local co-ordinates.
	     * @param ptIn {flexiciousNmsp.Point}
	     * @return {flexiciousNmsp.Point}
	     */
	    globalToLocal(ptIn: any): any;
	    /**
	     * Gets the number of children of the dom element associated with this UIComponent.
	     * @return {*}
	     */
	    numChildren(): any;
	    /**
	     * Returns the child of the domElement at the specified index.
	     * @param idx
	     * @return {*}
	     */
	    getChildAt(idx: any): any;
	    /**
	     * First, calls super.kill(), which takes out all event listeners. Then, removes all the dom event listeners
	     * that we add. Then, wipes out the reference on the domElement. Then, wipes out the domElement reference.
	     * Finally, removes itself from the display list if its pending validation.
	     */
	    kill(): void;
	    /**
	     * When you call addEventListener on a UIComponent, certain events, defined by the domEvents array are also associated
	     * with the corresponding domElement. This method is used to add such event listeners.
	     * @param evt   Event to add
	     * @param f     Event listener to add.
	     */
	    addDomEventListener(evt: any, f: any): void;
	    /**
	     * Removes a previously attached DOM event listener.
	     * @param evt   Event to add
	     * @param f     Event listener to add.
	     */
	    removeDomEventListener(evt: any, f: any): void;
	    /**
	     * Calls super.addEventListener, and for dom based events, also adds a HTML Event listener
	     */
	    addEventListener(context: any, type: any, listener: any): void;
	    /**
	     * Calls super.addEventListener, and for dom based events, also removes the previously added HTML Event listener
	     */
	    removeEventListener(type: any, listener: any): void;
	    /**
	     * Calls super.addEventListener, and for dom based events, also removes the previously added HTML Event listener
	     */
	    removeEventListenerKeepDomListener(type: any, listener: any): void;
	    /**
	     * The event handler that gets triggered from the HTML DOM.
	     * @param event Event from the HTML DOM.
	     */
	    domEventFired(event: any): void;
	    validateNow(): void;
	    setActualSize(w: any, h: any): void;
	    validateNowIfValid(): void;
	    getWidth(): any;
	    setWidth(val: any): any;
	    getHeight(): any;
	    getPixelHeight(): any;
	    setHeight(val: any): any;
	    setActualSizeFromDomElement(): void;
	    /**
	     * Returns the width of the given text.
	     */
	    measureText(textToMeasure: any): {
	        width: any;
	    };
	    /**
	     * Getter for the text property
	     */
	    getText(): any;
	    /**
	     * Setter for the text property
	     * @param val
	     */
	    setText(val: any): void;
	    /**
	     * Getter for the innerHTML property
	     */
	    getInnerHTML(): any;
	    /**
	     * Setter for the innerHTML property
	     * @param val
	     */
	    setInnerHTML(val: any): void;
	    focus(): void;
	    /**
	     * Sets the X and Y co ordinates of the current dom element
	     */
	    move(x: any, y: any): void;
	    /**
	     * Gets the X co ordinate
	     */
	    getX(): any;
	    /**
	     * Gets the Y co ordinate
	     */
	    getY(): any;
	    /**
	     * Sets the X co ordinate
	     */
	    setX(val: any): any;
	    /**
	     * Sets the Y co ordinate
	     */
	    setY(val: any): any;
	    /**
	     * Sets the visible flag
	     */
	    setVisible(val: any): void;
	    /**
	     * Sets the visible flag
	     */
	    getVisible(val: any): any;
	    /**
	     * Sets the enabled flag
	     */
	    setEnabled(val: any): void;
	    /**
	     * Sets the enabled flag
	     */
	    getEnabled(): any;
	    /**
	     * Sets the visible flag
	     */
	    setChildIndex(child: any, index: any): void;
	    getHorizontalScrollPolicy(): any;
	    getVerticalScrollPolicy(): any;
	    setHorizontalScrollPolicy(policy: any): void;
	    setVerticalScrollPolicy(policy: any): void;
	    /**
	     *
	     */
	    getVerticalScrollPosition(): any;
	    /**
	     *
	     */
	    setVerticalScrollPosition(val: any): any;
	    /**
	     *
	     */
	    getHorizontalScrollPosition(): any;
	    /**
	     *
	     */
	    setHorizontalScrollPosition(val: any): any;
	    /**
	     *
	     */
	    getAutomationName(): any;
	    /**
	     *
	     */
	    setAutomationName(val: any): void;
	    /**
	     * This is a getter/setter for the data property. When the cell is created, it belongs to a row
	     * The data property points to the item in the grids dataprovider that is being rendered by this cell.
	     */
	    getData(): any;
	    /**
	     * This is important, because the grid looks for a "setData" method on the renderer.
	     * @param val
	     */
	    setData(val: any): void;
	    setErrorString(val: any): void;
	    getErrorString(val: any): any;
	    setHandCursor(val: any): void;
	    attachClass(newClass: any): void;
	    detachClass(newClass: any): void;
	    setToolTip(val: any): void;
	    ownsPoint(pt: any): boolean;
	    getIncludeInLayout(val: any): any;
	    setIncludeInLayout(val: any): void;
	    setState(newState: any): void;
	    setStateInternal(newState: any): void;
	    getElementByTagName(tag: any): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/ExpandCollapseIcon' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A Class responsible for rendering the expand collapse icon inside a cell.
	 * @class ExpandCollapseIcon
	 * @constructor
	 */
	export default class ExpandCollapseIcon extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * refreshing the contents of a cell.
	     */
	    refreshCell(): void;
	    /**
	     *When icon is enabled, handles the click event of the icon.
	     */
	    doClick(): void;
	    /**
	     *
	     * @param iexp
	     */
	    static refreshCell(iexp: any): void;
	    /**
	     *
	     * @param expandCollapseComponent
	     */
	    static doClick(expandCollapseComponent: any): void;
	    /**
	     *
	     * @param iexp
	     */
	    static drawIcon(iexp: any): void;
	    /**
	     *
	     * @return {Level}
	     */
	    getLevel(): any;
	    /**
	     *
	     * @return {RowInfo}
	     */
	    getRowInfo(): any;
	    /**
	     *
	     * @return {window}
	     */
	    getCell(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridColumnGroupCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * A container class for all column group cells. In addition to the functionality it inherits from FlexDataGridCell,
	 * it adds support for the following feautres:
	 * <ul>
	 * <li>Ability to span across multiple columns to visually appear as a single column header</li>
	 * </ul>
	 * FlexDataGridColumnGroupCell inherits from FlexDataGridCell, which provides a bulk of the functionality to it.
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridColumnGroupCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridColumnGroupCell extends FlexDataGridCell {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * Destroy function.
	      */
	    destroy(): void;
	    /**
	     * handles columns Resize event.
	     * @param event
	     */
	    onColumnsResized(event: any): void;
	    /**
	     *  handles the refreshing the contents of a cell.
	     */
	    refreshCell(): void;
	    /**
	     * handle the invalidateWX.
	     * @param event
	     */
	    invalidateWX(event: any): void;
	    /**
	     *
	     * @param unscaledWidth
	     * @param unscaledHeight
	     */
	    updateDisplayList(unscaledWidth: any, unscaledHeight: any): void;
	    /**
	     *
	     * @return {DisplayObject}
	     */
	    getColumnGroupIcon(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getRolloverColor(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): any;
	    /**
	     *
	     * @return {*|Boolean|Boolean|Boolean|*}
	     */
	    getDrawTopBorder(): any;
	    /**
	     *
	      * @return {String}
	     */
	    getPrefix(): string;
	    /**
	     * If there is a columnGroup associated, returns its startColumn property. Else returns
	     * the default column associated with this cell.
	     */
	    getColumn(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridDataCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridDataCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridDataCell extends FlexDataGridCell {
	    constructor(props: any, tagName: any);
	    invalidateDisplayList(): void;
	    /**
	     *
	     */
	    getClassNames(): string[];
	    /**
	     * This method is responsible for preparing the cell for display. It gets triggered both the first
	     * time the cell is intantiated, and again when the cell is pulled out from cache, and also when the
	     * cell is assigned to another row data object during vertical scrolling, or another column during
	     * horizontal scrolling.
	     *
	     * For all cells, It performns the following steps:
	     * <ul>
	     * <li>It sets the doubleClickEnabled flag on the cell on basis of grid.enableDoubleClickEdit||grid.doubleClickEnabled</li>
	     * <li>It sets the automationName to friendly name</li>
	     * <li>It sets the destroyed flag to false</li>
	     * <li>It sets the currentBackgroundColors and currentTextColors to null</li>
	     * <li>It sets the styleName property on the renderer to the level</li>
	     * <li>It dispatches the RENDERER_INITIALIZED event, if one is wired up</li>
	     * <li>For checkbox based cells, it calls the initializeCheckBoxRenderer method</li>
	     * <li>If enableExpandCollapse is set to true, it initializes the expand collapse icon component</li>
	     * <li>It calls the placeComponent method</li>
	     * <li>If enableIcon method is set to true, it initializes the icon component</li>
	     * </ul>
	     * For data cells, It performns the following additional steps:
	     * <ul>
	     * <li>It sets the textDecoration, useHandCursor, selectable, truncateToFit properties</li>
	     * <li>For checkbox based cells, it sets the enabled flag based upon the checkRowSelectable method of the level</li>
	     * </ul>
	     * For header cells, It performns the following additional steps:
	     * <ul>
	     * <li>It creates the sort icon, if one is necessary, and hides the renderer, if the hideHeaderText flag is set to true</li>
	     * </ul>
	     * For footer cells, It performns the following additional steps:
	     * <ul>
	     * <li>Calculates, formats and displays the footer value based upton the footerOperation or footerLabelFunction and other footer related properties</li>
	     * </ul>
	     */
	    refreshCell(): void;
	    /**
	     * In case of column.enableHierarchicalNestIndent, returns maxPaddingCellWidth else returns zero
	     */
	    getLeftPadding(): any;
	    highlight(forceHighlight: any): void;
	    removeHighlight(): void;
	    getTextFields(): any[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridExpandCollapseCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridExpandCollapseCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridExpandCollapseCell extends FlexDataGridCell {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * handles the Destroy of this cell.
	     */
	    destroy(): void;
	    /**
	     * Refreshing the contenets of this cell.
	     */
	    refreshCell(): void;
	    /**
	     * handle doClick
	     */
	    doClick(): void;
	    /**
	     * handles the onClick event.
	     * @param event
	     */
	    onClick(event: any): void;
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): any;
	    /**
	     *
	     * @param w
	     * @param h
	     */
	    setActualSize(w: any, h: any): void;
	    /**
	     *
	     * @return {IFlexDataGridCell}
	     */
	    getCell(): this;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getDrawTopBorder(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsExpandCollapseCell(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLocked(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getPrefix(): "" | "header" | "pager" | "footer" | "filter" | "renderer";
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLeftLocked(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsRightLocked(): any;
	    /**
	     *
	     * @return {IExpandCollapseComponent}
	     */
	    getIExpandCollapseComponent(): this;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridExpandCollapseHeaderCell' {
	import FlexDataGridExpandCollapseCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridExpandCollapseCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridExpandCollapseHeaderCell
	 * @namespace flexiciousNmsp
	 */
	export default class FlexDataGridExpandCollapseHeaderCell extends FlexDataGridExpandCollapseCell {
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @return {Boolean}
	     */
	    getDrawTopBorder(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridFilterCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridFilterCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridFilterCell extends FlexDataGridCell {
	    /**
	     *
	      * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     */
	    getIconUrl(over: any): null;
	    /**
	     *
	     */
	    getTextColors(): any;
	    /**
	     *
	     */
	    initializeCheckBoxRenderer(renderer: any): void;
	    /**
	     *
	     */
	    getRolloverColor(): any;
	    /**
	     * handles destroy of a cell
	     * @method destroy
	     */
	    destroy(): void;
	    /**
	     * Refreshing the contens of this cell.
	     * @method refreshCell
	     */
	    refreshCell(): void;
	    /**
	     * Returns one of the following values on basis of what type of cell this is:
	     * <ul>
	     * <li>Blank string for data cells</li>
	     * <li>header</li>
	     * <li>footer</li>
	     * <li>filter</li>
	     * <li>columnGroup</li>
	     * <li>pager</li>
	     * </ul>
	     * @return {String}
	     * @method getPrefix
	     */
	    getPrefix(): string;
	    /**
	     * Calculated property that controls whether or not to draw the top border. Each cell in Ultimate will draw its own background
	     * and border. In order to prevent cells from drawing double borders (cell above me drew bottom border, so I should not need
	     * to draw my top border), this flag evaluates to false. But in certain cases, you may want to draw both top and bottom border.
	     * The bottom border is always controlled by the horizontalGridLines style property. The top border is controlled by the drawTopBorder
	     * style property. In order to provide fine grained control over border drawing functionality, there are the following style
	     * properties available.
	     * <ul>
	     * <li>drawTopBorder</li>
	     * <li>headerDrawTopBorder</li>
	     * <li>footerDrawTopBorder</li>
	     * <li>pagerDrawTopBorder</li>
	     * <li>filterDrawTopBorder</li>
	     * <li>columnGroupDrawTopBorder</li>
	     * </ul>
	     * To control the bottom border, the following properties are available:
	     * <ul>
	     * <li>horizontalGridLines</li>
	     * <li>headerHorizontalGridLines</li>
	     * <li>footerHorizontalGridLines</li>
	     * <li>pagerHorizontalGridLines</li>
	     * <li>filterHorizontalGridLines</li>
	     * <li>columnGroupHorizontalGridLines</li>
	     * </ul>
	     * @return {*|Boolean|Boolean|*}
	     * @method getDrawTopBorder
	     */
	    getDrawTopBorder(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridFooterCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridFooterCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridFooterCell extends FlexDataGridCell {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Refreshing the contents of this cell.
	     */
	    refreshCell(): void;
	    /**
	     * a.	The default text of the footer is calculated on basis of the following logic: <br/>
	     * i.	First we check to see if a footerLabelFunction2 is specified on the column. If so, we use it.<br/>
	     * ii.	Second, we check to see if there is a footerLabelFunction specified on the column. If so, we use it.<br/>
	     * iii.	Finally, if neither of these is specified, we use a default footer label function, which performs the following logic:<br/>
	     * 1.	Checks to see the value of the columns footerOperation. The valid values for this property are sum, min, max, count and average. On basis of this , it computes the value.<br/>
	     * 2.	It calls toFixed method passing in the footerOperationPrecision value to give it the appropriate number of decimal places<br/>
	     * 3.	If there is a footerFormater specified, it calls the format method of the footerFormatter passing in the value and displays the result.<br/>
	     * 4.	If there is a footerLabel specified, it will concatenate the value of the footer label to the result of the calculated value in step 3.<br/>
	     * @method calculateValue
	     * @return {String}
	     */
	    calculateValue(flat: any): void;
	    /**
	     * 1.	Checks to see the value of the columns footerOperation. The valid values for this property are sum, min, max, count and average. On basis of this , it computes the value.<br/>
	     * 2.	It calls toFixed method passing in the footerOperationPrecision value to give it the appropriate number of decimal places<br/>
	     * 3.	If there is a footerFormater specified, it calls the format method of the footerFormatter passing in the value and displays the result.<br/>
	     * 4.	If there is a footerLabel specified, it will concatenate the value of the footer label to the result of the calculated value in step 3.<br/>
	     * @param col
	     * @method defaultLabelFunction
	     * @return {String}
	     */
	    defaultLabelFunction(col: any): any;
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): any;
	    /**
	     *
	     * @param renderer
	     * @type DisplayObject
	     */
	    initializeCheckBoxRenderer(renderer: any): void;
	    /**
	     *
	     * @return {String}
	     */
	    getRolloverColor(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getPrefix(): string;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getDrawTopBorder(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridHeaderCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * A container class for all header cells. In addition to the functionality it inherits from FlexDataGridCell,
	 * it adds support for the following feautres:
	 * <ul>
	 * <li>Ability to trigger a column resize</li>
	 * <li>Ability to render sort icons and multiColumnSort labels</li>
	 * <li>Ability to render and initialize the checkbox header</li>
	 * </ul>
	 *
	 * FlexDataGridHeaderCell inherits from FlexDataGridCell, which provides a bulk of the functionality to it.
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridHeaderCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridHeaderCell extends FlexDataGridCell {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * Removes the sort icon and the sort label
	     */
	    destroySortIcon(): void;
	    /**
	     * handles the mouse move event.
	     * @param event
	     */
	    onMouseMove(event: any): void;
	    /**
	     *
	     * @param x
	     * @param y
	     */
	    move(x: any, y: any): void;
	    /**
	     * Default handler for the sort label click. (The sort label is only shown when the
	     * enableMultiColumnSortFlag is set to true).
	     * If the grid.getEnableSplitHeader() is true and the column is sortable, sort is handled by
	     * the headerContainers onHeaderCellClicked method. Otherwise, this method will launch the
	     * multiColumnSortPopUp.
	     */
	    onSortLabelClick(event: any): void;
	    /**
	     * Creates the sort icon. Depending whether the enableMultiColumnSort
	     * flag is set to true, this method will create a sort label as well, which
	     * is responsible for initializing the icon.
	     */
	    createSortIcon(container: any): void;
	    /**
	     * Sets the size of the renderer, accounting for the width of the split header or the icon.
	     * If enableSplitHeader is set to true, reduces the renderer's width by grid.headerSortSeparatorRight
	     * If sort icon is rendererd, reduces the renderer's width by the icons width.
	     * @inheritDoc
	     */
	    setRendererSize(cellRenderer: any, w: any, h: any): void;
	    /**
	     * handles destroy of this cell.
	     */
	    destroy(): void;
	    /**
	     * handle the header click event.
	     * @param event
	     */
	    onHeaderClick(event: any): void;
	    /**
	     * Refreshing the contents of this cell.
	     */
	    refreshCell(): void;
	    componentDidMountCustom(): void;
	    /**
	     * Places the sort icon after it is created. By default the column is placed 3 pixels from the right, half way from the top.
	     * If the enableMultiColumnSort flag is set to true, the label is places above or below the icon based on if it is ascending or
	     * descending respectively.
	     */
	    placeSortIcon(): void;
	    /**
	     * Draws the little gray line between the header that does the actual sort
	     * and the multi column sort part of the header that adds the current column to the existing sort.
	     */
	    drawSortSeparator(): void;
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): any;
	    /**
	     *
	     * @param renderer
	     * @type DisplayObject
	     */
	    initializeCheckBoxRenderer(renderer: any): void;
	    /**
	     * Handler for checkbox check change.
	     * If the target is the top level (grid.getColumnLeve()) checkbox, dispatches the SELECT_ALL_CHECKBOX_CHANGED event, and calls
	     * selectAll on the associated top level.
	     * Calls level.selectRow method based on checkbox state, and whether or not grid.enableSelectionExclusion is set to true.
	     */
	    onCheckChange(event: any): void;
	    /**
	     *
	     * @param checkLevel
	     * @param items
	     * @param checked
	     */
	    selectLevel(checkLevel: any, items: any, checked: any): void;
	    /**
	     *
	     * @return {String}
	     */
	    getRolloverColor(): any;
	    /**
	     * Returns icon!=null
	     */
	    getIsSorted(): boolean;
	    /**
	     *
	     * @return {String}
	     */
	    getPrefix(): string;
	    /**
	     * @inheritDoc
	     */
	    getDrawTopBorder(): any;
	    /**
	     *
	     * @param value
	     */
	    setColumn(value: any): void;
	    placeComponent(cellRenderer: any, unscaledWidth: any, unscaledHeight: any, usePadding: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridHeaderSeperator' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridHeaderSeperator
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridHeaderSeperator extends UIComponent {
	    constructor();
	    getClassNames(): string[];
	    componentWillMount(): void;
	    componentWillUpdate(): void;
	    setColorFromGrid(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridLevelRendererCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridLevelRendererCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridLevelRendererCell extends FlexDataGridCell {
	    getClassNames(): string[];
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getRolloverColor(): any;
	    /**
	     * Refreshing the contents of this cell.
	     */
	    refreshCell(): void;
	    /**
	     *
	     * @return {String}
	     */
	    getPrefix(): string;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getDrawTopBorder(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridPaddingCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridPaddingCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridPaddingCell extends FlexDataGridCell {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * handles destroy of this cell.
	     */
	    destroy(): void;
	    /**
	     *
	     */
	    setActualSize(w: any, h: any): void;
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): number;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLocked(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getPrefix(): "" | "header" | "pager" | "footer" | "filter" | "renderer";
	    /**
	     * Refreshing the contenets of this cell.
	     */
	    refreshCell(): void;
	    /**
	     * @return {*|Boolean|Boolean|Boolean|*|Boolean|Boolean}
	     */
	    getDrawTopBorder(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLeftLocked(): any;
	    /**
	     *
	     */
	    getIsRightLocked(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridPagerCell' {
	import FlexDataGridCell from 'flxs-react-datagrid/js/flexgrid/cells/FlexDataGridCell';
	/**
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridPagerCell
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridPagerCell extends FlexDataGridCell {
	    getClassNames(): string[];
	    /**
	     *
	     * @return {String}
	     */
	    getBackgroundColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getTextColors(): any;
	    /**
	     *
	     * @return {String}
	     */
	    getRolloverColor(): any;
	    /**
	     *
	     * @param w
	     * @param h
	     */
	    setActualSize(w: any, h: any): void;
	    /**
	     * handles destroy of this cell.
	     */
	    destroy(): void;
	    /**
	     * Refreshing the contents of this cell.
	     */
	    refreshCell(): void;
	    /**
	     *
	     * @return {String}
	     */
	    getPrefix(): string;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getDrawTopBorder(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLocked(): boolean;
	    setWidth(value: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/BaseEvent' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Base class for all events using the Flexicious Event Dispatcher mechanism.
	 * @constructor
	 * @class BaseEvent
	 * @namespace flexiciousNmsp
	 *
	 * @param type
	 * @param [bubbles]
	 * @param [cancelable]
	 * @constructor
	 */
	export default class BaseEvent extends TypedObject {
	    constructor(type: any, bubbles: any, cancelable: any);
	    getClassNames(): any[];
	    /**
	     * Has the default for this event been prevented. This is true if the preventDefault method has been called.
	     * @return {Boolean}
	     * @method isDefaultPrevented
	     */
	    isDefaultPrevented(): any;
	    /**
	     * If this event is cancelable, then the default prevented flag is set to true.
	     * @return {Boolean}
	     * @method preventDefault
	     */
	    preventDefault(): void;
	    /**
	     * If this event is cancelable, then the default prevented flag is set to true.
	     * @return {Boolean}
	     * @method stopPropagation
	     */
	    stopPropagation(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/ExtendedFilterPageSortChangeEvent' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * A version of the FilterPageSortChangeEvent, however, this one has a advanced filter which
	 * contains the level information in addition to the regular filter.
	 * @constructor
	 * @class ExtendedFilterPageSortChangeEvent
	 * @namespace
	 *
	 */
	export default class ExtendedFilterPageSortChangeEvent extends BaseEvent {
	    constructor(type: any, filter: any, bubbles: any, cancelable: any);
	    getClassNames(): string[];
	    /**
	     * Creates a new instance of this event.
	     */
	    clone(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/FilterPageSortChangeEvent' {
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * Event fired when the filter, page or sort state of the grid changes.
	 * @constructor
	 * @class FilterPageSortChangeEvent
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FilterPageSortChangeEvent extends BaseEvent {
	    constructor(type: any, filter: any, bubbles: any, cancelable: any);
	    getClassNames(): string[];
	    /**
	     *
	     * @return {flexiciousNmsp.FilterPageSortChangeEvent}
	     */
	    clone(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridEvent' {
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * Class that holds information about all events that the grid will dispatch.
	 * @constructor
	 * @class FlexDataGridEvent
	 * @namespace flexiciousNmsp
	 *
	 *
	 * @param [type]
	 * @param [grid]
	 * @param [level]
	 * @param [column]
	 * @param [cell]
	 * @param [item]
	 * @param [triggerEvent]
	 * @param [bubbles]
	 * @param [cancelable]
	 * @constructor
	 */
	export default class FlexDataGridEvent extends BaseEvent {
	    constructor(type: any, grid: any, level: any, column: any, cell: any, item: any, triggerEvent: any, bubbles: any, cancelable: any);
	    getClassNames(): any[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridItemEditEvent' {
	import FlexDataGridEvent from 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridEvent';
	/**
	 * A utility event that holds a data object
	 * @constructor
	 * @class FlexDataGridItemEditEvent
	 * @namespace flexiciousNmsp
	 */
	export default class FlexDataGridItemEditEvent extends FlexDataGridEvent {
	    constructor(type: any, grid: any, level: any, column: any, cell: any, item: any, triggerEvent: any, bubbles: any, cancelable: any);
	    getClassNames(): any[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridPrintEvent' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * For Print Based Events.
	 * @constructor
	 * @class FlexDataGridPrintEvent
	 * @namespace flexiciousNmsp.events
	 *
	 */
	export default class FlexDataGridPrintEvent extends BaseEvent {
	    constructor(type: any, grid: any, printGrid: any, bubbles: any, cancelable: any);
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/FlexDataGridVirtualScrollEvent' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * When grid.enableVirtualScroll=true, the grid dispatches a virtualScroll event when the grid scrolls.
	 * This event contains a recordsToLoad array, which contains an series of VirtualScrollLoadInfo records.
	 * This provides the application a list of record indexes to load, and which levels to load them at.
	 *
	 * In flat grids, the FlexDataGridVirtualScrollEvent.recordsToLoad will always contain a list of VirtualScrollLoadInfo records were level=1.
	 * For nested grids, depending on where the user scrolls and which items are open, you could get a list of records from multiple levels,
	 * for example. Records 1-3 from level 1, All children of record 3 from level 2, and then Record 4-10 from level 1.
	 *
	 * Setting enableVirtualScroll requires that you specify childrenCountField as well as selectedKeyField.
	 * Additionally, enableVirtualScroll also requires that you set filterPageSortMode=server and
	 * itemLoadMode=server. Finally, virtual scroll does not work with variableRowHeights.
	 * @constructor
	 * @class FlexDataGridVirtualScrollEvent
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridVirtualScrollEvent extends BaseEvent {
	    constructor(type: any, grid: any, recordsToLoad: any, bubbles: any, cancelable: any);
	    getClassNames(): any[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/PreferencePersistenceEvent' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * Dispatched when the grids' preferencePersistenceMode='server' and:
	 * 1) The Grid needs to retrieve the preference data from the server
	 * 2) The Grid needs to persist the  preference data to the server
	 * 3) The Grid needs to clear out its preference data.
	 *
	 * @constructor
	 * @class PreferencePersistenceEvent
	 * @namespace flexiciousNmsp
	 *
	 * @param type
	 * @param preferenceKey
	 * @param preferenceXml
	 * @param [bubbles]
	 * @param [cancelable]
	 * @constructor
	 */
	export default class PreferencePersistenceEvent extends BaseEvent {
	    constructor(type: any, preferenceKey: any, preferenceXml: any, bubbles: any, cancelable: any);
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/events/WrapperEvent' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 * A utility event that holds a data object
	 * @constructor
	 * @class WrapperEvent
	 * @namespace flexiciousNmsp
	 *
	 * @param type
	 * @param data
	 * @param [bubbles]
	 * @param [cancelable]
	 */
	export default class WrapperEvent extends BaseEvent {
	    constructor(type: any, data: any, bubbles: any, cancelable: any);
	    getClassNames(): any[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/CsvExporter' {
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	/**
	 * Exports the grid in CSV format
	 * @constructor
	 * @class CsvExporter
	 * @namespace flexiciousNmsp
	 */
	export default class CsvExporter extends Exporter {
	    getClassNames(): string[];
	    /**
	     * Writes the header of the grid (columns) in csv format
	     * @param grid
	     * @return {String}
	     * @method writeHeader
	     */
	    writeHeader(grid: any): string;
	    /**
	     * Builds the CSV representation of a header row.
	     * @param grid
	     * @return {String}
	     * @method buildHeader
	     */
	    buildHeader(grid: any): string;
	    /**
	     * Escapes CSV characters to make valid CSV string
	     * @param val
	     * @return {String|XML}
	     * @method escapeCsv
	     */
	    escapeCsv(val: any): any;
	    /**
	     * Writes an individual record in csv format
	     * @param grid
	     * @param record
	     * @return {String}
	     * @method writeRecord
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * CsvExporter.SCIENTIFIC_NOTATION_THRESHOLD=1000000;
	     * Writes the footer in CSV format
	     * @method writeFooter
	     * @param grid
	     * @param dataProvider
	     * @return {String}
	     *
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Extension of the download file.
	     * @return {String}
	     * @method getExtension
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so MS Excel launches
	     * when the exporter is run.
	     * @return {String}
	     * @method getContentType
	     *
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     * @method getName
	     *
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/DocExporter' {
	import HtmlExporter from 'flxs-react-datagrid/js/flexgrid/export/HtmlExporter';
	/**
	 * Exports the grid in DOC format
	 * @constructor
	 * @class DocExporter
	 * @namespace flexiciousNmsp
	 */
	export default class DocExporter extends HtmlExporter {
	    getClassNames(): string[];
	    /**
	     * Extension of the download file.
	     * @return {String}
	     *
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so MS Word launches
	     * when the exporter is run.
	     * @return {String}
	     *
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/Excel2007Exporter' {
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	/**
	 * Exports the grid in CSV format
	 * @constructor
	 * @namespace
	 */
	export default class Excel2007Exporter extends Exporter {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Writes the header of the grid (columns) in Excel 2007 format
	     * @param {flexiciousNmsp.FlexDataGrid} grid
	     */
	    writeHeader(grid: any): string;
	    /**
	     * @private
	     * @param grid
	     * @return
	     */
	    buildHeader(grid: any): void;
	    /**
	     * Just in case in the client wants to customize the upload
	     * behavior of their exporters.
	     * @param body
	     * @param exportOptions
	     * @method uploadForEcho
	     */
	    uploadForEcho(body: any, exportOptions: any): void;
	    /**
	     * Writes an individual record in csv format
	     * @param grid
	     * @param record
	     * @return
	        *
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * Writes the footer in CSV format
	     * @param grid
	     * @param dataProvider
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Extension of the download file.
	     * @return
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so MS Excel launches
	     * when the exporter is run.
	     * @return
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return
	        *
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/ExcelExporter' {
	import HtmlExporter from 'flxs-react-datagrid/js/flexgrid/export/HtmlExporter';
	/**
	 * An extension to the basic HTML Exporter that exports excel
	 * @constructor
	 * @class ExcelExporter
	 * @namespace flexiciousNmsp
	 */
	export default class ExcelExporter extends HtmlExporter {
	    getClassNames(): string[];
	    /**
	     * Writes the header of the grid (columns) in excel format
	     * @param grid
	     * @return {String}
	     */
	    writeHeader(grid: any): string;
	    /**
	     * Writes the footer in excel format
	     * @param grid
	     * @param dataProvider
	     * @return {String}
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Extension of the download file.
	     * @return {String}
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so MS Excel launches
	     * when the exporter is run.
	     * @return {String}
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/ExportController' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Main class responsible for exporting data.
	 * @constructor
	 * @class ExportController
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class ExportController extends TypedObject {
	    constructor();
	    getClassNames(): string[];
	    static instance(): any;
	    /**
	     * Exports the grid on basis of the provided
	     * Export options
	     * @param grid		The IExtendedDataGrid to export
	     * @param exportOptions	The Export Options (See com.flexicious.export.ExportOptions)
	     * @see com.flexicious.export.ExportOptions
	     */
	    doexport(grid: any, exportOptions: any): void;
	    /**
	     * Exports the grid on basis of the provided
	     * Export options
	     * @param grid		The IExtendedDataGrid to export
	     * @param exportOptions	The Export Options (See com.flexicious.export.ExportOptions)
	     * @see com.flexicious.export.ExportOptions
	     */
	    exportWithOptions(grid: any, exportOptions: any): void;
	    /**
	     * handles onExportOptionsClose event.
	     * @param event
	     * @method onExportOptionsClose
	     */
	    onExportOptionsClose(event: any): void;
	    /**
	     *  handles onExportOptionsCancel event.
	     * @param event
	     */
	    onExportOptionsCancel(event: any): void;
	    /**
	     * handles doExport.
	     */
	    doExport(): void;
	    /**
	     * handles dispatchDataRequest event.
	     */
	    dispatchDataRequest(): void;
	    /**
	     * handles onCancelExport event
	     * @param event
	     */
	    onCancelExport(event: any): void;
	    /**
	     * handles onPrintRequestDataRecieved
	     * @param event
	     */
	    onPrintRequestDataRecieved(event: any): void;
	    /**
	     * Just build up the doc header, body, footer and ask server
	     * to buffer it back
	     * @param iCollectionView
	     * @param allOrSelectedPages
	     */
	    runExport(iCollectionView: any, allOrSelectedPages: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/Exporter' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * psuedo abstract class responsible for most export functionality.
	 * @constructor
	 * @class Exporter
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Exporter extends TypedObject {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Writes out the header for the row
	     * @param grid
	     * @return {String}
	     * @method writeHeader
	     */
	    writeHeader(grid: any): string;
	    /**
	     * Writes out the record for the row
	     * @param grid
	     * @param record
	     * @return {String}
	     * @method writeRecord
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * Writes out the footer for the row
	     * @method writeFooter
	     * @param grid
	     * @param dataProvider
	     * @return {String}
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Gets the header for the row
	     * @param col
	     * @param colIndex
	     * @return {*}
	     * @method getColumnHeader
	     */
	    static getColumnHeader(col: any, colIndex: any): any;
	    /**
	     * Saves the file to disk, or sends it to a remote server to buffer back.
	     * @param body
	     * @param fileName
	     * @param exportOptions
	     * @method saveFile
	     */
	    saveFile(body: any, fileName: any, exportOptions: any): void;
	    /**
	     * Just in case in the client wants to customize the upload
	     * behavior of their exporters.
	     * @param body
	     * @param exportOptions
	     * @method uploadForEcho
	     */
	    uploadForEcho(body: any, exportOptions: any): void;
	    /**
	     * Not used
	     * @method uploadToServer
	     */
	    uploadToServer(body: any, exportOptions: any): void;
	    /**
	     * Checks whether this column should be exported
	     * @param col
	     * @return {Boolean|*}
	     * @method isIncludedInExport
	     */
	    isIncludedInExport(col: any): any;
	    /**
	     * Depending on the level, gets indentation spaces
	     * @param col
	     * @param spChar
	     * @return {String}
	     * @method getSpaces
	     */
	    getSpaces(col: any, spChar: any): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     * @method getName
	     */
	    getName(): string;
	    /**
	     * Extension of the download file.
	     * @return {String}
	     * @method getExtension
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so the appropriate application launches
	     * when the exporter is run.
	     * @return {String}
	     * @method getContentType
	     *
	     */
	    getContentType(): string;
	    /**
	     * The current nest depth of the record being exported
	     * @return {Number}
	     * @method getNestDepth
	     */
	    getNestDepth(): any;
	    /**
	     * The nest indent on basis of the nest depth
	     * @return {Number}
	     * @method getNestIndent
	     */
	    getNestIndent(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/ExportEvent' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import BaseEvent from 'flxs-react-datagrid/js/flexgrid/events/BaseEvent';
	/**
	 *
	 * @param type
	 * @param [bubbles]
	 * @param [cancelable]
	 * @constructor
	 * @class ExportEvent
	 */
	export default class ExportEvent extends BaseEvent {
	    constructor(type: any, bubbles: any, cancelable: any);
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/ExportOptions' {
	import PrintExportOptions from 'flxs-react-datagrid/js/flexgrid/utils/PrintExportOptions';
	/**
	 * Class to export the datagrid, either one page at a time
	 * or specific pages, or all pages.
	 * @constructor
	 * @class ExportOptions
	 * @namespace flexiciousNmsp
	 */
	export default class ExportOptions extends PrintExportOptions {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Convenience method to create an exporter of a specified type
	     * @param exporterIndex
	     * @return {ExportOptions}
	     */
	    static create(exporterIndex: any): ExportOptions;
	    /**
	     * Name of the current exporter.
	     */
	    getExporterName(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/ExportOptionsView' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A ExportOptionsView that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class ExportOptionsView
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class ExportOptionsView extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * set grid object
	     * @param val
	     * @method setGrid
	     */
	    setGrid(val: any): void;
	    /**
	     * handles onOk event
	     * @param domElement
	     */
	    onOK(domElement: any): void;
	    /**
	     * dispatch close dialog event
	     * @param dialogResult
	     */
	    close(dialogResult: any): void;
	    /**
	     * handles onCancel event
	     * @method onCancel
	     * @param evt
	     */
	    onCancel(evt: any): void;
	    /**
	     * @method showDialog
	     */
	    showDialog(): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/ExtendedExportController' {
	import ExportController from 'flxs-react-datagrid/js/flexgrid/export/ExportController';
	/**
	 * The nested grid does not show an export options window.
	 * We directly run the export based on the data that is currently being
	 * displayed in the grid.
	 * @constructor
	 * @class ExtendedExportController
	 * @namespace flexiciousNmsp.export
	 */
	export default class ExtendedExportController extends ExportController {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    static instance(): any;
	    /**
	     * Run the actual export.
	     */
	    doExport(): void;
	    /**
	     *
	     * @param [iCollectionView]
	     * @param [allOrSelectedPages]
	     *
	     */
	    runExport(iCollectionView: any, allOrSelectedPages: any): void;
	    /**
	     *
	     * @param iCollectionView
	     * @param level
	     */
	    runNestedExport(iCollectionView: any, level: any): void;
	    /**
	     *
	     * @param obj
	     * @param level
	     * @return {String}
	     */
	    writeRecord(obj: any, level: any): string;
	    /**
	     *
	     * @param level
	     */
	    setExportLevel(level: any): void;
	    /**
	     * The current export options
	     * @return {ExportOptions}
	     */
	    getExportOptions(): any;
	    /**
	     * The current grid being exported
	     * @return {IExtendedDataGrid}
	     */
	    getGrid(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/HtmlExporter' {
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	/**
	 * Exports the grid in HTML format
	 * @constructor
	 * @class HtmlExporter
	 * @namespace flexiciousNmsp
	 */
	export default class HtmlExporter extends Exporter {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @param grid
	     * @type IExtendedDataGrid
	     * @return {String}
	     */
	    writeHeader(grid: any): string;
	    /**
	     *
	     * @param grid
	     *  @type IExtendedDataGrid
	     * @return {String}
	     */
	    buildTh(grid: any): string;
	    startDocument(grid: any): void;
	    /**
	     * Builds the html representation of a header row.
	     * @param {IExtendedDataGrid} grid
	     * @param record
	     * @return {String}
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * Escapes html characters to make valid html string
	     * @param val
	     * @return {String|XML}
	     */
	    escapeHtml(val: any): any;
	    /**
	     * Writes the footer in HTML format
	     * @param grid
	     * @param dataProvider
	     * @return {String}
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Extension of the download file.
	     @return {String}
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so the browser launches
	     * when the exporter is run.
	     * @return {String}
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     */
	    getName(): string;
	    uploadForEcho(body: any, exportOptions: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/PdfExporter' {
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	/**
	 * Exports the grid in CSV format
	 * @constructor
	 * @namespace
	 */
	export default class PdfExporter extends Exporter {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Builds the PDF representation of a header row.
	     * @param grid
	     * @method writeHeader
	     */
	    writeHeader(grid: any): string;
	    /**
	     * @private
	     * @param grid
	     * @return
	     *
	     */
	    buildHeader(grid: any): void;
	    /**
	     * Just in case in the client wants to customize the upload
	     * behavior of their exporters.
	     * @param body
	     * @param exportOptions
	     * @method uploadForEcho
	     */
	    uploadForEcho(body: any, exportOptions: any): void;
	    /**
	     * Writes an individual record in PDF format
	     * @param grid
	     * @param record
	     * @return
	     *
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * Writes the footer in PDF format
	     * @param grid
	     * @param dataProvider
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Extension of the download file.
	     * @return
	     *
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so MS Excel launches
	     * when the exporter is run.
	     * @return
	     *
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return
	     *
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/TxtExporter' {
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	/**
	 * Exports the grid in text format
	 * @constructor
	 * @class TxtExporter
	 * @namespace flexiciousNmsp
	 */
	export default class TxtExporter extends Exporter {
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @param grid
	     * @return {String}
	     */
	    writeHeader(grid: any): string;
	    /**
	     * Builds the text representation of a header row.
	     * @param grid
	     * @return {String}
	     */
	    buildHeader(grid: any): string;
	    /**
	     * Writes an individual record in text format
	     * @param grid
	     * @param record
	     * @return {String}
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * Writes the footer in plain text format
	     * @param grid
	     * @param dataProvider
	     * @return {String}
	     */
	    writeFooter(grid: any, dataProvider: any): string;
	    /**
	     * Extension of the download file.
	     @return {String}
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so the text editor launches
	     * when the exporter is run.
	     @return {String}
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/export/XmlExporter' {
	import Exporter from 'flxs-react-datagrid/js/flexgrid/export/Exporter';
	/**
	 * Exports the grid in XML format
	 * @constructor
	 * @class XmlExporter
	 * @namespace flexiciousNmsp
	 */
	export default class XmlExporter extends Exporter {
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * Writes the header of the grid (columns) in Xml format
	     * @param grid
	     * @return {String}
	     */
	    writeHeader(grid: any): string;
	    /**
	     * Writes an individual record in xml format
	     * @param grid
	     * @param record
	     * @return {String}
	     */
	    writeRecord(grid: any, record: any): string;
	    /**
	     * Escapes XML characters to make valid xml string
	     * @param val
	     * @return {String|XML}
	     */
	    escapeXml(val: any): any;
	    /**
	     * Writes the footer in xml format
	     * @param grid
	     * @return {String}
	     */
	    writeFooter(grid: any): string;
	    /**
	     * Extension of the download file.
	     * @return {String}
	     */
	    getExtension(): string;
	    /**
	     * Returns the content type so the browser launches
	     * when the exporter is run.
	     * @return {String}
	     *
	     */
	    getContentType(): string;
	    /**
	     * Name of the exporter
	     * @return {String}
	     */
	    getName(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/ElasticContainer' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * @author Flexicious
	 * Attaches to the owner component (which is the bodyContainer) and scrolls vertically along with it.
	 * The horizontal scroll of this component is set to off)
	 * @constructor
	 * @class ElasticContainer
	 * @namespace flexiciousNmsp
	 */
	export default class ElasticContainer extends UIComponent {
	    constructor(grid: any);
	    componentDidMount(): void;
	    /**
	     *
	     * @method onGridMouseOut
	     * @param event
	     */
	    onGridMouseOut(event: any): void;
	    /**
	     *
	     * @method getClassNames
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * @method setBackgroudFillerSize
	     */
	    setBackgroudFillerSize(): void;
	    /**
	     * @method getScrollableRect
	     * @return {flexiciousNmsp.Rectangle}
	     */
	    getScrollableRect(): any;
	    /**
	     * @method kill
	     */
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGrid' {
	import NdgBase from 'flxs-react-datagrid/js/flexgrid/grids/NdgBase';
	/**
	 * <p>
	 * FlexDataGrid is the class name for Flexicious Ultimate, a DataGrid component built for the Flex SDK from the ground up to cater to the needs of UI developers who create complex Line of Business applications.<br/><br/>
	 *
	 * It attempts to provide most of the functionality that is currently available in the Adobe SDK DataGrid, AdvancedDataGrid, and the Flexicious Extensions in addition to a number of unique features. <br/><br/>
	 * </p>
	 * <p>
	 * Although Flexicious Ultimate offers all of the features outlined below, The ones in bold or italic are features that are exclusive to the Flexicious
	 * family of products, and not available in the Halo DataGrid/Advanced DataGrid components that ship with the SDK.
	 * The features in bold above are exclusive to Flexicious Ultimate. Features in italic are
	 * available both in Ultimate, as well as Flexicious Classic. The rest of the features are found
	 * in the Flexicious Grids, as well as either the SDK DataGrid or AdvancedDataGrid.
	 *
	 * Flexicious Ultimate attempts to bring to you a Single Grid, that incorporates all these features in one.
	 * </p>
	 * <ol>
	 * <li>Ability to organize information as rows and columns, with locked headers</li>
	 * <li>Ability to Customize the appearance Rows and Columns</li>
	 * <li>Inline Editing, Customizable Editors, with validation hooks</li>
	 * <li>User Interactive, Draggable, Resizable, Sortable and Editable Columns</li>
	 * <li>Fully Configurable Drag and Drop</li>
	 * <li>Keyboard Navigation</li>
	 * <li>Multi Column Sort</li>
	 * <li>Multi Level, Expand Collapse enabled Grouped Column Headers</li>
	 * <li>Single Cell, Single Row, Multiple Cell, Multiple Row selection modes.</li>
	 * <li>Support for UI skinning via styles, factories, as well as programmatic control</li>
	 * <li>Display of Homogenous Hierarchical Data (Single Set Of Columns)</li>
	 * <li><em>Inline Filtering, with numerous built in Filter Controls, and extensible architecture to define your own.</em></li>
	 * <li><em>Server and Client based Paging, with a fully Customizable Pager UI.</em></li>
	 * <li><em>Summary Footers, with fine tuned control over Formula, Precision, Formatting, Placement and Rendering of Footers.</em></li>
	 * <li><em>Print and Live Print Preview, with ability to control Page Size, Orientation, Columns To Print, Page/Report Headers and Footers.</em></li>
	 * <li><em>Ability to Export the Print output to any ActionScript PDF library, including Alive PDF</em></li>
	 * <li><em>Ability to create Customizable Reports with your own Headers/Footers.</em></li>
	 * <li><em>Ability to Export to Excel, Word, Text, XML and other formats. Ability to plug in your own Exporters</em></li>
	 * <li><em>Preference Persistence (Ability for your end users to save viewing preferences)</em></li>
	 * <li><em>CheckBox based selection of data, with Tri State CheckBox Header</em></li>
	 * <li><em>Customizable loading Animation</em></li>
	 * <li><b>Smooth Scrolling</b></li>
	 * <li><b>Display of Heterogonous Hierarchical Data (Multiple Sets Of Columns)</b></li>
	 * <li><b>Ability to define paging, filtering and summary footers at each hierarchical level</b></li>
	 * <li><b>Ability to define Fully Lazy Loaded, Partially Lazy Loaded and Initial Loaded Flat as well as Hierarchical Data Grids.</b></li>
	 * <li><b>Left and Right Locked columns</b></li>
	 * <li>A vast number of Business Scenarios supported out of the box:</li>
	 * 	<ul>
	 * 	<li><b>Cascading of row selection for hierarchical data</b></li>
	 * 	<li><b>Ability to control whether or not rows with no children are shown (For grouped entries)</b></li>
	 * 	<li><b>Drill Down/Drill Up/Drill To of Hierarchical data</b></li>
	 * 	<li><b>Toolbar action icons, with ability to define custom actions</b></li>
	 * 	<li><b>Ability to define initial sort values at any level</b></li>
	 * 	<li><b>Ability to programmatically navigate to a row</b></li>
	 * 	<li><b>Ability to show custom tooltip on hover over</b></li>
	 * 	<li><b>Ability to fully customize sizes, borders, backgrounds, and styles for any cell programmatically as well as via CSS</b></li>
	 * 	<li><b>Ability to define custom logic that control row selection, enabled, background, border.</b></li>
	 * 	<li><b>Auto adjustment of the height on basis of the number of rows displayed</b></li>
	 * 	<li><em>Read write nested properties of complex objects</em></li>
	 * 	<li><em>Automatic column width adjustment on basis of data</em></li>
	 * 	<li><em>Context menu based copying of data rows</em></li>
	 *  <li><em>Ability to define Hand Cursors, Underline, truncateToFit, wordWrap on the columns</em></li>
	 * 	<li><em>Ability to define various column width modes, like fitToContent, Percentage and Fixed</em></li>
	 * 	</ul>
	 * </ol>
	*/
	export default class FlexDataGrid extends NdgBase {
	    /**
	     * The constructor is responsible for instantiating the body container, header,footer,filter,pager containers,
	     * as well as the left/right Locked header/footer containers.
	     * @constructor FlexDataGrid
	     * @param props
	     * @param arg1
	     * @param arg2
	     */
	    constructor(props: any, arg1: any, arg2: any);
	    checkScrollEnabled(evt: any): void;
	    componentDidMount(): void;
	    getClassNames(): string[];
	    /**
	     * Method to create an instance of the FlexDataGridBodyContainer class.
	     * In case you need to implement custom logic by extending the FlexDataGridBodyContainer you will need to override this method.
	     * Creates an instance of FlexDataGridVirtualBodyContainer if enableVirtualScroll, else creates FlexDataGridBodyContainer
	     * @method createBodyContainer
	     */
	    createBodyContainer(): any;
	    /**
	     * Method to create an instance of the FlexDataGridHeaderContainer class.
	     * In case you need to implement custom logic by extending the FlexDataGridHeaderContainer you will need to override this method.
	     * @method createChromeContainer
	     */
	    createChromeContainer(): any;
	    /**
	     * The container for the filter cells. This is an instance of the FlexDataGridHeaderContainer class.
	     * This class manages cell initialization, recycling, mouse events on each cell, etc. The rows collection
	     * of this object will aways contain a single RowInfo object, which has a cells collection. This will
	     * be a series of ComponentInfo objects, which has a component property that will be an instance of FlexDataGridFilterCell
	     * Although the parent property of each of the cells could be either the
	     * leftLockedHeader, rightLockedHeader or the this.getFilterContainer(), the rowInfo is the same, so the cells will
	     * include left, right, and unlocked cells.
	     * @method getFilterContainer
	     */
	    getFilterContainer(): any;
	    /**
	     * Method to create an instance of the LockedContent class.
	     * In case you need to implement custom logic by extending the LockedContent you will need to override this method.
	     * The Left Locked Header, Left Locked Footer,Right Locked Header, and Right Locked Footer are all instance of LockedContent
	     * @method createLockedContent
	     */
	    createLockedContent(): any;
	    /**
	     * Method to create an instance of the ElasticContainer class.
	     * In case you need to implement custom logic by extending the ElasticContainer you will need to override this method.
	     * The Left Locked Content, and Right Locked Content are instances of ElasticContainer
	     * @method createElasticContainer
	     */
	    createElasticContainer(): any;
	    /**
	     * Transfers mouse wheel events over the locked left and right sections to scroll events on the body container,
	     * so we scroll when the user mouse wheels over the left or right locked containers.
	     * @method onMouseWheel
	     * @param event
	     */
	    onMouseWheel(event: any): void;
	    /**
	     *
	     * @method concatenatePersistenceValues
	     */
	    concatenatePersistenceValues(): string;
	    /**
	     *
	     *  Measures the DataGrid based on its contents,
	     *  summing the total of the visible column widths.
	     * @method measure
	     */
	    measure(): void;
	    componentWillReceiveProps(nextProps: any): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     * @method initialize
	     */
	    initialize(): void;
	    /**
	     *
	     * @method updateDisplayList
	     */
	    updateDisplayList(unscaledWidth: any, unscaledHeight: any): void;
	    invalidateDisplayList(): void;
	    /**
	     * Called when you scroll and expand collapse. When you do this, previously drawn rows
	     * may have been drawn with a different horizontal scroll position. So the cells that are
	     * currently in view may not have been drawn. This method will ensure that a pass at the
	     * horizontal recycle runs at the next update and we render the correct cells.
	     * @method
	     */
	    invalidateHorizontalScroll(): void;
	    /**
	     * When you have left or right locked sections, the scroll bar only covers the area occupied by the body container,
	     * or the unlocked columns section. So we do not show a blank whitespace in the area of the scroll bar in the locked
	     * sections, we place two sprites there, and this method is responsible for drawing and positioning these sprites.
	     * @method placeBottomBar
	     */
	    placeBottomBar(): void;
	    /**
	     * When enableDynamicLevels=true and there is only one level,
	     * we iterate through the data provider and ensure that the maximum depth
	     * has been accounted for.
	     * @method ensureLevelsCreated
	     *
	     */
	    ensureLevelsCreated(item: any, level: any): void;
	    /**
	     *
	     * @param event
	     * @method onCreationComplete
	     */
	    onCreationComplete(event: any): void;
	    /**
	     * In this method, we trap all double click events, walk up the target tree until we hit
	     * a IFlexDataGridDataCell object, and if we indeed double clicked a data cell, we dispatch and ITEM_DOUBLE_CLICK event.
	     * @method onDoubleClick
	     */
	    onDoubleClick(event: any): void;
	    /**
	     * Support for key board interaction.
	     * <br/>
	     * First, if allowInteractivity or enableKeyboardNavigation flags are not set, then we do not handle any keyboard interaction.
	     * <br/>
	     * If the body container is in edit mode, keyboard interaction that is handled is limited to the TAB and Enter keys, which will end the
	     * edit session and move on to the next cell or row on basis of which key has been selected.
	     * <br/>
	     * If we are in any of the filter control, the TAB and SHIFT TAB keys will move between the filter controls. Once you focus on a filter control,
	     * all keyboard interaction except TAB, SHIFT TAB and Arrow Keys is handled by the Filter Control in question. These are all Flex SDK controls, and you should
	     * refer to the the documentation of the SDK control for more information about its keyboard interaction. Arrow keys will move focus out of the filter control
	     * and highlight the next cell (for down arrow) or the header (for up arrow) on basis of what the displayOrder property of the grid specifies.
	     * <br/>
	     * For TextInput Filter control where filterTriggerEvent=enterKeyUp, hitting the enter key will cause the filter to run.
	     * <br/>
	     * For the most part, the Flexicious Ultimate grid's keyboard interactions are similar to the SDK datagrid, with one important difference.
	     * We have a concept of an active cell, which is the cell that is currently active either via a mouseover gesture, or via a arrow key navigation gesture.
	     * You can style this color of the active cell via the activeCellColor style. You can completely disable the active cell tracking by setting enableActiveCellHighlight
	     * to false.
	     *
	     * When the grid is not in edit mode, and focus is not on the filter but on a specific grid cell, the following keyboard interactions are available:
	     * <ul>
	     * <li>Keyboard.UP  : Navigates to the cell and row above the currently highlighted cell. The active cell is highligted via the activeCellColor style, and the active row is highligted via the rollover color style</li>
	     * <li>Keyboard.DOWN  : Navigates to the cell and row below the currently highlighted cell</li>
	     * <li>Keyboard.LEFT  : Navigates to the cell to the left the currently highlighted cell</li>
	     * <li>Keyboard.RIGHT : Navigates to the cell to the right the currently highlighted cell</li>
	     * <li>Keyboard.TAB : Relinquishes focus from the grid and moves on to the next focussable control in the display tree</li>
	     * <li>Keyboard.PAGE_DOWN: Moves the scroll bar down by the height of the grid and highlights the newly visible first row</li>
	     * <li>Keyboard.PAGE_UP: Moves the scroll bar up by the height of the grid and highlights the newly visible first row</li>
	     * <li>Keyboard.HOME: Moves the scroll to the top (i.e.) the first record of the grid and highlights the newly visible first row</li>
	     * <li>Keyboard.END: Moves the scroll to the end (i.e.) the last record of the grid and highlights the newly visible first row</li>
	     * <li>Keyboard.F2: </li>
	     * <li>Keyboard.NUMPAD_MULTIPLY OR CTRL + SHIFT + DOWN : If the current row can be expanded, expands it, AND all of its children. (Shows child records)</li>
	     * <li>Keyboard.NUMPAD_DIVIDE OR CTRL + SHIFT + UP : If the current row can be collapsed, collapses it. (Hides child records)</li>
	     * <li>Keyboard.NUMPAD_ADD OR CTRL + SHIFT + RIGHT : If the current row can be expanded, expands it. (Shows child records)</li>
	     * <li>Keyboard.NUMPAD_SUBSTRACT OR CTRL + SHIFT + LEFT : If the current row can be collapsed, collapses it. (Hides child records)</li>
	     * <li>Keyboard.SPACE: Performs the equivalent of a click on the active cell</li>
	     * </ul>
	     *
	     * @method keyDownHandler
	     */
	    keyDownHandler(event: any): void;
	    /**
	     *
	     * Not used, because it is handled by the grid itself.
	     * @method keyUpOrDown
	     */
	    keyUpOrDown(keyCode: any): void;
	    /**
	     *
	     * @method onGridMouseOut
	     */
	    onGridMouseOut(event: any): void;
	    /**
	     * If a noDataMessage value is specified, and a dataprovider with zero records is set, calls the showMessage function passing in the noDataMessage, which in turn
	     * shows the value of the noDataMessage using the Spinner component with its spinner hidden.
	     * @method checkNoDataMessage
	     */
	    checkNoDataMessage(force: any): void;
	    /**
	     * Clears out the following collections
	     * <ul>
	     * <li>All Open Items</li>
	     * <li>All Errors</li>
	     * <li>Selection (only if clearSelectionOnDataProviderChange==true)</li>
	     * <li>Some internal housekeeping collections</li>
	     * </ul>
	     * @method clearAllCollections
	     */
	    clearAllCollections(): void;
	    /**
	     * Sets changes to an empty array.
	     * @method clearChanges
	     */
	    clearChanges(): void;
	    /**
	     * The grid is composed of the following sections:
	     *
	     * Left Locked Header <br/>
	     * Left Locked Content <br/>
	     * Left Locked Footer <br/>
	     * Right Locked Header <br/>
	     * Right Locked Content <br/>
	     * Right Locked Footer <br/>
	     * UnLocked Header <br/>
	     * UnLocked Content <br/>
	     * UnLocked Footer <br/>
	     *
	     * On basis of the column lock modes specified, this method will
	     * size each section and place them in the correct location.
	     * @method placeSections
	     */
	    placeSections(): void;
	    /**
	     * Used by filter to identify where relative position for each control for tabbing
	     * @method getFilterX
	     */
	    getFilterX(renderer: any): any;
	    /**
	     * For some operations, like shift tab and tab key up, purposely pause the Container keyboard listenters,
	     * so we do not overwrite the work of one keyboard handler by triggering another.
	     * @method pauseKeyboardListeners
	     */
	    pauseKeyboardListeners(filterRenderer: any): void;
	    /**
	     * Given a IFlexDataGridCell, returns a container that holds that cell.
	     * @param cell The IFlexDataGridCell object to get the container for.
	     * @return The container that holds the provided cell. Can be either one of the below:
	     * <ul>
	     * <li>headerContainer</li>
	     * <li>filterContainer</li>
	     * <li>footerContainer</li>
	     * <li>pagerContainer</li>
	     * <li>bodyContainer</li>
	     * </ul>
	     * @method getContainerForCell
	     */
	    getContainerForCell(cell: any): any;
	    /**
	     * Returns the section above or below the provided section. Based on the displayOrder property,
	     * the grid will stack the various sections in order specified by the user. This method uses
	     * the displayOrder property to figure out which container exists above or below the specified
	     * section.
	     * @param container Name of the section. Must be one of the displayOrder strings (filter,header,body,footer,pager).
	     * @param up    Whether to return the section above or below
	     * @return A FlexDataGridContainerBase object
	     * @method getContainerInDirection
	     */
	    getContainerInDirection(container: any, up: any): any;
	    /**
	     * Given a container, returns its displayOrder string equivalent. Based on the displayOrder property,
	     * the grid will stack the various sections in order specified by the user. This method uses
	     * the takes a container and returns the associated displayOrder property.
	     * Container Should be one of the following:
	     * <ul>
	     * <li>headerContainer</li>
	     * <li>filterContainer</li>
	     * <li>footerContainer</li>
	     * <li>pagerContainer</li>
	     * <li>bodyContainer</li>
	     * </ul>
	     * Will return one of the following:
	     * <ul>
	     * <li>header</li>
	     * <li>filter</li>
	     * <li>footer</li>
	     * <li>pager</li>
	     * <li>body</li>
	     * </ul>
	     * @param container    The container to look for.
	     * @method getContainerName
	     */
	    getContainerName(container: any): "body" | "header" | "pager" | "footer" | "filter";
	    /**
	     * Given a displayOrder string , returns its container equivalent. Based on the displayOrder property,
	     * the grid will stack the various sections in order specified by the user. This method uses
	     * the takes a displayOrder string and returns the associated container.
	     * Display Order String Should be one of the following:
	     * <ul>
	     * <li>header</li>
	     * <li>filter</li>
	     * <li>footer</li>
	     * <li>pager</li>
	     * <li>body</li>
	     * </ul>
	     * Will return one of the following:
	     * <ul>
	     * <li>headerContainer</li>
	     * <li>filterContainer</li>
	     * <li>footerContainer</li>
	     * <li>pagerContainer</li>
	     * <li>bodyContainer</li>
	     * </ul>
	     * @method getNamedContainer
	     */
	    getNamedContainer(name: any): any;
	    /**
	     * @private
	     * @method placeSectionByName
	     */
	    placeSectionByName(name: any, thisY: any): any;
	    /**
	     * Goes through all the sections and resizes the cells to match the current column widths.
	     * If you update the column widths programatically, call this to resize the currently visible cells.
	     * @method snapToColumnWidths
	     */
	    snapToColumnWidths(): void;
	    /**
	     *
	     * @method createComponents
	     */
	    createComponents(currentScroll: any): void;
	    /**
	     * @method onContextMenuSelect
	     */
	    onContextMenuSelect(event: any): void;
	    /**
	     * @method setContextMenuShownFalse
	     */
	    setContextMenuShownFalse(): void;
	    /**
	     * Method to handle the click for the copy cell menu item
	     * Copies the current cell in tab delimited format into the clipboard
	     * @param event
	     * @method onCellContextMenuItemClick
	     */
	    onCellContextMenuItemClick(event: any): void;
	    /**
	     * Method to handle the click for the copy row menu item
	     * Copies the current row in tab delimited format into the clipboard
	     * @method onRowContextMenuItemClick
	     * @param event
	     */
	    onRowContextMenuItemClick(event: any): void;
	    /**
	     * Triggered when the drag is complete. Does nothing. Use the dragDropCompleteFunction
	     * to wire up custom logic.
	     * @method dragComplete
	     * @param event
	     */
	    dragComplete(event: any): void;
	    /**
	     * Iterates through the passed in cols, calls itemToLabel on each of them
	     * passing in the item, and return the resulting string in tab delimited format.
	     * Converts an objects properties into tab delimited format
	     * @method getRowText
	     *
	     * @param {Object} item
	     * @param {Array} cols
	     * @return {String} return string value
	     */
	    getRowText(item: any, cols: any): string;
	    /**
	     * @method onRootFilterChange
	     * @param event
	     */
	    onRootFilterChange(event: any): void;
	    /**
	     * Processes filters at the root level.
	     * 1) Ensures the root filter exists<br/>
	     * 2) In filterPageSortMode="client", invalidates the row position info objects, so they are rebuilt<br/>
	     * 3) In filterPageSortMode="client", Calls the create components method on each of the container sections.<br/>
	     * 4) In Server mode, gathers the filter information, and dispatches a filterPageSortChange event, for the client code to listen to.<br/>
	     * @method processFilter
	     */
	    processFilter(): void;
	    /**
	     *
	     * @method processRootFilter
	     * @param triggerEvent
	     */
	    processRootFilter(triggerEvent: any): void;
	    /**
	     *
	     * @param event
	     * @method onRootPageChange
	     */
	    onRootPageChange(event: any): void;
	    /**
	     * @private
	     */
	    showHideVScroll(show: any, scrollBarWidth: any): void;
	    /**
	     * @private
	     */
	    showHideHScroll(show: any, scrollBarHeight: any): void;
	    /**
	     * Gets the text of the tooltip to show to the user to prompt for the multi column sort.
	     * @method multiColumnSortGetTooltip
	     */
	    multiColumnSortGetTooltip(cell: any): string;
	    /**
	     * Creates an instance of the multiSortRenderer and pushes it into view
	     * @method multiColumnSortShowPopup
	     */
	    multiColumnSortShowPopup(): void;
	    /**
	     * Updates the visible state of all row selection checkboxes and header checkboxes.
	     * @method refreshCheckBoxes
	     */
	    refreshCheckBoxes(): void;
	    /**
	     * Calls the refresh cell method on all visible cells in the bodyContainer section. <br/>
	     * The refreshCell method re-evaulates the following properties:<br/>
	     * <ul>
	     * <li> Cell Text </li>
	     * <li> Cell Enabled </li>
	     * <li> Cell data </li>
	     * <li> Various style properties like text decoration, underline </li>
	     * <li> Sets the width, and places the renderer appropriately. </li>
	     * <li> Dispatches the renderer intialized event. </li>
	     * </ul>
	     * If you wish to re evaluate the background/border, use the invalidate cells instead.
	     * @method refreshCells
	     */
	    refreshCells(): void;
	    /**
	     * @private
	     * @method onColumnResized
	     */
	    onColumnResized(event: any): void;
	    /**
	     * @private
	     * @method onSelectAllChanged
	     */
	    onSelectAllChanged(event: any): void;
	    /**
	     * @private
	     * @method onSelectChanged
	     */
	    onSelectChanged(event: any): void;
	    setupScrollTimer(): void;
	    /**
	     * @method onContainerScroll
	     */
	    onContainerScroll(evt: any): void;
	    /**
	     * @method recycleH
	     */
	    recycleH(right: any): void;
	    /**
	     * In lazy loaded grid levels, (filterPageSortMode=server), when
	     * the user expands a level for the first time, since the data
	     * is not loaded, the level dispatches the filterPageSortChange, or itemLoad.
	     *
	     * This event is then handled by client code, and when the data
	     * is retreieved from the server, this method should be called
	     * with the item being expanded, and children to insert.
	     *
	     * @param item         The item that is being expanded. You can pass in an ID value if you set useSelectedKeyField=true (default)
	     * @param children     The list of items to add to the children collection of the item being expanded
	     * @param level    The parent level (the level at which the item object is located).
	     * @param totalRecords Total number of child records. Only applicable if the filterPageSortMode for the child level is server. Use this parameter to tell the level that you are showing the first page of totalRecords records
	     * @param useSelectedKeyField    Flag to indicate whether to use the selectedKeyField to identify the item being expanded, or
	     * to compare against the item directly against the list of items pending expansion.
	     * @method setChildData
	     */
	    setChildData(item: any, children: any, level: any, totalRecords: any, useSelectedKeyField: any): void;
	    /**
	     * Invalidates the display (Calls invalidateDisplayList of all the cells).
	     * This will re-evaluate the backgroud and borders of each cell.
	     * There are four functions that you can use to redraw the grid, on basis of what your needs are.
	     * <ul>
	     * <li>rebuild : Most expensive. Rebuilds the entire grid. This is also the most expensive function</li>
	     * <li>reDraw  : Removes the cells in view, and redraws them. Should be used when there are no additions/removals to the data provider</li>
	     * <li>refreshCells : Resets the text,enabled, styles and border/background etc. of the currently visible cells. See the refreshCells() function for details.</li>
	     * <li>invalidateCells : Least expensive. Only resets the border/background of the currently visible cells. </li>
	     * </ul>
	     * @method invalidateCells
	     * */
	    invalidateCells(): void;
	    /**
	     * Calls the rebuild function, which basically rebuild the entire grid. This is also the most expensive functions.
	     * There are four functions that you can use to redraw the grid, on basis of what your needs are.
	     * <ul>
	     * <li>rebuild : Most expensive. Rebuilds the entire grid. This is also the most expensive function</li>
	     * <li>reDraw  : Removes the cells in view, and redraws them. Should be used when there are no additions/removals to the data provider</li>
	     * <li>refreshCells : Resets the text,enabled, styles and border/background etc. of the currently visible cells. See the refreshCells() function for details.</li>
	     * <li>invalidateCells : Least expensive. Only resets the border/background of the currently visible cells. </li>
	     * </ul>
	     * @method invalidateList
	     */
	    invalidateList(): void;
	    /**
	     * Clears the selected rows and cells.
	     * @method clearSelection
	     */
	    clearSelection(): void;
	    /**
	     * Gets the cell in the specified direction of the provided cell
	     * @param cell        The cell to start searching at.
	     * @param direction    The direction to search. Should be one of FlexDataGrid.CELL_POSITION_XXXX constants
	     * @return The cell, if one matches the provided criteria, or null
	     * @method getCellInDirection
	     */
	    getCellInDirection(cell: any, direction: any): any;
	    /**
	     * Returns a iterable representation of the dataprovider. If it is a hierarchical collection
	     * view, returns the source property of the underlying Hierarchical Data object else returns dataprovider as is.
	     * @method getRootFlat
	     */
	    getRootFlat(): any;
	    /**
	     * For hierarchical data grids, returns the data provider as a flat list that matches the
	     * specified criteria.
	     *
	     * @param depthRequested    The depth until which to recurse.
	     * @param inclusive            Whether to add the parent object to the resulting
	     * @param filter            Whether to run filter while getting children of parent objects
	     * @param page                Whether to page while getting children of parent objects
	     * @param sort                Whether to sort while getting children of parent objects
	     * @param max                The maximum number of records to return
	     * @return {Array}
	     * @method flatten
	     */
	    flatten(depthRequested: any, inclusive: any, filter: any, page: any, sort: any, max: any): any;
	    /**
	     * When the dataprovider changes or when new data comes in from the server for lazy loaded grids, you can call this to clear out the flattened cache.
	     *
	     * @method clearFlattenedCache
	     */
	    clearFlattenedCache(): void;
	    flattenRecursive(depthRequested: any, result: any, parent: any, level: any, inclusive: any, filter: any, page: any, sort: any): void;
	    /**
	     * On basis of the highLight flag, removes or adds highlight to the row in question. Triggered in response
	     * to a rollover event.
	     *
	     * Sets the currentBackgroundColors property is a result of the following logic.
	     * When highLight=true
	     * <ul>
	     * <li>If enableActiveCellHighlight=true uses the value of the activeCellColor style.</li>
	     * <li>Else, uses the value of the rollOverColor style property.</li>
	     * </ul>
	     * When highLight=false, sets it to null.
	     * <br/>
	     * Sets the currentTextColors property is a result of the following logic.
	     * <ul>
	     * <li>When highLight=true, sets it to value of the textRollOverColor property</li>
	     * <li>When highLight=false, sets it to null.</li>
	     * </ul>
	     *
	     * @param cell    The IFlexDataGridCell to highligh or remove the highlight from
	     * @param row    The rowInfo object associated with this cell.
	     * @param highLight    Whether to add a highlight or remove the highlight
	     * @param highLightColor    If you want to override the color that is calculated using the logic above.
	     * @method highlightRow
	     */
	    highlightRow(cell: any, row: any, highLight: any, highLightColor: any): void;
	    /**
	     * Triggered when drag is starting. Use the dragAvailableFunction to control whether drag proceeds
	     * @param event
	     * @method  gin
	     */
	    dragBegin(event: any): void;
	    onDragMove(evt: any): void;
	    onDragEnd(event: any): void;
	    /**
	     * @method dragEnterInternal
	     */
	    dragEnterInternal(event: any): void;
	    /**
	     * @method dragDropInternal
	     */
	    dragDropInternal(event: any): void;
	    /**
	     * Called when the DragEnter event is dispatched over any of the cells.
	     * The event is passes in as is.
	     * @param event
	     * @method dragEnter
	     */
	    dragEnter(event: any): void;
	    /**
	     * Called when the drag enters over a cell. Use the dropAcceptRejectFunction to control behavior
	     * @method dragAcceptReject
	     */
	    dragAcceptReject(cell: any): void;
	    /**
	     * Scrolls to the row that appears at the specified vertical position
	     * @param vsp            Vertical Position to Scroll to
	     * @param scrollDown     Whether you are scrolling up or down
	     * @method scrollToExistingRow
	     *
	     */
	    scrollToExistingRow(vsp: any, scrollDown: any): void;
	    /**
	     * Given a data object and a colum, return the IFlexDataGridDataCell object for the combination
	     * @param data        The row data
	     * @param column     The FlexDataGridColumn
	     * @method getCellForRowColumn
	     */
	    getCellForRowColumn(data: any, column: any): any;
	    /**
	     * Called to show the drop indicator below the passed in cells row. IF you
	     * wish to see custom drop signs, override this function.
	     * @method showDropIndicator
	     */
	    showDropIndicator(cell: any): void;
	    /**
	     * Called when the DragDrop event is dispatched over any of the cells.
	     * The event is passes in as is.
	     * @param event
	     * @method dragDrop
	     */
	    dragDrop(event: any): void;
	    /**
	     * Generates a snapshot of the row for the drag visual indicator
	     * @param cell
	     * @return
	     * @method generateImageForDrag
	     */
	    generateImageForDrag(cell: any): void;
	    /**
	     * @method invalidateSelection
	     */
	    invalidateSelection(): void;
	    /**
	     * @method placeComponents
	     */
	    placeComponents(row: any): void;
	    /**
	     * @method placeChildComponents
	     */
	    placeChildComponents(components: any): void;
	    /**
	     * Corner areas are special containers that exist to hold filter and header on the top
	     * and Pager and Footer on the bottom
	     * If I am filter cell, return 0 if filter is above header (true always)
	     * IF I am header cell, return filterHeight + (headerHeight * header Depth)
	     * If I am footer cell, return 0
	     * If I am pager cell, return pager footer height
	     * @method getCornerY
	     */
	    getCornerY(comp: any): any;
	    /**
	     * @method placeComponent
	     */
	    placeComponent(comp: any): void;
	    /**
	     */
	    addComponent(component: any): void;
	    addPopup(component: any): void;
	    removePopup(component: any): void;
	    /**
	     * @method drawDefaultSeperators
	     */
	    drawDefaultSeperators(): void;
	    /**
	     * Goes to the specified horizontal position. Going to a specified horizontal
	     * scroll position requires the renderers to recycle if the set of visible
	     * columns changes.
	     * @method gotoHorizontalPosition
	     */
	    gotoHorizontalPosition(vsp: any): void;
	    /**
	     * Goes to the specified vertical position. Going to a specified horizontal
	     * scroll position requires the renderers to recycle if the set of visible
	     * rows changes.
	     * @method gotoVerticalPosition
	     */
	    gotoVerticalPosition(vsp: any): void;
	    /**
	     * Removes all the sorts and calls doInvalidate.
	     *
	     * @method removeAllSorts
	     */
	    removeAllSorts(): void;
	    /**
	     * @method getPrintableColumns
	     */
	    getPrintableColumns(options: any): any[];
	    /**
	     * Returns the top level filter.
	     * @method createFilter
	     */
	    createFilter(): any;
	    /**
	     * Clears filters at all levels and rebuilds the grid.
	     * @method clearAllFilters
	     */
	    clearAllFilters(): void;
	    /**
	     * Clears the filters at all levels
	     * @method clearFilter
	     */
	    clearFilter(): void;
	    /**
	     * Inserts the column specified column before the specified column
	     * @method shiftColumns
	     */
	    shiftColumns(columnToInsert: any, insertBefore: any, level: any, movingCg: any): void;
	    /**
	     * Evaluates whether the given toolbar action is valid or not.
	     *
	     * If toolbarActionValidFunction is not null, returns the result of the function passing in the given ToolbarAction.
	     * Else returns true.
	     * @method isToolbarActionValid
	     */
	    isToolbarActionValid(action: any, currentTarget: any, extendedPager: any): any;
	    /**
	     * In addition to initial enable/disable of toolbar actions, this function
	     * can be used to enable or disable toolbar actions at run time.
	     * @method enableDisableToolbarAction
	     */
	    enableDisableToolbarAction(code: any, enable: any): void;
	    /**
	     * Gets the actual button object for the provided toolbar action.
	     * @param code
	     * @return
	     * @method getToolbarActionButton
	     */
	    getToolbarActionButton(code: any): any;
	    /**
	     * Sets a property or a style of the button object associated with the toolbar action
	     * that has the given code.
	     * @method setToolbarActionButtonProperty
	     */
	    setToolbarActionButtonProperty(toolbarActionCode: any, property: any, value: any): void;
	    /**
	     * Returns true if the getLength method on the result of the getChildren
	     * method returns more than 0
	     * @param item
	     * @return
	     * @method defaultDynamicLevelHasChildrenFunction
	     *
	     */
	    defaultDynamicLevelHasChildrenFunction(item: any): boolean;
	    /**
	     * A list of selected objects from the data provider. This is the sdk equivalent of selectedItems.
	         * We do not have selectedItems, but selectedObjects will almost always be the same as selectedItems.
	         * The only exception is when you use server side paging. In this case, selectedObjects will contain all the items
	         * selected, on all pages.
	         *
	         * When a row is selected in the grid, we store the  the selected object in the selectedObects array collection.
	         * This allows for multiple pages of data that comes down from the server and not maintained in memory
	         * to still keep track of the objects that were selected on other pages.
	         *
	         * Please note, for hierarchical grids, each level has its own collection of selected keys.
	         * The grid.selectedObjects returns the selectedKeys at the top level. To access the selected keys
	         * at a lower level, you may navigate to that level using grid.columnLevel.nextLevel...nextLevel.selectedKeys
	         * You can also call grid.selectedObjectsAtAllLevels to get selected objects at all levels.
	     * @method getSelectedObjects
	     */
	    getSelectedObjects(getKey: any, unSelected: any): any[];
	    /**
	     * Returns a copy of the open items array.
	     * @method getOpenObjects
	     */
	    getOpenObjects(): any;
	    /**
	     * A list of ID values, based on the selectedKeyField property.
	     * For hierarchical datagrids, used to get all open(expanded) records at all levels.
	     * Please NOTE - this is a read only collection. Adding to this does nothing.
	     *
	     * If you want to programatically modify the collapse expand, use the setOpenKeys instead, or add directly to the open items.
	     * @method getOpenKeys
	     * */
	    getOpenKeys(): any[];
	    /**
	     * For nested/grouped hierarchical datagrids, used to select records.
	     * Iterates through the data provider, matching each object, and if matches, adds the object
	     * to the grid.getOpenItems()
	     *
	     * When you reset the dataprovider via server call, the original objects that we were tracking with
	     * openItems are gone, so the grid no longer has  a handle to know which items to retain open. To combat
	     * this, you may use the following snippet:
	     *
	     * <p>
	     * var openKeys:Array=grid.getOpenKeys(); <br/>
	     * grid.dataProvider=yourNewDataProvider;<br/>
	     * grid.setOpenKeys(openKeys);<br/>
	     * </p>
	     *
	     * Please note, these API calls rely on the selectedKeyField being defined at each level, as well as the key values being unique.
	     * @method setOpenKeys
	     */
	    setOpenKeys(keys: any): void;
	    /**
	     * For nested/grouped hierarchical datagrids, used to select records.
	     * Iterates through the data provider, matching each object, and if matches, adds the object
	     * to the selectedObjects for the level
	     *
	     * Please see the documentation of setSelectedKeys for instructions on maintaining grid selection
	     * post a data provider refresh.
	     * @method setSelectedObjects
	     */
	    setSelectedObjects(objects: any, openItems: any): void;
	    /**
	     * For nested/grouped hierarchical datagrids, used to select records.
	     * Iterates through the data provider, matching each object, and if matches, adds the object
	     * to the selectedObjects for the level. Ensure that the selectedKeyField is set at the level.
	     *
	     * When you reset the dataprovider via server call, the original objects that we were tracking with
	     * selected objects are gone, so the grid no longer has  a handle to know which items to retain selected. To combat
	     * this, you may use the following snippet:
	     *
	     * <p>
	     * var selectedKeys:Array=grid.getSelectedKeys(); <br/>
	     * grid.dataProvider=yourNewDataProvider;<br/>
	     * grid.setSelectedKeys(selectedKeys);<br/>
	     * </p>
	     *
	     * Please note, these API calls rely on the selectedKeyField being defined at each level, as well as the key values being unique.
	     * @method setSelectedKeys
	     */
	    setSelectedKeys(objects: any, openItems: any): void;
	    /**
	     * When enableSelectionExclusion, returns a list of items that the user explicitly unselected.
	     * @method getUnSelectedKeys
	     */
	    getUnSelectedKeys(): any[];
	    /**
	     * Given a row index (less than the total number of rows, goes to the row in question).
	     * Row index becomes the first visible row. Please note this is a 1 based index.
	     * @method gotoRow
	     */
	    gotoRow(rowIndex: any): void;
	    /**
	     * Selects the provided text in the currently visible cells
	     * that have the default item renderer, or if the item renderer
	     * has the selection property
	     * @method selectText
	     */
	    selectText(txt: any): void;
	    /**
	     * Given a data item, scrolls to that item in the datagrid
	     *
	     * Flexicious by default will only build RowPositionInfo objects
	     * for open items that the user can visually scroll to. So items that
	     * are closed, or are on a different page, will not be built, and cannot be scrolled to.
	     * This function will will inspect the data provider to find the item in question, and build the RowPositionInfo for it
	     * if its not found in the currently built RowPositionInfo objects.
	     * @method gotoItem
	     */
	    gotoItem(item: any, highlight: any, level: any): void;
	    /**
	     * Given a key, scrolls to the item that has the provided value for the selectedKeyField at that level
	     *
	     * Flexicious by default will only build RowPositionInfo objects
	     * for open items that the user can visually scroll to. So items that
	     * are closed, or are on a different page, will not be built, and cannot be scrolled to.
	     * This function will will inspect the data provider to find the item in question, and build the RowPositionInfo for it
	     * if its not found in the currently built RowPositionInfo objects.
	     * @method gotoKey
	     */
	    gotoKey(key: any, highlight: any, level: any): void;
	    /**
	     * Iterates through the data provider to get a list of row positions
	     * that match the text provided.
	     * @method quickFind
	     */
	    quickFind(whatToFind: any): any;
	    /**
	     * Gets the cell that is currently being edited.
	     * @method getCurrentEditCell
	     */
	    getCurrentEditCell(): any;
	    /**
	     * Gets the editor that is currently being edited.
	     * @method getCurrentEditor
	     */
	    getCurrentEditor(): any;
	    /**
	     * Synchronizes the vertical scroll positions of the three locked sections
	     * @method synchronizeLockedVerticalScroll
	     */
	    synchronizeLockedVerticalScroll(): void;
	    /**
	     * Synchronizes the vertical scroll positions of the three locked sections
	     * @method synchronizeHorizontalScroll
	     */
	    synchronizeHorizontalScroll(): void;
	    /**
	     * Returns the data provider, with filter, paging and sorting applied on basis
	     * of the boolean flags specified. The passed in dictionary contains a map of each
	     * item in the resulting collection to the level that it belongs to.
	     *
	     * @param dictionary	Map of each item in the resulting collection to the level that it belongs to
	     * @param applyFilter	Whether or not to apply the filter
	     * @param applyPaging	Whether or not to apply paging
	     * @param applySort		Whether or not to apply sort
	     * @param pages			Which pages to get, only needed if you want a page range. specify null(default) if you want only the current page.
	     * @return A flat array of all items that match the criteria generated on basis of the parameters above.
	     *
	     * @method getFilteredPagedSortedData
	     *
	     */
	    getFilteredPagedSortedData(dictionary: any, applyFilter: any, applyPaging: any, applySort: any, pages: any): any;
	    /**
	     *Returns the RowPosition Info object for the item at the given vertical scroll position
	     * @method getItemAtPosition
	     */
	    getItemAtPosition(position: any): any;
	    /**
	     *Returns the container for the given cell
	     * @method getParentContainer
	     */
	    getParentContainer(cell: any): any;
	    /**
	     * Calls getChildren, and if result is XML or XMLList, returns length() else returns length;
	     * @method getChildrenLength
	     */
	    getChildrenLength(object: any, level: any, filter: any, page: any, sort: any): any;
	    /**
	     * If arr is XML or XMLList, returns length() else returns length;
	     * @method getLength
	     */
	    getLength(arr: any): any;
	    /**
	     * If the dataprovider is IHierarchicalCollectionView, calls the getChildren method on the incoming object.
	     * If object is XMLList or XML, returns the result of its "children" method.
	     * Else returns the value of the level.childrenField property on the object being passed in
	     *
	     * Prior to returning, applies filter, page or sort as specified by the parameters.
	     * You can intercept calls to this function by defining a custom getChildrenFunction
	     * @method getChildren
	     */
	    getChildren(object: any, level: any, filter: any, page: any, sort: any): any;
	    /**
	     * Returns the parent object for the passed in object.
	     * Please note, if your data provider is xml or hierarchical collection view,
	     * grid will use the getParent method or getParentItem method on such data providers
	     * respectively. If you have specified a parentField, which is a pointer
	     * on the object that points back to the parent, the grid will use that.
	     * If none of the above is true, the grid will use its built in map of
	     * hierarchical data, but this has a limitation of only being able to return
	     * parents of items that are on the current page of data.
	     * @method getParent
	     * */
	    getParent(object: any, level: any): any;
	    /**
	     * Called by PrintController and ExportController to get the data on basis of PrintOptions and ExportOptions
	     * @param {PrintOptions} [printOptions]
	     * @method getDataForPrintExport
	     */
	    getDataForPrintExport(printOptions: any): any;
	    /**
	     * Sets the visible flag on all columns except the ones speicified in the list to false.
	     * @method showColumns
	     */
	    showColumns(colsToShow: any): void;
	    /**
	     * Sets the visible flag on all columns except the ones where excludeFromPrint=true.
	     * @method showPrintableColumns
	     */
	    showPrintableColumns(): void;
	    /**
	     *Returns the filter at the top level.
	     * @method getFilterArguments
	     */
	    getFilterArguments(): any;
	    /**
	     *Gets the filter at the root level
	     * @method getRootFilter
	     */
	    getRootFilter(): any;
	    /**
	     * Used to set the initial value of the filter at the top level for the specified field.
	     * @param col		The column to set filter for
	     * @param val			The value to set
	     * @param triggerEvent	Whether or not to fire the filterPageSortChange event. Defaults to true.
	     * @method setFilterValue
	     */
	    setFilterValue(col: any, val: any, triggerEvent: any): void;
	    /**
	     * Sets the filter at the top level.
	     *
	     * @param fld    The string to match the searchField property of the filter control with.
	     * @return         True if focus was set, false if otherwise.<br/>
	     * Focus may not be set if the given search field does not exist, <br/>
	     * or if the filter control for the given search field does not  <br/>
	     * implement IFocusManagerComponent.
	     * @method setFilterFocus
	     */
	    setFilterFocus(fld: any): any;
	    /**
	     * Used to set the initial value of the filter at the top level for the specified field.
	     * @param col		The column to set filter for
	     * @method getFilterValue
	     * @return {*}
	     */
	    getFilterValue(col: any): any;
	    /**
	     * Used by state persistence to load sort settings that were
	     * persisted previously.
	     * @param sorts
	     * @method processSort
	     *
	     */
	    processSort(sorts: any): void;
	    /**
	     * Clears out all the columns of the grid
	     * If the parameter to rebuild is true, the grid will be rebuilt.
	     * Otherwise, just the columns will be cleared, and the consumer code
	     * should rebuild the grid.
	     * @method clearColumns
	     */
	    clearColumns(rebuild: any): void;
	    /**
	     * Adds the column to the collection of columns at the root level.
	     * @method addColumn
	     */
	    addColumn(col: any): void;
	    /**
	     * Removes the column from the collection of columns at this level.
	     * @method removeColumn
	     */
	    removeColumn(col: any): void;
	    /**
	     *Returns the column with the specified datafield, only at the root level
	     * @method getColumnByDataField
	     */
	    getColumnByDataField(fld: any): any;
	    /**
	     *Returns the column with the specified UniqueIdentifier, only at the root level
	     * @method getColumnByUniqueIdentifier
	     */
	    getColumnByUniqueIdentifier(fld: any): any;
	    /**
	     * Modifies the columns so the width is distributed equally.
	     * Columns that are fixedWidth are not updated.
	     * @method distributeColumnWidthsEqually
	     */
	    distributeColumnWidthsEqually(): void;
	    /**
	     * Returns FlexDataGridColumnLevel object at the specified depth
	     * @method getLevel
	     */
	    getLevel(levelDepth: any): any;
	    /**
	     * Returns the export controller instance
	     */
	    getExportController(): any;
	    /**
	     * Returns the print controller instance
	     */
	    getPrintController(): any;
	    /**
	     * For nested datagrids, expands all items to the level specified.
	     * @method expandToLevel
	     */
	    expandToLevel(level: any, maxItems: any): void;
	    getLevelAtNestDepth(depth: any): any;
	    onTableContextMenuItemClick(event: any): void;
	    /**
	     * A method that simply rebuilds the body as opposed to rebuilding the entire grid.
	     * @method rebuildBody
	     */
	    rebuildBody(vupdateTotalRecords: any): void;
	    /**
	     * A method that simply rebuilds the header as opposed to rebuilding the entire grid.
	     * @method rebuildHeader
	     */
	    rebuildHeader(): void;
	    /**
	     * A method that simply rebuilds the pager as opposed to rebuilding the entire grid.
	     * @method rebuildPager
	     */
	    rebuildPager(): void;
	    /**
	     * A method that simply rebuilds the footer as opposed to rebuilding the entire grid.
	     * @method rebuildFooter
	     */
	    rebuildFooter(): void;
	    /**
	     * A method that simply rebuilds the footer as opposed to rebuilding the entire grid.
	     * @method rebuildFilter
	     */
	    rebuildFilter(): void;
	    /**
	     * A method that simply redraws the body as opposed to rebuilding the entire grid.
	     * As opposed to rebuild, does not recalculate row positions and heights, just refreshes
	     * the currently drawn rows.
	     * @method redrawBody
	     */
	    redrawBody(): void;
	    /**
	     *For nested datagrids, expands all items one level up
	     * @method expandUp
	     */
	    expandUp(): void;
	    /**
	     * For nested datagrids, expands all items one level down
	     * @method expandDown
	     */
	    expandDown(): void;
	    /**
	     * For grids with column groups, expands them all.
	     * @method expandAllColumnGroups
	     */
	    expandAllColumnGroups(lvl: any): void;
	    /**
	     * For grids with column groups, expands them all.
	     * @method collapseAllColumnGroups
	     */
	    collapseAllColumnGroups(lvl: any): void;
	    /**
	     * For nested datagrids, expands all items one level down
	     * @method expandAll
	     */
	    expandAll(): void;
	    /**
	     * For nested datagrids, expands all items one level down
	     * @method collapseAll
	     */
	    collapseAll(): void;
	    /**
	     *Displays a tooltip for the control in question. The tooltip will disappear if the mouse
	     * moves over an area that is not the 'relativeTo' component or the tooltip component..
	     * @param relativeTo Which component to position the popup relative to
	     * @param tooltip The popup to display
	     * @param dataContext If the popup has a data property, it will be set to this value
	     * @param point If you specify this, the relativeTo is ignored, and the popup appears at the exact point you specify. Please ensure that the X and Y are relative to the Grid.
	     * @param leftOffset Whether to shift the popup left after calculating the positions, for customizing the actual position
	     * @param topOffset	Whether to shift the popup top after calculating the positions, for customizing the actual position
	     * @param offScreenMath	Whether or not to adjust the popup if it appears off screen
	     * @param where		One of three values, left, right or none. If left, positions to bottom left, if right, positions to bottom right, if none, positions right below the relativeTo component.
	     * @param container	The holder for the tooltip, defaults to UIUtils.getTopLevelApplication(). You may need to override in multi window Air apps.
	     * By default, the tooltip will go away once you hover the mouse out of the trigger cell or the tooltip and stayed that way for tooltipWatcherTimeout. You may also
	     * manually remove the tooltip by calling the hideToolTip() function.
	     *
	     * @method showTooltip
	     */
	    showTooltip(relativeTo: any, tooltip: any, dataContext: any, point: any, leftOffset: any, topOffset: any, offScreenMath: any, where: any, container: any): void;
	    /**
	     * Hides the current tooltip.
	     * @method hideTooltip
	     */
	    hideTooltip(): void;
	    /**
	     * @method dispatchEvent
	     */
	    dispatchEvent(e: any): any;
	    /**
	     * @method getItemFilter
	     */
	    getItemFilter(level: any, item: any): any;
	    /**
	     * Handle for the auto refresh.
	     * @param event
	     * @method dispatchAutoRefreshEvent
	     */
	    dispatchAutoRefreshEvent(event: any): void;
	    /**
	     *  If grid.getOpenItems().contains(getItemKey(cell.rowInfo.data)),
	     *  return the value of expandTooltip else collapseTooltip
	     * @method defaultExpandCollapseTooltipFunction
	     */
	    defaultExpandCollapseTooltipFunction(cell: any): any;
	    /**
	     * Adds to toolbar actions, and refreshes the toolbar.
	     * @method setToolbarActions
	     */
	    setToolbarActions(actions: any): void;
	    /**
	     */
	    addToolbarAction(action: any, itemIndex: any): void;
	    /**
	     * @method removeToolbarAction
	     */
	    removeToolbarAction(code: any): void;
	    /**
	     * Runs the given toolbar action. Dispatches the toolbarActionExecuted event. If you call prevent default in this event,
	     * the default handling code does not execute.
	     * @method runToolbarAction
	     */
	    runToolbarAction(action: any, currentTarget: any, extendedPager: any): void;
	    /**
	     * @method getNewIndex
	     */
	    getNewIndex(lcw: any, item: any, direction: any): number;
	    /**
	     * Creates a Toolbar Action
	     * @param lbl            The label to apply to the action
	     * @param code            The code to associate with the action
	     * @param [requiresSelection]    Whether or not the action requires an item to be selected within the grid.
	     * @param [requiresSingleSelection]    Whether or not the action requires a single item to be selected within the grid.
	     * @method createBuiltinAction
	     */
	    createBuiltinAction(lbl: any, code: any, requiresSelection: any, requiresSingleSelection: any): any;
	    /**
	     * Given a code, loops through the toolbarActions, and gets the toolbar action with the given code.
	     * @param code
	     * @return
	     * @method getActionByCode
	     */
	    getActionByCode(code: any): any;
	    /**
	     * Adds to built in filters and refreshes the toolbar.
	     * @method setPredefinedFilters
	     */
	    setPredefinedFilters(filters: any): void;
	    /**
	     * On grids that allow for tracking errors, call this method to highlight the error
	     * using the errorRowStyle, errorContainerRowStyle, and errorMessageStyle.
	     *
	     * Pass in the key of the object (that is matched using the selectedKeyField)
	     * the dataField of the column that is supposed to show the error, and the
	     * error message text.
	     * @method setErrorByKey
	     *
	     */
	    setErrorByKey(key: any, fld: any, errorMsg: any): void;
	    /**
	     * Similar to setErrorByKey, except takes the actual object that the key represents.
	     * On grids that allow for tracking errors, call this method to highlight the error
	     * using the errorRowStyle, errorContainerRowStyle, and errorMessageStyle.
	     *
	     * Pass in the key of the object (that is matched using the selectedKeyField)
	     * the dataField of the column that is supposed to show the error, and the
	     * error message text.
	     *
	     * @method setErrorByObject
	     */
	    setErrorByObject(item: any, fld: any, errorMsg: any): void;
	    /**
	     * Clears the errors for the specified key
	     * @method clearErrorByKey
	     */
	    clearErrorByKey(key: any, fld: any): void;
	    /**
	     * Clears out all the errors
	     * @method clearAllErrors
	     */
	    clearAllErrors(): void;
	    /**
	     * Similar to clearErrorByKey, except takes the actual object that the key represents.
	     * @method clearErrorByObject
	     */
	    clearErrorByObject(item: any, fld: any): void;
	    /**
	     * Returns an object that has the error information for the passed in object.
	     * @method getError
	     */
	    getError(item: any): any;
	    /**
	     * Returns an object that has the error information for the passed in object.
	     * @method getAllErrorString
	     */
	    getAllErrorString(): string;
	    /**
	     * Provided an item, loops through the data provider, and finds
	     * the level associated with the provided item.
	     * Let the level and flat be null.
	     * @method getLevelForItem
	     */
	    getLevelForItem(itemToFind: any, flat: any, level: any): any;
	    /**
	     * If variableRowHeight returns the minimum height required to display text of each column without clipping.
	     * Please note, atleast one column needs to have the wordWrap flag set to true. If you use custom item rendereres, these are not accounted for in the height measurement
	     * for performance reasons. In this case, you should override the getRowHeight method and provide your own implementation which is optimized for your situation.
	     *
	     * @param item        The item being displayed
	     * @param level        The FlexDataGridColumnLevel object that the item belongs to
	     * @param rowType    The type of the row, one of the RowPositionInfo.ROW_TYPE_XXXX constants
	     * @return             Height of the row
	     * @method calculateRowHeight
	     *
	     */
	    calculateRowHeight(item: any, level: any, rowType: any): any;
	    /**
	     * Given a column and padding values, calculate the height required to fully render the text
	     * @param col            The column to render. The width of this column is used to calculate the height.
	     * @param paddingLeft    The left padding to apply while calculating the height
	     * @param paddingRight    The right padding to apply while calculating the height
	     * @param paddingTop    The top padding to apply while calculating the height
	     * @param paddingBottom    The bottom padding to apply while calculating the height
	     * @param itemRenderer    The renderer to use - for data cells uses itemRenderer for header cells uses headerRenderer
	     * @param ht            The previously calculated max height. The ht will return this value if the calculated height is less than the passed in ht.
	     * @param txt            The text to render.
	     * @param item            The item (or row data) object that will be applied to the data property of the renderer
	     * @param styl             Apply style to the item
	     * @param isHeader
	     * @return                 If the calculated height is greater than ht parameter, returns the calculated height. Else returns the value of the ht parameter
	     * @method measureCellHeight
	     */
	    measureCellHeight(col: any, paddingLeft: any, paddingRight: any, paddingTop: any, paddingBottom: any, itemRenderer: any, ht: any, txt: any, item: any, styl: any, isHeader: any): any;
	    /**
	     *  Shows the given toaster message
	     *
	     * @param message			The message to display in the toaster notification
	     * @param toasterPosition	The position for the toaster. One of the Toaster.POSITION_XXXX constants. Defaults to Toaster.POSITION_BOTTOM_RIGHT
	     * @param toasterRenderer	A classfactory for the actual renderer control. Defaults to DefaultToasterRenderer.
	     * @param animationDuration	Number of milli seconds to animate the move or the fade animation for the toaster to appear and disappear. Defaults to 1000
	     * @param visibleDuration	Number of milli seconds to keep the toaster visible. Defaults to 5000
	     * @param moveAnimate		Whether to use the move animation.
	     * @param fadeAnimate		Whether to use the fade animation.
	     *
	     * @return The toaster instance used to show the toaster.
	     *
	     * @method showToaster
	     */
	    showToaster(message: any, toasterPosition: any, toasterRenderer: any, animationDuration: any, visibleDuration: any, moveAnimate: any, fadeAnimate: any): void;
	    /**
	     * Adds the provided item to the selection of the top (root) level.
	     * @param val
	     * @method addSelectedItem
	     */
	    addSelectedItem(val: any): void;
	    /**
	     *  Opens or closes all the nodes of the navigation tree below the specified item.
	     *  @param item An Object defining the branch node. This Object contains the
	     *  data provider element for the branch node.
	     *
	     *  @param open Specify <code>true</code> to open the items,
	     *  and <code>false</code> to close them.
	     *
	     *  @param level Level at which the item exists. If null is specified, defaults to the top level
	     *  @method expandChildrenOf
	     * */
	    expandChildrenOf(item: any, open: any, level: any): void;
	    /**
	     */
	    addRemoveFromOpenItems(item: any, open: any, level: any): void;
	    /**
	     * Method to track a change, called by track change API to keep track of additions, deletions and modifications to the data provider.
	     * @param changedItem    Item being changed
	     * @param changeType    Type of the change
	     * @param [changeLevel]    Nest Level of the level being changed
	     * @param [changedProperty]    The property being changed
	     * @param [previousValue]    The value prior to the change
	     * @param [newValue]    The new value.
	     * @method trackChange
	     */
	    trackChange(changedItem: any, changeType: any, changeLevel: any, changedProperty: any, previousValue: any, newValue: any): void;
	    /**
	     * Sets the open items on basis of the selectedField.
	     * @param [rebuild] Flag to rebuild the grid. Set to true if calling from your code, unless rebuild is being called else where.
	     * @param [openItems]
	     * @method setSelectedItemsBasedOnSelectedField
	     */
	    setSelectedItemsBasedOnSelectedField(rebuild: any, openItems: any): void;
	    /**
	     */
	    addEventListener(type: any, listener: any, useCapture: any, priority: any, useWeakReference: any): void;
	    /**
	     * Gets the column with the specified search field
	     * @method getFilterColumn
	     */
	    getFilterColumn(searchField: any): any;
	    /**
	     * Displays a message without the spinner label.
	     * @param msg
	     * @method showMessage
	     */
	    showMessage(msg: any): void;
	    /**
	     * @method onGridResized
	     */
	    onGridResized(event: any): void;
	    /**
	     * Default handler for the Word Export Button. Calls
	     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create(ExportOptions.DOC_EXPORT))
	     * @method defaultWordHandlerFunction
	     */
	    defaultWordHandlerFunction(): void;
	    /**
	     * Default handler for the Word Export Button. Calls
	     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create())
	     * @method defaultExcelHandlerFunction
	     */
	    defaultExcelHandlerFunction(): void;
	    /**
	     * Default handler for the Print Button. Calls
	     * var po:PrintOptions=PrintOptions.create();
	     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
	     * ExtendedPrintController.instance().print(this.grid,po)
	     * @method defaultPrintHandlerFunction
	     */
	    defaultPrintHandlerFunction(): void;
	    /**
	     * Default handler for the Print Button. Calls
	     * var po:PrintOptions=PrintOptions.create(true);
	     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
	     * ExtendedPrintController.instance().print(this.grid,po)
	     * @method defaultPdfHandlerFunction
	     */
	    defaultPdfHandlerFunction(): void;
	    /**
	     * Gets the class responsible for handling the PrintUI should be a IPrintDataGrid
	     * @return
	     * @method createPrintComponentFactory
	     */
	    createPrintComponentFactory(): any;
	    /**
	     * Return true if enableStickyControlKeySelection  Or (Control Key is down AND (selectionMode is MultipleRows or MultipleCells))
	     * @method isCtrlKeyDownOrSticky
	     */
	    isCtrlKeyDownOrSticky(event: any): any;
	    /**
	     * @method getUserSettingsController
	     */
	    getUserSettingsController(): any;
	    /**
	     * If you modify one or more column groups, calling this method is required so that
	     * inter related column groups can update themselves.
	     * @method alignColumnGroups
	     */
	    alignColumnGroups(): void;
	    /**
	     *
	     * @method cascadeColumnGroups
	     */
	    cascadeColumnGroups(cg: any): void;
	    /**
	     * Given a cell, returns it row span based upon how many children are open
	     * Recursively inspects the children to see if any of them are open as well.
	     * @param cell
	     * @return
	     * @method getRowSpanBasedOnOpenItemCount
	     */
	    getRowSpanBasedOnOpenItemCount(cell: any): any;
	    /**
	     * Given a cell if it is a datarow, and it is associated with a column
	     * and the column is at the nest level of the cell, and the column is left locked
	     * and the data item bound to the cell is open, then will return the recursive
	     * count of all open items under this cell.
	     * @param cell    The cell to check
	     * @return     integer
	     * @method getOpenItemCount
	     */
	    getOpenItemCount(cell: any): any;
	    /**
	     * @method getRecursiveOpenItemCount
	     */
	    getRecursiveOpenItemCount(children: any, nextLevel: any): number;
	    /**
	     * @method showSpinner
	     */
	    showSpinner(msg: any): void;
	    /**
	     * @method hideSpinner
	     */
	    hideSpinner(): void;
	    /**
	     * Queues a call to drawFiller in the next validation cycle
	     * @method invalidateFiller
	     */
	    invalidateFiller(): void;
	    /**
	     * When enableFillerRows=true, wipes out and recreates the filler rows. The grid automatically calls this method
	     * when any column widths change, dataprovider changes, size changes, or when expand/collapse happen.
	     * @method drawFiller
	     */
	    drawFiller(): void;
	    /**
	     * @method drawFillerCell
	     */
	    drawFillerCell(section: any, color: any, pointer: any, currx: any, colWidth: any, verticalGridLines: any, verticalGridLineThickness: any, verticalGridLineColor: any, horizontalGridLines: any, horizontalGridLineThickness: any, horizontalGridLineColor: any, rowHt: any, draw: any, colIsInView: any, sectionHorizontalScrollPosition: any): any;
	    /**
	     * Pointer to the TOP level cellBorderFunction
	     * A function that lets you control the border drawing mechanism for each cell.
	     * By default, each cell will draw a 1px wide line to its right and bottom ends.
	     *
	     * This function offers you the opportunity to hook into this mechanism, and draw
	     * your own border using the graphics property of the FlexDataGridCell object,
	     * that is passed in as a parameter to this function. If this function returns false,
	     * the default border is not drawn.
	     * @method getCellBorderFunction
	     */
	    getCellBorderFunction(): any;
	    /**
	     *
	     * @method setCellBorderFunction
	     */
	    setCellBorderFunction(value: any): void;
	    /**
	     *Returns the columns where visible=true
	     * @method getVisibleColumns
	     */
	    getVisibleColumns(): any;
	    /**
	     * Returns true of this is a nested grid, and we have not expanded to the lowest level
	     * @method getCanExpandDown
	     */
	    getCanExpandDown(): boolean;
	    /**
	     * Returns the built in moveDown Action
	     * @return
	     * @method getToolbarActionMoveDown
	     */
	    getToolbarActionMoveDown(): any;
	    /**
	     * Returns the columns where excludeFromSettings=false
	     * @method getSettingsColumns
	     */
	    getSettingsColumns(): any;
	    /**
	     * Pointer to the TOP level expandCollapseHeaderCellRenderer
	     * @method getExpandCollapseHeaderCellRenderer
	     */
	    getExpandCollapseHeaderCellRenderer(): any;
	    /**
	     * @method setExpandCollapseHeaderCellRenderer
	     */
	    setExpandCollapseHeaderCellRenderer(val: any): void;
	    /**
	     * Pointer to the TOP level filterFunction
	     * @method getFilterFunction
	     */
	    getFilterFunction(): any;
	    /**
	     * @method setFilterFunction
	     */
	    setFilterFunction(value: any): void;
	    /**
	     * The container for the header cells. This is an instance of the FlexDataGridHeaderContainer class.
	     * This class manages cell initialization, recycling, mouse events on each cell, etc. The rows collection
	     * of this object will aways contain a single RowInfo object, which has a cells collection. This will
	     * be a series of ComponentInfo objects, which has a component property that will be an instance of FlexDataGridHeaderCell
	     * Although the parent property of each of the cells could be either the
	     * leftLockedHeader, rightLockedHeader or the headerContainer, the rowInfo is the same, so the cells will
	     * include left, right, and unlocked cells.
	     * @method getHeaderContainer
	     */
	    getHeaderContainer(): any;
	    /**
	     * Pointer to the TOP level expandCollapseCellRenderer
	     * @method getExpandCollapseCellRenderer
	     */
	    getExpandCollapseCellRenderer(): any;
	    /**
	     *
	     * @method setExpandCollapseCellRenderer
	     */
	    setExpandCollapseCellRenderer(val: any): void;
	    /**
	     * Returns the sum of: <br/>
	     * If enableFilters, then filterRowHeight else 0 plus<br/>
	     * headerHeight
	     * @return
	     * @method getHeaderSectionHeight
	     */
	    getHeaderSectionHeight(): any;
	    /**
	     * The container for the left locked footer cells.
	     * This is an instance of the LockedContent class, which basically is an extended
	     * UIComponent that manages the filter and footer cell visiblity, heights, and the y positions.
	     *
	     * To access all the footer cells, please use the rows collection of the footerContainer
	     * This contains a single RowInfo object, which contains a cells collection.
	     * The cells collection contains ComponentInfo objects, that has a component property, which is
	     * an instance of one of the subclasses of FlexDataGridCell. The cell will have a renderer property
	     * which is the actual UI control that is being displayed.
	     * @method getLeftLockedFooter
	     */
	    getLeftLockedFooter(): any;
	    /**
	     * Pointer to the TOP level cellCustomBackgroundDrawFunction
	     *  A function that lets you control the background drawing mechanism for each cell.
	     * By default, each cell will draw a background on basis of the XXXXColors style property
	     * and XXXXRollOverColors style property, where XXXX= header,filter,pager,footer,renderer or blank.
	     *
	     * This function offers you the opportunity to hook into this mechanism, and draw
	     * your own background using the graphics property of the FlexDataGridCell object,
	     * that is passed in as a parameter to this function. If this function returns false,
	     * the default background is not drawn.
	     * @method getCellCustomBackgroundDrawFunction
	     */
	    getCellCustomBackgroundDrawFunction(): any;
	    /**
	     * @method setCellCustomBackgroundDrawFunction
	     */
	    setCellCustomBackgroundDrawFunction(value: any): void;
	    /**
	     * A list of selected objects from the data provider. This is the sdk equivalent of selectedItems.
	     * We do not have selectedItems, but selectedObjects will almost always be the same as selectedItems.
	     * The only exception is when you use server side paging. In this case, selectedObjects will contain all the items
	     * selected, on all pages.
	     *
	     * When a row is selected in the grid, we store the  the selected object in the selectedObects array collection.
	     * This allows for multiple pages of data that comes down from the server and not maintained in memory
	     * to still keep track of the objects that were selected on other pages.
	     *
	     * Please note, for hierarchical grids, each level has its own collection of selected keys.
	     * The grid.selectedObjects returns the selectedKeys at the top level. To access the selected keys
	     * at a lower level, you may navigate to that level using grid.getColumnLevel().nextLevel...nextLevel.selectedKeys
	     * You can also call grid.getSelectedObjects to get selected objects at all levels.
	     * @method getSelectedObjectsTopLevel
	     *
	     *
	     * */
	    getSelectedObjectsTopLevel(): any;
	    /**
	     * The column that initiated the drag
	     * @return
	     * @method getDragColumn
	     */
	    getDragColumn(): any;
	    /**
	     * Pointer to the TOP level additionalFilterArgumentsFunction
	     * In scenarios where there are detached filters, this function
	     * may be used to add on to the list of arguments before the filter is
	     * run. The function must take a column level as the only parameter,
	     * and return an array collection of the filter expressions.
	     * @method getAdditionalFilterArgumentsFunction
	     */
	    getAdditionalFilterArgumentsFunction(): any;
	    /**
	     * @method setAdditionalFilterArgumentsFunction
	     */
	    setAdditionalFilterArgumentsFunction(value: any): void;
	    /**
	     * Returns true of this is a nested grid, and we have expanded to a level below 1.
	     * @method getCanExpandUp
	     */
	    getCanExpandUp(): boolean;
	    /**
	     * Returns true if the footer row is visible at the top level.
	     * @method getFooterVisible
	     */
	    getFooterVisible(): any;
	    /**
	     * Sets the footer row to visible at the top level.
	     * @method setFooterVisible
	     */
	    setFooterVisible(val: any): void;
	    /**
	     * A property on the object that identifies whether the object is disabled.
	     * @method getRowDisabledFunction
	     */
	    getRowDisabledFunction(): any;
	    /**
	     * @method setRowDisabledFunction
	     */
	    setRowDisabledFunction(value: any): void;
	    /**
	     * Returns the built in moveUp Action
	     * @return
	     * @method getToolbarActionSeparator
	     */
	    getToolbarActionSeparator(): any;
	    /**
	     * Returns the number of rows currently visible.
	     * @method getRowCount
	     */
	    getRowCount(): any;
	    /**
	     * Returns dataProvider.indexOf(selectedObjects(0))
	     * @method getSelectedIndices
	     */
	    getSelectedIndices(): any[];
	    /**
	     * The main scrollable area of the grid. This is an instance of the FlexDataGridBodyContainer class, which
	     * derives from FlexDataGridContainerBase. The Body container manages renderer recycling, scrolling, expand
	     * collapse, editing, etc. The bodyContainer contains a rows collection, which is a visual representation of
	     * the current ViewPort, that is, it shows the currently visible cells based on the vertical and horizontal
	     * scroll postions. You can iterate through the currently visible cells via looping through the rows property
	     * and going through the cells collection of each RowInfo. Please note, this will only get you the currently
	     * visible cells. If you wish to access each cell as it is being initialized (or revived from a recyclable state)
	     * please wire up the rendererInitialized event on the grid.
	     *
	     * Specialized getter when enableVirtualScroll=true
	     * @method getVirtualBodyContainer
	     */
	    getVirtualBodyContainer(): any;
	    /**
	     * Whether to use addElement or addChild;
	     * @method getUseElements
	     */
	    getUseElements(): boolean;
	    /**
	     * Returns true if the filter row is visible at the top level.
	     * @method getFilterVisible
	     */
	    getFilterVisible(): any;
	    /**
	     * Sets the filter row to visible at the top level.
	     * @method setFilterVisible
	     */
	    setFilterVisible(val: any): void;
	    /**
	     * The concept of selection in Flexicious Ultimate is much more powerful as compared to the basic SDK datagrids in the following ways:
	     * <ul>
	     * <li>First, It supports selection independant of dataprovider, so when a row is selected in the grid, we store the
	     * the selected object in the selectedObects array collection. This allows for multiple pages of data that comes down from the server
	     * and not maintained in memory to still keep track of the objects that were selected on other pages.
	     * </li>
	     * <li>Second, Flexicious Ultimate supports ID based selection (by using selectedKeyField). The selectedKeyField is used for object equality.
	     * So for example, if the user selects a record with ID 1, and the grid's data provider is later refreshed with new data from the backend,
	     * the grid will maintain the selection if you specify a selectedKeyField which points to the ID (usually the surrogate key) in the database. This is also
	     * used to maintain collapse/expand state in hierarchical grids.</li>
	     *
	     * <li>Third, Flexicious Ultimate supports bubbling and cascading selection information. So in hierarchical datagrids, if you
	     * set enableSelectionCascade=true, the grid will automatically select all children when a parent is selected. If you set
	     * enableSelectionBubble, the grid will select the parent if all its children are selected.</li>
	     * <li>Fourth, Flexicious Ultimate supports selection based on exclusion. This is applicable for virtual scroll, where there are large
	     * amounts of data, (potentially millions of rows), and the user navigates through these large numbers of records. In this scenario where you
	     * have lazy loaded grids, selection cascade and select all will simply set flags on the selectionInfo object.
	     * The selectedObjects and selectedKeys no longer contain references to data that is selected
	     * Instead, they contain the items that the user explicitly selected. unSelectedObjects will contain items that the user explicitly unselected.
	     * This helps maintain selection across very large lazy loaded datasets. When you set the enableSelectionExclusion flag to true, use the selectionInfo object to
	     * access the selection (or build a query on the server) to identify the objects user selected.
	     * </li>
	     * </ul>
	     *
	     * There are a number of properties and methods that help with manipulation and interaction with selection.
	     * <ul>
	     * <li>grid.selectedObjects and level.selectedObjects: A list of selected objects from the data provider. This is the sdk equivalent of selectedItems.
	     * We do not have selectedItems, but selectedObjects will almost always be the same as selectedItems.
	     * The only exception is when you use server side paging. In this case, selectedObjects will contain all the items
	     * selected, on all pages. grid.selectedObjects implicity returns selectedObjects at the top level. level.selectedObjects
	     * will return all the selected objects (regardless of parent) at the corresponding level.
	     * </li>
	     * <li>grid.selectedKeys and level.selectedKeys: A list of ID values, based on the selectedKeyField property.
	     * Returns the selected keys for the top column level. Please NOTE - this is a read only collection.
	     * Adding to this does nothing. If you want to programatically modify the selection, use the selectedObjects instead.
	     * grid.selectedKeys implicity returns selectedKeys at the top level. level.selectedKeys
	     * will return all the selected objects (regardless of parent) at the corresponding level.
	     * </li>
	     * <li>grid.getSelectedObjects: This method is similar to grid.selectedObjects, except it recursively iterates through all levels
	     * gathering the selected objects at each level. This is used for nested datagrids, and used to get all items selected at all levels.
	     * If you specify getKey=true, the method will reutrn an array containning the value of the selectedKeyField at each level.
	     * </li>
	     * <li>grid.getSelectedKeys: This method is similar to grid.selectedKeys, except it recursively iterates through all levels
	     * gathering the selected keys at each level. This is used for nested datagrids, and used to get all keys selected at all levels.
	     * This method will reutrn an array containning the value of the selectedKeyField at each level, assuming you have specified a selectedKeyField.
	     * </li>
	     * <li>grid.setSelectedObjects: This method used to select records programmatically. It takes an array and goes through the dataprovider
	     * trying to match each item in this array to the dataprovider, recursively trying to add the matching items to the selectedObjects
	     * collection at the corresponding level. A boolean flag for this method will optionally open the selected items parents in hierarchical
	     * datagrids, so any selection you set using this method is automatically expanded so the user can visually see the selected rows.
	     * </li>
	     * <li>grid.setSelectedKeys: This method is similar to grid.setSelectedObjects, except it takes an array of keys. Another consideration
	     * for this method is that the array of keys need to be globally unique across the entire dataprovider, so parents and children cannot
	     * have the same keys. Also, it depends on the selectedKeyField property being set.
	     * </li>
	     * <li>grid.selectableField : This is a boolean flag on the dataprovider that notifies the grid whether or not the grid should allow
	     * interactive selection on the corresponding record.
	     * </li>
	     * </ul>
	     * @method getSelectedKeyField
	     */
	    getSelectedKeyField(): any;
	    /**
	     * @method setSelectedKeyField
	     */
	    setSelectedKeyField(val: any): void;
	    /**
	     * Takes an object that has a rowIndex and a columnIndex property. Finds the cell at that position,
	     * and emulates a click event on that cell. This event, in turn will begin an edit session for editable
	     * cells.
	     * @method setEditedItemPosition
	     */
	    setEditedItemPosition(rowIndex: any, colIndex: any): void;
	    /**
	     * Returns the top level pager
	     * @method getPager
	     */
	    getPager(): any;
	    /**
	     * Gets the pager row height at the top level.
	     * @method getPagerRowHeight
	     */
	    getPagerRowHeight(): any;
	    /**
	     * Sets the pager row height at the top level.
	     * @method setPagerRowHeight
	     */
	    setPagerRowHeight(val: any): void;
	    /**
	     * Pointer to the TOP level nextLevelRenderer
	     * @method getNextLevelRenderer
	     */
	    getNextLevelRenderer(): any;
	    /**
	     * @method setNextLevelRenderer
	     */
	    setNextLevelRenderer(val: any): void;
	    /**
	     * returns true if any of the levels have a filter function
	     * @return
	     * @method getHasFilterFunction
	     *
	     */
	    getHasFilterFunction(): any;
	    /**
	     * Added for Persistence support
	     * @return
	     * @method getHasGroupedColumns
	     */
	    getHasGroupedColumns(): any;
	    /**
	     * If rowSpanFunction!=null or colSpanFunction!=null
	     * @method getHasRowSpanOrColSpan
	     */
	    getHasRowSpanOrColSpan(): any;
	    /**
	     * Pointer to the TOP level itemLoadMode
	     * @method getItemLoadMode
	     */
	    getItemLoadMode(): any;
	    /**
	     * @method setItemLoadMode
	     */
	    setItemLoadMode(val: any): void;
	    /**
	     * Gets the value of the headerSortSeparatorRight property
	     * @method getHeaderSortSeparatorRight
	     */
	    getHeaderSortSeparatorRight(): any;
	    /**
	     * A list of items that the user has opened. Only applicable grids with nested column levels.
	     * If you programatically modify this collection, call the rebuild method.
	     * Please see the documentation of setOpenKeys for instructions on maintaining grid expand/collapse state
	     * post a data provider refresh.
	     * @method getOpenItems
	     * @deprecated Please use the getOpenKeys and getOpenItems instead.
	     *
	     */
	    getOpenItems(): any;
	    /**
	     * @method setOpenItems
	     */
	    setOpenItems(valCollection: any): void;
	    /**
	     * Pointer to the TOP level childrenCountField
	     * A property on the object that identifies if the object has children. Only needed in filterPageSortMode=server
	     *
	     * In lazy loaded (filterPageSortMode=server) hierarchical grids levels, the child
	     * level items are loaded when the user actually expands this level for the first time.
	     *
	     * In scenarios where it is known initially that there are children, set this property to
	     * the value of the object that identifies whether there are children. If this property is
	     * set, the expand collapse icon will be drawn only when the value of this property on the object
	     * returns an integer greater than zero. Otherwise, the level will always draw the expand collapse icon.
	     *
	     * @method getChildrenCountField
	     */
	    getChildrenCountField(): any;
	    /**
	     * @method setChildrenCountField
	     */
	    setChildrenCountField(value: any): void;
	    /**
	     * @method setVerticalScrollPolicy
	     */
	    setVerticalScrollPolicy(value: any): void;
	    /**
	     * @method setEnabled
	     */
	    setEnabled(value: any): void;
	    /**
	     * Returns the built in Edit Action
	     * @return
	     * @method getToolbarActionEdit
	     */
	    getToolbarActionEdit(): any;
	    /**
	     * When enableMultiColumnSort=true, setting this flag to on will enable AdvancedDataGrid like Split headers to enable multi column sort.
	     * @method getEnableSplitHeader
	     * @return {Boolean}
	     */
	    getEnableSplitHeader(): any;
	    /**
	     * @method setEnableSplitHeader
	     * @param value
	     */
	    setEnableSplitHeader(value: any): void;
	    /**
	     * The container for the right locked footer cells.
	     * This is an instance of the LockedContent class, which basically is an extended
	     * UIComponent that manages the filter and footer cell visiblity, heights, and the y positions.
	     *
	     * To access all the footer cells, please use the rows collection of the footerContainer.
	     * This contains a single RowInfo object, which contains a cells collection.
	     * The cells collection contains ComponentInfo objects, that has a component property, which is
	     * an instance of one of the subclasses of FlexDataGridCell. The cell will have a renderer property
	     * which is the actual UI control that is being displayed.
	     * @method getRightLockedFooter
	     */
	    getRightLockedFooter(): any;
	    /**
	     * Pointer to the TOP level levelRendererHeight
	     * Height to assign to the renderer for each level. If not specified, a new instance of the level renderer is created, and the height
	     * is defaulted to the height of that one instance. The same height is then reused for subsequent renderers of the same type.
	     * @method getLevelRendererHeight
	     */
	    getLevelRendererHeight(): any;
	    /**
	     * @method setLevelRendererHeight
	     */
	    setLevelRendererHeight(val: any): void;
	    /**
	     *  Unused/Not Applicable. For legacy purposes only
	     * @method getLockedColumnCount
	     */
	    getLockedColumnCount(): number;
	    /**
	     * Return the FilterSort objects at the top level
	     * @method getCurrentSorts
	     */
	    getCurrentSorts(): any;
	    /**
	     * If you set this to true, the next call to rebuild will not rebuild the pager control
	     * Needed in cases where there is user interaction in the pager control that we do not want
	     * to loose, but we want to rebuild the rest of the grid.
	     * @method getPreservePager
	     */
	    getPreservePager(): boolean;
	    /**
	     * @method setPreservePager
	     */
	    setPreservePager(value: any): void;
	    /**
	     * The horizontal scrollbar associated with the this.getBodyContainer(). The body container is
	     * the only section to have a scroll bar. The left and right locked containers scroll
	     * along with it.
	     * @method getHorizontalScrollBar
	     */
	    getHorizontalScrollBar(): any;
	    /**
	     * Returns true if the pager row is visible at the top level.
	     * @method getPagerVisible
	     */
	    getPagerVisible(): any;
	    /**
	     * Sets the pager row to visible at the top level.
	     * @method setPagerVisible
	     */
	    setPagerVisible(val: any): void;
	    /**
	     * Returns the list of groupedColumns at the root level.
	     * The grid always has at least one column level. This is also referred to as the top level, or the root level.
	     * In flat grids (non hierarchical), this is the only level. But in nested grids, you could have any number of nested levels.
	     * The groupedColumns collection actually belongs to the columnLevel, and since there is one root level,
	     * the groupedColumns collection of the grid basically points to the groupedColumns collection of this root level.
	     * Note : If you set the columns or the grouped columns dynamically, ensure you call grid.getColumnLevel().initializeLevel(grid);
	     * @method getGroupedColumns
	     */
	    getGroupedColumns(): any;
	    /**
	     * @param val
	     * @method setGroupedColumns
	     */
	    setGroupedColumns(val: any): void;
	    /**
	     * Returns the pager control at the root level.
	     * @method getPagerControl
	     */
	    getPagerControl(): any;
	    /**
	     * The page size of the top(root) level. To control page sizes at inner levels, set the pageSize property on the inner level.
	     * @method getPageSize
	     */
	    getPageSize(): any;
	    /**
	     * @method setPageSize
	     */
	    setPageSize(val: any): void;
	    /**
	     * Sets the filter row height at the top level.
	     * @method getFilterRowHeight
	     */
	    getFilterRowHeight(): any;
	    /**
	     * Sets the filter row height at the top level.
	     * @method setFilterRowHeight
	     */
	    setFilterRowHeight(val: any): void;
	    /**
	     * The vertical scrollbar associated with the this.getBodyContainer(). The body container is
	     * the only section to have a scroll bar. The left and right locked containers scroll
	     * along with it.
	     * @method getVerticalScrollBar
	     */
	    getVerticalScrollBar(): any;
	    /**
	     *The vertical scroll position of the body container. The body container is
	     * the only section to have a scroll bar. The left and right locked containers scroll
	     * along with it.
	     * @method getVerticalScrollPosition
	     */
	    getVerticalScrollPosition(): any;
	    /**
	     * @method setVerticalScrollPosition
	     *
	     */
	    setVerticalScrollPosition(val: any): void;
	    /**
	     * Returns the built in Delete Action
	     * @return
	     * @method getToolbarActionDelete
	     */
	    getToolbarActionDelete(): any;
	    /**
	     * An array of ChangeInfo objects that contains all the changes made to the data provider using the grid editing mechanism.
	     * @method getChanges
	     */
	    getChanges(): any;
	    /**
	     *The horizontal scroll position of the body container.
	     * @method getHorizontalScrollPosition
	     */
	    getHorizontalScrollPosition(): any;
	    /**
	     * @method setHorizontalScrollPosition
	     */
	    setHorizontalScrollPosition(val: any): void;
	    /**
	     * A function that can be used to control whether clicking on any cell in this level will select it.
	     * If this function is null or returns false, clicking on the cell will not result in the row being selected.
	     * If this function returns true, clicking on the cell will result in the row being selected in row selection modes only.
	     * This function has two parameters:
	     * 1) IFlexDataGridDataCell : Cell object which has a pointer to the row data (data) as well as other related information
	     * found in the documentation of the IFlexDataGridDataCell class. This parameter can be null, when the
	     * function is called as a response to a higher level checkbox select. For example, when the user hits
	     * select all. In this case, we do not always have a cell, and it will be passed in as null
	     * 2) The actual data object bound to the row.
	     * This function should true or false.
	     *
	     * For example:
	     *
	     * private function rowSelectableFunction(cell:FlexDataGridCell,data:Object):Boolean{
	     * 		return data.enabled;
	     * }
	     *
	     * @method getRowSelectableFunction
	     */
	    getRowSelectableFunction(): any;
	    /**
	     * @method setRowSelectableFunction
	     */
	    setRowSelectableFunction(value: any): void;
	    /**
	     * The property of the parent level object, that identifies the children that should be displayed on the next level.
	     * This is only required if the collection is not a hierarchical view.
	     *
	     * Please note, in server mode, this property is also the "storage" for the lazy loaded children.
	     *
	     * See the Partially and Lazy Loaded Server Grid examples for more details
	     * @method getChildrenField
	     */
	    getChildrenField(): any;
	    /**
	     * @method setChildrenField
	     */
	    setChildrenField(value: any): void;
	    /**
	     * Returns the max depth possible for nested datagrids
	     * @method getMaxDepth
	     */
	    getMaxDepth(): any;
	    /**
	     * Pointer to the TOP level pagerCellRenderer
	     * Container for the footer renderer. Needs to inherit from FlexDataGridPagerCell.
	     * Defaults to FlexDataGridPagerCell
	     *
	     * @method getPagerCellRenderer
	     */
	    getPagerCellRenderer(): any;
	    /**
	     * @method setPagerCellRenderer
	     */
	    setPagerCellRenderer(val: any): void;
	    /**
	     * The container for the left locked data cells. This is an instance of the ElasticContainer class,
	     * which basically attaches to the owner component (which is the bodyContainer) and scrolls vertically along with it.
	     * The horizontal scroll of this component is set to off)
	     *
	     * To access all the data cells, please use the rows collection of the bodyContainer
	     * This contains RowInfo objects, which contains a cells collection.
	     * The cells collection contains ComponentInfo objects, that has a component property, which is
	     * an instance of one of the subclasses of FlexDataGridCell. The cell will have a renderer property
	     * which is the actual UI control that is being displayed.
	     * @method getLeftLockedContent
	     */
	    getLeftLockedContent(): any;
	    /**
	     * Returns all columns at all levels.
	     * @return
	     *
	     */
	    getExportableColumnsAtAllLevel(exportOptions: any): any;
	    /**
	     * Flag that indicates whether or not to show the footer
	     * @method getEnableFooters
	     */
	    getEnableFooters(): any;
	    /**
	     * @method setEnableFooters
	     */
	    setEnableFooters(enabled: any): void;
	    /**
	     * Returns the top level columnCount
	     * @method getColumnCount
	     */
	    getColumnCount(): any;
	    /**
	     * Returns the built in Add Row Action
	     * @return
	     * @method getToolbarActionAddRow
	     */
	    getToolbarActionAddRow(): any;
	    /**
	     * Returns (selectedObjects(0)).
	     * @method getSelectedItem
	     */
	    getSelectedItem(): any;
	    /**
	     * @method setSelectedItem
	     */
	    setSelectedItem(val: any): void;
	    /**
	     *The container for the right locked filter and header cells.
	     * This is an instance of the LockedContent class, which basically is an extended
	     * UIComponent that manages the filter and footer cell visiblity, heights, and the y positions.
	     *
	     * To access all the filter/header cells, please use the rows collection of the headerContainer
	     * or this.getFilterContainer(). This contains a single RowInfo object, which contains a cells collection.
	     * The cells collection contains ComponentInfo objects, that has a component property, which is
	     * an instance of one of the subclasses of FlexDataGridCell. The cell will have a renderer property
	     * which is the actual UI control that is being displayed.
	     * @method getRightLockedHeader
	     */
	    getRightLockedHeader(): any;
	    /**
	     * Only applicable for flat grids. Selectd Index holds no meaning for hierarchical grids.
	     * This function will run a filter
	     * Returns dataProvider.indexOf(selectedObjects(0))
	     * @method getSelectedIndex
	     */
	    getSelectedIndex(): any;
	    /**
	     * @method setSelectedIndex
	     */
	    setSelectedIndex(val: any): void;
	    /**
	     * Returns an array of RowInfo objects in the filter row.
	     * @method getFilterRows
	     */
	    getFilterRows(): any;
	    /**
	     * All elements of the spinner owner that should be blurred when the spinner is active.
	     * The alpha of this element will be set to the spinnerGridAlpha style or 0.3.
	     * @method getElementsToBlur
	     */
	    getElementsToBlur(): any[];
	    /**
	     * Pointer to the TOP level headerSeparatorWidth
	     * Width to show the resize indicator between columns. Defaults to 4
	     * @method getHeaderSeperatorWidth
	     */
	    getHeaderSeperatorWidth(): any;
	    /**
	     * @method setHeaderSeperatorWidth
	     */
	    setHeaderSeperatorWidth(val: any): void;
	    /**
	     * The container for the pager cells. This is an instance of the FlexDataGridHeaderContainer class.
	     * This will contain a rows collection, which will contain a single RowInfo object. The Single RowInfo
	     * object has a cells Collection that will contain a single FlexDataGridPagerCell. The actual IPager
	     * is the renderer property of the FlexDataGridPagerCell.
	     * @method getPagerContainer
	     */
	    getPagerContainer(): any;
	    /**
	     * Returns the top level column names
	     * @method getColumnNames
	     */
	    getColumnNames(): any;
	    /**
	     * The container for the right locked data cells. This is an instance of the ElasticContainer class,
	     * which basically attaches to the owner component (which is the bodyContainer) and scrolls vertically along with it.
	     * The horizontal scroll of this component is set to off)
	     *
	     * To access all the data cells, please use the rows collection of the bodyContainer
	     * This contains RowInfo objects, which contains a cells collection.
	     * The cells collection contains ComponentInfo objects, that has a component property, which is
	     * an instance of one of the subclasses of FlexDataGridCell. The cell will have a renderer property
	     * which is the actual UI control that is being displayed.
	     * @method getRightLockedContent
	     */
	    getRightLockedContent(): any;
	    /**
	    * Returns the built in moveUp Action
	    * @return
	    * @method getToolbarActionMoveUp
	    */
	    getToolbarActionMoveUp(): any;
	    /**
	     * Returns the list of columns at the root level.
	     * The grid always has at least one column level. This is also referred to as the top level, or the root level.
	     * In flat grids (non hierarchical), this is the only level. But in nested grids, you could have any number of nested levels.
	     * The columns collection actually belongs to the columnLevel, and since there is one root level,
	     * the columns collection of the grid basically points to the columns collection of this root level.
	     *
	     * Note : If you set the columns or the grouped columns dynamically, ensure you call grid.getColumnLevel().initializeLevel(grid);
	     * @method getColumns
	     */
	    getColumns(): any;
	    /**
	     * @param val
	     * @method setColumns
	     */
	    setColumns(val: any): void;
	    /**
	     * Page index at the top level.
	     * @method getPageIndex
	     */
	    getPageIndex(): number | null;
	    /**
	     * Page index at the top level.
	     * @method setPageIndex
	     */
	    setPageIndex(val: any): void;
	    /**
	     * Pointer to the TOP level nestIndent
	     * The indentation to apply to each progressive nest level.
	     * @default 15
	     * @method getNestIndent
	     */
	    getNestIndent(): any;
	    /**
	     * @method setNestIndent
	     */
	    setNestIndent(val: any): void;
	    /**
	     * @method getVerticalSpill
	     */
	    getVerticalSpill(): any;
	    /**
	     * A comma seperated list of the following strings:
	     * filter,header,body,footer,pager.
	     *
	     * Changes the order in which the grid displays the
	     * filter,header,body,footer,pager
	     * The order in which the various sections of the grid
	     * are laid out.
	     *
	     * Defaults to pager,filter,body,footer
	     * @method getDisplayOrder
	     */
	    getDisplayOrder(): any;
	    /**
	     * @param value
	     * @method setDisplayOrder
	     *
	     */
	    setDisplayOrder(value: any): void;
	    /**
	     * Returns the list of columns groups at the root level.
	     * The grid always has at least one column level. This is also referred to as the top level, or the root level.
	     * In flat grids (non hierarchical), this is the only level. But in nested grids, you could have any number of nested levels.
	     * The column groups collection actually belongs to the columnLevel, and since there is one root level,
	     * the column groups collection of the grid basically points to the column groups collection of this root level.
	     * @method getColumnGroups
	     */
	    getColumnGroups(): any;
	    /**
	     * Pointer to the TOP level nestIndentPaddingCellRenderer
	     * Container for the nest indent padding cell. Needs to inherit from FlexDataGridExpandCollapseHeaderCell.
	     * Defaults to FlexDataGridExpandCollapseCell
	     *
	     * @method getNestIndentPaddingCellRenderer
	     */
	    getNestIndentPaddingCellRenderer(): any;
	    /**
	     * @method setNestIndentPaddingCellRenderer
	     */
	    setNestIndentPaddingCellRenderer(val: any): void;
	    /**
	     * Pointer to the TOP level headerHeight
	     * Height of the header for this level. Defaults to 25
	     * @method getHeaderRowHeight
	     */
	    getHeaderRowHeight(): any;
	    /**
	     * @method setHeaderRowHeight
	     */
	    setHeaderRowHeight(val: any): void;
	    /**
	     * A Class that is responsible for the multi column sort view. Defaults to MultiColumnSortRenderer. You
	     * can provide your own implementation by specifying a custom MultiColumnSortRenderer.
	     * @method getMultiSortRenderer
	     */
	    getMultiSortRenderer(): any;
	    /**
	     * @private
	     * @param value
	     * @method setMultiSortRenderer
	     */
	    setMultiSortRenderer(value: any): void;
	    /**
	     * Flag that indicates whether or not to show the filter
	     * @method getEnableFilters
	     */
	    getEnableFilters(): any;
	    /**
	     * @method setEnableFilters
	     */
	    setEnableFilters(enabled: any): void;
	    /**
	     * The property of the object on this level that should be used in the default sort at the root level. In nested levels, this property can be set on inner levels as well.
	     * @method getInitialSortField
	     */
	    getInitialSortField(): any;
	    /**
	     * @method setInitialSortField
	     */
	    setInitialSortField(value: any): void;
	    /**
	     * Returns true if the header row is visible at the top level.
	     * @method getHeaderVisible
	     */
	    getHeaderVisible(): any;
	    /**
	     * Sets the filter row to visible at the top level.
	     * @method setHeaderVisible
	     */
	    setHeaderVisible(val: any): void;
	    /**
	     * Returns the built in Filter Action
	     * @method getToolbarActionFilter
	     * @return
	     */
	    getToolbarActionFilter(): any;
	    /**
	     * Returns the built in Edit Action
	     * @method getToolbarActionSort
	     * @return
	     */
	    getToolbarActionSort(): any;
	    /**
	     * Returns the top level selectedObjects
	     * @method getSelectedItems
	     */
	    getSelectedItems(): any;
	    /**
	     * The Filter/Page/Sort Mode. Can be either "server" or "client".
	     * In client mode, the grid will take care of paging, sorting and
	     * filtering once the dataprovider is set.
	     * In server mode, the grid will fire a com.flexicious.grids.events.FilterPageSortChangeEvent
	     * named filterPageSortChange
	     * that should be used to construct an appropriate query to be sent to the
	     * backend.
	     *
	     * @defaultValue "client"
	     * @see com.flexicious.grids.events.FilterPageSortChangeEvent
	     * @method getFilterPageSortMode
	     */
	    getFilterPageSortMode(): any;
	    /**
	     * @method setFilterPageSortMode
	     */
	    setFilterPageSortMode(val: any): void;
	    /**
	     * Returns the maximum width of right locked columns. If there are multiple levels, goes through each of the levels and gets the maximum
	     * @method getRightLockedWidth
	     */
	    getRightLockedWidth(): any;
	    /**
	     * If true, initial sort direction for this level is ascending. Defaults to true.
	     * @method getInitialSortAscending
	     */
	    getInitialSortAscending(): any;
	    /**
	     * @method setInitialSortAscending
	     */
	    setInitialSortAscending(value: any): void;
	    /**
	     * The container for the footer cells. This is an instance of the FlexDataGridHeaderContainer class.
	     * This class manages cell initialization, recycling, mouse events on each cell, etc. The rows collection
	     * of this object will aways contain a single RowInfo object, which has a cells collection. This will
	     * be a series of ComponentInfo objects, which has a component property that will be an instance of FlexDataGridFooterCell
	     * Although the parent property of each of the cells could be either the
	     * leftLockedFooter, rightLockedFooteror the footerContainer, the rowInfo is the same, so the cells will
	     * include left, right, and unlocked cells.
	     * @method getFooterContainer
	     */
	    getFooterContainer(): any;
	    /**
	     * The container for the left locked filter and header cells.
	     * This is an instance of the LockedContent class, which basically is an extended
	     * UIComponent that manages the filter and footer cell visiblity, heights, and the y positions.
	     *
	     * To access all the filter/header cells, please use the rows collection of the headerContainer
	     * or filterContainer. This contains a single RowInfo object, which contains a cells collection.
	     * The cells collection contains ComponentInfo objects, that has a component property, which is
	     * an instance of one of the subclasses of FlexDataGridCell. The cell will have a renderer property
	     * which is the actual UI control that is being displayed.
	     * @method getLeftLockedHeader
	     */
	    getLeftLockedHeader(): any;
	    /**
	     * Flag to force appearance of the pager row even with enablePaging=false.
	     *
	     * Use this flag to show the pager control even if the
	     * enablePaging is set to false. This is used in a scenario
	     * where you wish to show buttons other than the paging buttons
	     * in the pager bar.
	     * @return
	     * @method getForcePagerRow
	     */
	    getForcePagerRow(): any;
	    /**
	     * @method setForcePagerRow
	     */
	    setForcePagerRow(val: any): void;
	    /**
	     * Whether or not to show the horizontal scroll bar.
	     *
	     * Please note, this behavior also controls the behavior when a column is resized.
	     * If <code>horizontalScrollPolicy</code> is <code>"none"</code>,
	     * increasing the size of a column reduces the size of other columns
	     * in the grid. Decreasing the size does the opposite. This makes the grid have
	     * a predictable width, and eliminates the need for a horizontal scroll bar.
	     *
	     * Default is "off", but if you specify any column as left or right locked, it becomes
	     * auto.
	     * @method getHorizontalScrollPolicy
	     */
	    getHorizontalScrollPolicy(): any;
	    /**
	     *
	     * @method setHorizontalScrollPolicy
	     */
	    setHorizontalScrollPolicy(value: any): void;
	    /**
	     * Returns true if the top column level filterPageSortMode is client.
	     * @return
	     * @method getIsClientFilterPageSortMode
	     *
	     */
	    getIsClientFilterPageSortMode(): boolean;
	    /**
	     * The current tooltip object trigger.
	     * @method getCurrentTooltipTrigger
	     */
	    getCurrentTooltipTrigger(): any;
	    /**
	     * Returns an array of RowInfo objects in the footer row.
	     * @method getFooterRows
	     */
	    getFooterRows(): any;
	    /**
	     * The max horizontal scroll position of the bodyContainer
	     * @return
	     * @method getMaxHorizontalScrollPosition
	     */
	    getMaxHorizontalScrollPosition(): any;
	    /**
	     * The main scrollable area of the grid. This is an instance of the FlexDataGridBodyContainer class, which
	     * derives from FlexDataGridContainerBase. The Body container manages renderer recycling, scrolling, expand
	     * collapse, editing, etc. The bodyContainer contains a rows collection, which is a visual representation of
	     * the current ViewPort, that is, it shows the currently visible cells based on the vertical and horizontal
	     * scroll postions. You can iterate through the currently visible cells via looping through the rows property
	     * and going through the cells collection of each RowInfo. Please note, this will only get you the currently
	     * visible cells. If you wish to access each cell as it is being initialized (or revived from a recyclable state)
	     * please wire up the rendererInitialized event on the grid.
	     * @method getBodyContainer
	     */
	    getBodyContainer(): any;
	    /**
	     * A Class that implements com.flexicious.controls.interfaces.IPager.
	     * Defaults to a built in implementation
	     * @see com.flexicious.grids.columns.footers.PagerControl.
	     * @see implements com.flexicious.controls.interfaces.IPager.
	     * @method getPagerRenderer
	     */
	    getPagerRenderer(): any;
	    /**
	     *
	     * @method setPagerRenderer
	     */
	    setPagerRenderer(val: any): void;
	    /**
	     * Returns the built in Move to Action
	     * @return
	     * @method getToolbarActionMoveTo
	     */
	    getToolbarActionMoveTo(): any;
	    /**
	     * A property on the object that identifies whether the object is disabled.
	     * @method getDisabledField
	     */
	    getDisabledField(): any;
	    /**
	     *
	     * @method setDisabledField
	     */
	    setDisabledField(val: any): void;
	    /**
	     * Unused/Not Applicable. For legacy purposes only. For flexicious Ultimate, the columnLockMode is set on the
	     * FlexDataGridColumn object itself.
	     * @method getLockedColumnWidth
	     */
	    getLockedColumnWidth(): number;
	    /**
	     *  The element of the owner that should be used to center the spinner.
	     * @method getElementToCenter
	     */
	    getElementToCenter(): this;
	    /**
	     * Returns the columns where excludeFromExport=false
	     * @method getSortableColumns
	     */
	    getSortableColumns(): any;
	    /**
	     * Support for selection based on exclusion. In scenarios where you have lazy loaded grids, selection cascade and select all will
	     * simply set flags on the selectionInfo object. The selectedObjects and selectedKeys no longer contain references to data that is selected
	     * Instead, they contain the items that the user explicitly selected. unSelectedObjects will contain items that the user explicitly unselected.
	     * This helps maintain selection across very large lazy loaded datasets. When you set the enableSelectionExclusion flag to true, use the selectionInfo object to
	     * access the selection (or build a query on the server) to identify the objects user selected. Selection
	     *
	     * @method getSelectionInfo
	     */
	    getSelectionInfo(): any;
	    /**
	     * Returns the sum of: <br/>
	     * If enableFooters, then footerRowHeight else 0
	     * @return
	     * @method getFooterRowHeight
	     */
	    getFooterRowHeight(): any;
	    /**
	     * Sets the footer row height at the top level.
	     * @method setFooterRowHeight
	     */
	    setFooterRowHeight(val: any): void;
	    /**
	     * The parent to add the spinner to.
	     * @method getSpinnerParent
	     */
	    getSpinnerParent(): this;
	    /**
	     * @method getIsScrolling
	     */
	    getIsScrolling(): any;
	    /**
	     * Flag to indicate whether or not to enable paging functionality
	     * @return
	     * @method getEnablePaging
	     */
	    getEnablePaging(): any;
	    /**
	     * @method setEnablePaging
	     */
	    setEnablePaging(enabled: any): void;
	    /**
	     * If all items from the top level are selected, returns TriStateCheckBox.STATE_CHECKED.
	     * If none are selected, returns TriStateCheckBox.STATE_UNCHECKED
	     * else returns TriStateCheckBox.STATE_MIDDLE
	     * @method getSelectAllState
	     */
	    getSelectAllState(): any;
	    /**
	     * Sets the selected keys for the top level.
	     * If you pass in TriStateCheckBox.STATE_CHECKED, all items are selected.
	     * If you pass in TriStateCheckBox.STATE_UNCHECKED, all items are unselected.
	     * TriStateCheckBox.STATE_MIDDLE is not valid parameter for this function.
	     * @method setSelectAllState
	     */
	    setSelectAllState(val: any): void;
	    /**
	     * This is a boolean flag on the dataprovider that notifies the grid whether or not the grid should allow
	     * interactive selection on the corresponding record.
	     * @method getSelectableField
	     */
	    getSelectableField(): any;
	    /**
	     * @method setSelectableField
	     */
	    setSelectableField(val: any): void;
	    /**
	     *  Delay in milliseconds before "virtualScroll" event is dispatched.
	     * @method getVirtualScrollDelay
	     */
	    getVirtualScrollDelay(): any;
	    /**
	     * @method setVirtualScrollDelay
	     */
	    setVirtualScrollDelay(value: any): void;
	    /**
	     * Returns the TOP level data without any filters.
	     * @method getDataProviderNoFilters
	     */
	    getDataProviderNoFilters(): any;
	    /**
	     * @method getTraceRows
	     */
	    getTraceRows(): string;
	    /**
	     * The Root Column Level. This is a property of type "FlexDataGridColumnLevel".
	     * This grid always has at least one column level. This is also referred to as the top level, or the root level.
	     * In flat grids (non hierarchical), this is the only level. But in nested grids, you could have any number of nested levels.
	     * The columns collection actually belongs to the columnLevel, and since there is one root level, the columns collection
	     * of the grid basically points to the columns collection of this root level.
	     *
	     * The FlexDataGridColumnLevel class has a "nextLevel" property, which is a pointer to another instance of the same class,
	     * or a "nextLevelRenderer" property, which is a reference to a ClassFactory the next level.
	     * Please note, currently, if you specify nextLevelRenderer, the nextLevel is ignored.
	     * This means, at the same level, you cannot have both a nested subgrid as well as a level renderer.
	     * @method getColumnLevel
	     */
	    getColumnLevel(): any;
	    /**
	     * @method setColumnLevel
	     */
	    setColumnLevel(value: any): void;
	    /**
	     * Returns the TOP level data without any paging, but with filters.
	     * @method getDataProviderNoPaging
	     */
	    getDataProviderNoPaging(): any;
	    /**
	     * A field on the dataprovider that indicates that this item should be selected
	     * @method getSelectedField
	     */
	    getSelectedField(): any;
	    /**
	     * @method setSelectedField
	     */
	    setSelectedField(val: any): void;
	    /**
	     * The current tooltip object.
	     * @method getCurrentTooltip
	     */
	    getCurrentTooltip(): any;
	    /**
	     * Flag to embed a column that shows row numbers
	     * @method getEnableRowNumbers
	     */
	    getEnableRowNumbers(): any;
	    /**
	     * @method setEnableRowNumbers
	     */
	    setEnableRowNumbers(value: any): void;
	    /**
	     * The data provider for the grid. Needs to be an Array. We provide examples in the sample project to
	     * convert XML to Json. See flexiciousNmsp.xml2json
	     * <p>
	     * Please note, for hierarchical data, hierarchy is setup in the Grid itself, so
	     * HTMLTreeGrid was designed with multi Level Heterogeneous and
	     * Homogeneous Hierarchical Data in mind, so we do not have the need to implement a customized data
	     * structure to morph object graphs into nested data. We are able to consume flat
	     * Array, and display a hierarchical UI. We provide numerous examples of this concept in our sample project.
	     * </p>
	     * <p>
	     * The Grid provides the concept of "columnLevels". In fact, a non-hierarchical
	     * Flexicious Ultimate Grid is simply a grid with just one column level. Please
	     * refer to the documentation of the FlexDataGridColumnLevel class.
	     * </p>
	     * <p>
	     * When you have multiple levels of data (i.e. multiple Column Levels),
	     * you can just assign a flat collection to the top level, and within the flat collection
	     * specify which property contains the next level of data, via the childrenField property.
	     * </p>
	     * @method getDataProvider
	     */
	    getDataProvider(): any;
	    /**
	     *
	     * @method setDataProvider
	     */
	    setDataProvider(value: any): void;
	    /**
	     * Not used.
	     * @method getVerticalScrollBarOffset
	     */
	    getVerticalScrollBarOffset(): any;
	    /**
	     * @method getPeristenceKey
	     */
	    /**
	     * String value that uniquely identifies this grid across the application.
	     * If you have multiple grids' with enablePreferencePersistence, and they
	     * happen to share the same value for the id field, e.g. id="grid1" they
	     * might overwrite each others' preferences. To combat this situation, we
	     * provide a property, which defaults to the id of the grid, but you can
	     * override to provide a globally unique key.
	     * @return {*}
	     * @method getPeristenceKey
	     */
	    getPeristenceKey(): any;
	    /**
	     * @method clearPreferences
	     */
	    clearPreferences(): void;
	    /**
	     * Persists the preferences as Shared Objects when  preferencePersistenceMode=client
	     * or dispatches an event with the preference information when preferencePersistenceMode=server
	     * @method persistPreferences
	     */
	    persistPreferences(name: any, isDefault: any): void;
	    /**
	     * Loads preference values from the Shared object, called automatically in
	     * preferencePersistenceMode=client. In server mode, you can directly set
	     * the preferences property to the string XML value persisted earlier.
	     * @method loadPreferences
	     */
	    loadPreferences(): void;
	    /**
	     * Takes an array collection of preferences and applies them to the grid.
	     * @method setPreferencesFromSettings
	     */
	    setPreferencesFromSettings(arrayCollection: any): void;
	    /**
	     * returns UserSettingsOptions.create(this);
	     * @method defaultUseSettingsOptionsFunction
	     */
	    defaultUseSettingsOptionsFunction(): any;
	    /**
	     * When enableMultiplePreferences = true, this represents a list of all preferences saved for this
	     * grid.
	     * @method getGridPreferencesInfo
	     */
	    getGridPreferencesInfo(): any;
	    /**
	     * Sets the multiple preferences array. On basis of the applyPreferences parameter, loops
	     * through the preferences and sets the preferences value to the first preference where
	     * isDefault=true.
	     * @method setGridPreferencesInfo
	     **/
	    setGridPreferencesInfo(val: any, applyPreferences: any): void;
	    /**
	     * When enableMultiplePreferences = true, this represents the currently applied preference
	     * @method getCurrentPreferenceInfo
	     */
	    getCurrentPreferenceInfo(): any;
	    /**
	     * When enableMultiplePreferences = true, applies the given preference as the current
	     * preference.
	     * @method setCurrentPreferenceInfo
	     **/
	    setCurrentPreferenceInfo(val: any, applyPreferences: any): void;
	    /**
	     * By default, when the grid's creation complete event is dispatched, the grid will go
	     * in and load the saved preference. This works well in most cases, but in some cases, where
	     * the data needed to build selection comboboxes (for filters) is built from the dataprovider,
	     * it makes sense to wait until the dataprovider is loaded to parse and set the preferences, otherwise
	     * the grid will end up ignoring saved preferences for filters that have dropdown based UI. In this case
	     * set autoLoadPreferences to true, and manually call loadPreferences when the data is received from
	     * the server and the dataprovider is set.<br/>
	     *
	     * grid:FlexDataGrid autoLoadPreferences=”false” <br/>
	     * And then, when you set the dataprovider: <br/>
	     * dgReport.dataProvider=dp;<br/>
	     * if(!dgReport.getPreferencesLoaded()){<br/>
	     *         dgReport.loadPreferences();<br/>
	     * }<br/>
	     *
	     * @method getAutoLoadPreferences
	     */
	    getAutoLoadPreferences(): any;
	    /**
	     * Returns an XML representation of the preferences specified in
	     * the  preferencesToPersist property and values being the actual
	     * values. When
	     * @return
	     * @method getPreferences
	     */
	    getPreferences(): any;
	    /**
	     * @method setPreferences
	     */
	    setPreferences(val: any): void;
	    /**
	     * Returns true if the load preferences has been called.
	     * @method getPreferencesLoaded
	     */
	    getPreferencesLoaded(): any;
	    /**
	     * String value that uniquely identifies this grid across the application.
	     * If you have multiple grids' with enablePreferencePersistence, and they
	     * happen to share the same value for the id field, e.g. id="grid1" they
	     * might overwrite each others' preferences. To combat this situation, we
	     * provide a property, which defaults to the id of the grid, but you can
	     * override to provide a globally unique key.
	     * @return
	     * @method getPreferencePersistenceKey
	     */
	    getPreferencePersistenceKey(): any;
	    /**
	     *  * String value that uniquely identifies this grid across the application.
	     * If you have multiple grids' with enablePreferencePersistence, and they
	     * happen to share the same value for the id field, e.g. id="grid1" they
	     * might overwrite each others' preferences. To combat this situation, we
	     * provide a property, which defaults to the id of the grid, but you can
	     * override to provide a globally unique key.
	     * @return {*}
	     * @method setPreferencePersistenceKey
	     */
	    setPreferencePersistenceKey(val: any): void;
	    /**
	     * IE does not know localName, it knows baseName.
	     * @param node
	     * @return {*|String|*}

	     * @method getLocalName
	     */
	    getLocalName(node: any): any;
	    /**
	     * Dumps the configuration information
	     */
	    dumpConfig(): void;
	    /**
	     * The main method that parses the configuration XML and builds the FlexDataGrid
	     * @method buildFromXml
	     * @param strXml
	     */
	    buildFromXml(strXml: any): void;
	    /**
	     * used by the buildFromXml method to parse the XML to build the grid
	     * @method parse
	     */
	    parse(strXml: any, grid: any): void;
	    executeFunctionByName(functionName: any, context: any): any;
	    /**
	     * Applies the given attribute to the target. Has built in logic to check to
	     * see if the property is a getter or a setter or a public field, or an event listener,
	     * or a factory, or a renderer. If there is a factory or a renderer, we try to evaluate
	     * the actual function on basis of the string passed in.
	     * @method applyAttribute
	     * @param target The target to apply the property to
	     * @param attr  The attribute on the target
	     * @param node  The value to apply
	     * @param direct
	     */
	    applyAttribute(target: any, attr: any, node: any, direct: any): void;
	    /**
	     * Method to extract action. Unused
	     * @method extractActionFromObject
	     */
	    extractActionFromObject(item: any): any;
	    /**
	     * Checks to see if there is a setter by the name provided, and if so use that, else apply as a property
	     * @method checkSetterAndApply
	     */
	    checkSetterAndApply(target: any, attrName: any, val: any): void;
	    /**
	     * Checks to see if there is a getter with the specified name, and if so, return the value of that getter
	     * other wise return the value of the field with this name,
	     * @method checkGetterAndRetrieve
	     */
	    checkGetterAndRetrieve(target: any, attrName: any): any;
	    /**
	     * @unused
	     * @method extractActions
	     */
	    extractActions(actionsNode: any, grid: any): void;
	    /**
	     * Code to extract filters. Has logic to extract date ranges, etc
	     * @method extractFilters
	     */
	    extractFilters(filtersNode: any, grid: any): void;
	    /**
	     * Method to extact column information from XML
	     * @method extractColumns
	     */
	    extractColumns(levelNodeChild: any, lvl: any): {
	        cols: any[];
	        hasColumnGroups: boolean;
	        j: number;
	        colNode: any;
	    };
	    /**
	     * Method to extract level information from xml
	     * @method extractLevel
	     */
	    extractLevel(levelNode: any, lvl: any): void;
	    /**
	     * @method extractColGroup
	     */
	    extractColGroup(cgNode: any): any;
	    /**
	     * @method extractCol
	     */
	    extractCol(colNode: any): any;
	    /**
	     *
	     * @private
	     * @param val
	     * @method setTotalRecords
	     */
	    setTotalRecords(val: any): void;
	    /**
	     * The total number of records at the root level (needs to be set only in server mode,
	     * because there is no way for the grid to know how many records on
	     * the server match the filter criteria)
	     * In client mode, the count of the data provider is used instead.
	     * @return
	     * @method getTotalRecords
	     */
	    getTotalRecords(): any;
	    /**
	     * Height of the row for this level. Defaults to 25
	     * @method getRowHeight
	     */
	    getRowHeight(): any;
	    /**
	     * @method setRowHeight
	     *
	     */
	    setRowHeight(o: any): void;
	    /**
	     * This is not used.
	     * @return
	     * @method getprintExportData
	     */
	    getprintExportData(): any;
	    /**
	     * @private
	     * @method setPrintExportData
	     */
	    setPrintExportData(value: any): void;
	    /**
	     * A function that takes in a data object, and a column, and returns a
	     * number. -1 indicates that the row should span the entire height of the
	     * grid. Please note, rowspans and col spans are only supported for data
	     * rows.
	     * @method getRowSpanFunction
	     */
	    getRowSpanFunction(): any;
	    /**
	     * A function that takes in a data object, and a column, and returns a
	     * number. -1 indicates that the row should span the entire height of the
	     * grid. Please note, rowspans and col spans are only supported for data
	     * rows.
	     * @method setRowSpanFunction
	     */
	    setRowSpanFunction(value: any): void;
	    /**
	     * A function that takes in a data object, and a column, and returns a
	     * number. -1 indicates that the row should span the entire width of the
	     * grid. Please note, rowspans and col spans are only supported for data
	     * rows.
	     *
	     * Since this function is defined on the grid, it will get a
	     * IFlexDataGridCell object that you should use to return a rowSpan or
	     * colSpan.
	     *
	     * @method getColSpanFunction
	     */
	    getColSpanFunction(): any;
	    /**
	     * A function that takes in a data object, and a column, and returns a
	     * number. -1 indicates that the row should span the entire width of the
	     * grid. Please note, rowspans and col spans are only supported for data
	     * rows.
	     *
	     * Since this function is defined on the grid, it will get a
	     * IFlexDataGridCell object that you should use to return a rowSpan or
	     * colSpan.
	     *
	     * @method setColSpanFunction
	     */
	    setColSpanFunction(value: any): void;
	    /**
	     * Cleanup method
	     * @method kill
	     */
	    kill(): void;
	    /**
	     * Check for changes to the div that holds us. HTML does not have a resize event, so we have to periodically inspect
	     * the dom element to see if there were any changes to the container size.
	     * @method checkResize
	     */
	    checkResize(): false | undefined;
	    /**
	     * Rebuilds the grid based on the current theme
	     * @method applyTheme
	     */
	    applyTheme(themeID: any): void;
	    /**
	     * Based upon the current theme id, returns the theme icons folder.
	     * @method getThemeToolbarIconFolder
	     */
	    getThemeToolbarIconFolder(): any;
	    /**
	     * @param {String} whatToFind
	     * @param {Object} flat
	     * @param {FlexDataGridColumnLevel} level
	     * @param {Array} result
	     * @param {Array} searchCols
	     * @param {Boolean} breakAfterFind
	     * @param {Boolean} captureCols
	     * @param {Number} flatIndex
	     */
	    itemsQuickFind(whatToFind: any, flat: any, level: any, result: any, searchCols: any, breakAfterFind: any, captureCols: any, flatIndex: any): any;
	    /**
	     * A global filter function that matches against gloalSearchString
	     * @param item Item to match
	     * @return 	Whether or not the item exists in the dataprovider.
	     *
	     */
	    globalFilterFunction(item: any): boolean;
	    /**
	     * Handler for the next highlight
	     * @param backwards
	     * @method gotoNextHighlight
	     */
	    gotoNextHighlight(backwards: any): void;
	    /**
	     * Returns true if the passed in cordinates are in the visible ViewPort
	     * @param x
	     * @param wwidth
	     * @method isInVisibleHorizontalRange
	     *
	     * @return {Boolean}
	     */
	    isInVisibleHorizontalRange(x: any, wwidth: any): boolean;
	    /**
	     * @method clearCurrentHighlight
	     * @param currentMatchedObject
	     */
	    clearCurrentHighlight(currentMatchedObject: any): void;
	    /**
	     * @method clearAllHighlight
	     */
	    clearAllHighlight(): void;
	    /**
	     * A String to highlight in the grid.
	     * @method getGlobalHightlightString
	     * @return {String}
	     */
	    getGlobalHightlightString(): any;
	    /**
	     * @private
	     */
	    setGlobalHightlightString(value: any): void;
	    /**
	     * A Boolean variable that tells us whether to highlight just the first occurence or all occurences
	     * @method getGlobalHightlightAll
	     * @return {Array}
	     */
	    getGlobalHightlightAll(): any;
	    /**
	     * @method getMatchedObjects
	     * @return {Array}
	     */
	    getMatchedObjects(): any;
	    /**
	     * @private
	     */
	    setGlobalHightlightAll(value: any): void;
	    /**
	     * @method getGlobalFilterString
	     * @return {String}
	     */
	    getGlobalFilterString(): any;
	    /**
	     * @private
	     */
	    setGlobalFilterString(value: any): void;
	    /**
	     * Array to search for when highlighting a term in specific columns
	     * @method getGlobalHighlightColumns
	     * @return {Array}
	     */
	    getGlobalHighlightColumns(): any;
	    /**
	     * @private
	     */
	    setGlobalHighlightColumns(value: any): void;
	    /**
	     * The index of the currently matched object
	     * @method getCurrentMatch
	     * @return {Number}
	     */
	    getCurrentMatch(): any;
	    /**
	     * A list of columns that the global search uses to search. If no columns are defined, all columns are searched.
	     * @method getGlobalFilterColumns
	     * @return {Array}
	     */
	    getGlobalFilterColumns(): any;
	    /**
	     * @private
	     */
	    setGlobalFilterColumns(value: any): void;
	    /**
	     * @method commitProperties
	     */
	    commitProperties(): void;
	    /**
	     * @method setDragDropCompleteFunction
	     * @param val
	     */
	    setDragDropCompleteFunction(val: any): void;
	    /**
	     *  Responsive mode for this grid. There are there modes.
	     *
	     *  <b><i> scrollBarMode </i></b> - The base HTMLTreeGrid will be extended to provide a
	     *  Bootstrap-like API to show or hide the scroll bar on basis of the screen width.
	     *  Below a certain pre-configured screen width, a scroll bar shall appear,
	     *  and allow the user to scroll through all the columns. Above this screen width,
	     *  there shall be no scrollbar.
	     *
	     *  <b><i> columnPriorityMode </i></b> -  The base HTMLTreeGrid will be extended to expose and
	     *  API for a priority model, where each column can be assigned a priority and the columns shall
	     *  appear or be hidden on basis of screen width.
	     *
	     *  <b><i> transposedColumnMode </i></b> - A new column type, TransposedColumn will be added to
	     *  accommodate smaller screens, below a certain pre-configured width, all the columns in the grid
	     *  shall be replaced by the Transposed Column which shall contain, within a single cell,
	     *  all the information that was held in the previous cells in a transposed manner

	     * @type {string}
	     * @default scrollBarMode
	     */
	    setResponsiveBehaviorMode(mode: any): void;
	    /**
	     * @override
	     */
	    componentWillUnmount(): void;
	    /**
	     * @method createColumn
	     * @param isCheckBox
	     * @return {*}
	     */
	    createColumn(isCheckBox: any): any;
	    /**
	     * @method createColumnLevel
	     * @return {flexiciousNmsp.FlexDataGridColumnLevel}
	     */
	    createColumnLevel(): any;
	    /**
	     * @method createColumnGroup
	     * @return {flexiciousNmsp.FlexDataGridColumnGroup}
	     */
	    createColumnGroup(): any;
	    /**
	     *  Gets the height of this component
	     * @method getWidth
	     * @return {Number}
	     */
	    getWidth(): any;
	    /**
	     *  Sets the width of this component
	     * @method setWidth
	     * @param val
	     */
	    setWidth(val: any): any;
	    /**
	     *  Gets the height of this component
	     * @method getHeight
	     * @return {Number}
	     */
	    getHeight(): any;
	    /**
	     *  Sets the height of this component
	     * @method setHeight
	     * @param {Number} val
	     */
	    setHeight(val: any): any;
	    /**
	     * @method setEnablePrint
	     * @param enabled
	     */
	    setEnablePrint(enabled: any): void;
	    /**
	     * @method setEnablePdf
	     * @param enabled
	     */
	    setEnablePdf(enabled: any): void;
	    /**
	     * @method onScrollTimerComplete
	     * @param event
	     */
	    onScrollTimerComplete(event: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridBodyContainer' {
	import FlexDataGridContainerBase from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridContainerBase';
	/**
	 * FlexDataGridBodyContainer is the container for the unlocked section of the datagrid. This is the only container in the entire
	 * component tree that scrolls.
	 * In addition to all the base functionality that it inherits from FlexDataGridContainerBase, it adds the following pieces of functionality:
	 *
	 * <ul>
	 * <li>Vertical Scroll Renderer Recycling</li>
	 * </ul>
	 *
	 * @inheritDoc
	 * @constructor
	 * @class FlexDataGridBodyContainer
	 * @namespace flexiciousNmsp
	 */
	export default class FlexDataGridBodyContainer extends FlexDataGridContainerBase {
	    constructor(grid: any);
	    /**
	     * @method getClassNames
	     * @return Array
	     */
	    getClassNames(): string[];
	    /**
	     * @method updateDisplayList
	     * @param unscaledWidth
	     * @param unscaledHeight
	     */
	    updateDisplayList(unscaledWidth: any, unscaledHeight: any): void;
	    /**
	     * handle getScrollableRect
	     * @method getScrollableRect
	     * @return {flexiciousNmsp.Rectangle}
	     * @method getScrollableRect
	     */
	    getScrollableRect(): any;
	    /**
	     * handle filterchange
	     * @method onFilterChange
	     * @param event
	     */
	    onFilterChange(event: any): void;
	    /**
	     *
	     * @method onPageChange
	     * @param event
	     */
	    onPageChange(event: any): void;
	    /**
	     * @method getRowPositionInfo
	     * @param {Object} item
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} lvl
	     * @return {*}
	     */
	    getRowPositionInfo(item: any, lvl: any): any;
	    /**
	     * @method getRowPositionInfoFromRows
	     * @param {Object} item
	     * @return {*}
	     */
	    getRowPositionInfoFromRows(item: any): any;
	    /**
	     * On basis of the vertical scroll position provided, does a quick binary lookup of the record
	     * to be shown at that row.
	     *
	     * @method binarySearch
	     * @param {Array} arr
	     * @param {Number} verticalPos
	     * @param {Number} low
	     * @param {Number} high
	     * @return {flexiciousNmsp.RowPositionInfo}
	     *
	     */
	    binarySearch(arr: any, verticalPos: any, low: any, high: any): any;
	    /**
	     * Gets a copy of the calculated item vertical positions
	     * @method getItemVerticalPositions
	     * @return {Array}
	     */
	    getItemVerticalPositions(): any;
	    /**
	     * Returns the RowPosition Info object for the item at the given vertical scroll position
	     *
	     * @param {Number} position
	     * @return {flexiciousNmsp.RowPositionInfo}
	     */
	    getItemAtPosition(position: any): any;
	    /**
	     * Sets the records in the visible range.
	     * @method setVisibleRange
	     */
	    setVisibleRange(): void;
	    /**
	     * @method createComponents
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Number} currentScroll
	     *
	     */
	    createComponents(level: any, currentScroll: any): void;
	    /**
	     * @method getRowsForSnapping
	     * @return {*}
	     */
	    getRowsForSnapping(): any;
	    /**
	     * @method recycleH
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Boolean} scrollRight
	     */
	    recycleH(level: any, scrollRight: any): void;
	    /**
	     * @method recycle
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Boolean} scrollDown
	     * @param {Number} scrollDelta
	     * @param {Boolean} scrolling
	     *
	     */
	    recycle(level: any, scrollDown: any, scrollDelta: any, scrolling: any): void;
	    /**
	     * @method drawRowsUsingCache
	     * @param {flexiciousNmsp.RowPositionInfo} start
	     * @param {flexiciousNmsp.RowPositionInfo} end
	     * @param {Boolean} scrollDown
	     * @param {Boolean} offPage
	     *
	     */
	    drawRowsUsingCache(start: any, end: any, scrollDown: any, offPage: any): void;
	    /**
	     * @method processItemPositionInfoUsingCache
	     * @param {flexiciousNmsp.RowPositionInfo} seed
	     * @param {Number} insertionPoint
	     * @param {Boolean} scrollDown
	     *
	     */
	    processItemPositionInfoUsingCache(seed: any, insertionPoint: any, scrollDown: any): void;
	    /**
	     * @method checkInconsistency
	     */
	    checkInconsistency(): void;
	    /**
	     * @method positionExists
	     * @param {flexiciousNmsp.RowPositionInfo} seed
	     * @return {Boolean}
	     */
	    positionExists(seed: any): boolean;
	    /**
	     * @method keyDownHandler
	     * @param event
	     */
	    keyDownHandler(event: any): void;
	    /**
	     *
	     */
	    validateDisplayList(): void;
	    /**
	     * @method rowExists
	     * @param {flexiciousNmsp.RowPositionInfo} rowPos
	     * @return {Boolean}
	     */
	    rowExists(rowPos: any): boolean;
	    render(): any;
	    /**
	     * @method removeMatchSticks
	     */
	    removeMatchSticks(): void;
	    /**
	     * @method removeAllComponents
	     * @param {Boolean} recycle
	     */
	    removeAllComponents(recycle: any): void;
	    /**
	     * @method saveRowInCache
	     * @param {flexiciousNmsp.RowInfo} row
	     */
	    saveRowInCache(row: any): void;
	    /**
	     * Inserts the column specified column before the specified column
	     *
	     * @method shiftColumns
	     * @param {flexiciousNmsp.FlexDataGridColumn} columnToInsert
	     * @param {flexiciousNmsp.FlexDataGridColumn} insertBefore
	     *
	     */
	    shiftColumns(columnToInsert: any, insertBefore: any): void;
	    /**
	     * @method drawRows
	     * @param {Boolean} forceFiller
	    */
	    drawRows(forceFiller: any): boolean;
	    /**
	     * @method drawFiller
	     * @param {flexiciousNmsp.RowPositionInfo} end
	     */
	    drawFiller(end: any): void;
	    /**
	     * @method adjustFiller
	     * @param {Number} offset
	     */
	    adjustFiller(offset: any): void;
	    /**
	     * @method setBackgroudFillerSize
	     */
	    setBackgroudFillerSize(): void;
	    /**
	     * @method onWidthChanged
	     * @param event
	     */
	    onWidthChanged(event: any): void;
	    /**
	     * @method onHeightChanged
	     * @param event
	     */
	    onHeightChanged(event: any): void;
	    /**
	     * @method resizeFillerCells
	     */
	    resizeFillerCells(): void;
	    /**
	     * @method  processRowPositionInfo
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     * @param {Boolean} scrollDown
	     * @param {flexiciousNmsp.RowInfo} existingRow
	     * @param {Array} existingComponents
	     * @return {flexiciousNmsp.RowInfo}
	     *
	     */
	    processRowPositionInfo(rowPositionInfo: any, scrollDown: any, existingRow: any, existingComponents: any): any;
	    /**
	     * @method addEventListeners
	     * @param {flexiciousNmsp.ComponentInfo} comp
	     */
	    addEventListeners(comp: any): void;
	    /**
	     * @method onCellDragComplete
	     * @param event
	     */
	    onCellDragComplete(event: any): void;
	    /**
	     * @method onCellDragMouseMove
	     * @param event
	     */
	    onCellDragMouseMove(event: any): void;
	    /**
	     * @method onCellDragMouseUp
	     * @param event
	     */
	    onCellDragMouseUp(event: any): void;
	    /**
	     * @method onCellDragMouseDown
	     * @param event
	     */
	    onCellDragMouseDown(event: any): void;
	    /**
	     * @method onDragEnter
	     * @param event
	     */
	    onDragEnter(event: any): void;
	    /**
	     * @method onDragDrop
	     * @param event
	     */
	    onDragDrop(event: any): void;
	    /**
	     * @method onCellDropMouseMove
	     * @param event
	     */
	    onCellDropMouseMove(event: any): void;
	    /**
	     * @method removeEventListeners
	     * @param {flexiciousNmsp.ComponentInfo} comp
	     */
	    removeEventListeners(comp: any): void;
	    /**
	     * @method handleSpaceBar
	     * @param {flexiciousNmsp.FlexDataGridCell} cell
	     * @param {*} triggerEvent
	     */
	    handleSpaceBar(cell: any, triggerEvent: any): void;
	    /**
	     * @method handleArrowKey
	     * @param {flexiciousNmsp.FlexDataGridCell} cell
	     * @param {Number} keyCode
	     * @param {*} triggerEvent
	     */
	    handleArrowKey(cell: any, keyCode: any, triggerEvent: any): boolean | undefined;
	    /**
	     * @method processItem
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     * @param {Boolean} scrollDown
	     * @param {flexiciousNmsp.RowInfo} existingRow
	     * @param {Array} existingComponents
	     * @return {flexiciousNmsp.RowInfo}
	     */
	    processItem(rowPositionInfo: any, scrollDown: any, existingRow: any, existingComponents: any): any;
	    /**
	     * @method pushCell
	     * @param {flexiciousNmsp.FlexDataGridColumn} column
	     * @param {flexiciousNmsp.RowInfo} row
	     * @param {Array} existingComponents
	     * @return {flexiciousNmsp.ComponentAdditionResult}
	     */
	    pushCell(column: any, row: any, existingComponents: any): any;
	    /**
	     * @method gridMouseOut
	     */
	    gridMouseOut(): void;
	    /**
	     * @method onExpandCollapse
	     * @param event
	     */
	    onExpandCollapse(event: any): void;
	    /**
	     * @method handleExpandCollapse
	     * @param {flexiciousNmsp.ExpandCollapseComponent} disclosureCell
	     */
	    handleExpandCollapse(disclosureCell: any): void;
	    /**
	     * Given a row index (less than the total number of rows, goes to the row in question).
	     * Row index becomes the first visible row. Please note this is a 1 based index.
	     *
	     * @method gotoRow
	     * @param {Number} rowIndex
	     * @return {Boolean}
	     *
	     */
	    gotoRow(rowIndex: any): boolean;
	    /**
	     * Selects the provided text in the currently visible cells
	     * that have the default item renderer, or if the item renderer
	     * has the selection property
	     *
	     * @method selectText
	     * @param {String} txt
	     *
	     */
	    selectText(txt: any): void;
	    /**
	     * Iterates through the data provider to get a list of objects
	     * that match the text provided.
	     *
	     * @method quickFind
	     * @param {String} whatToFind
	     * @param {Object} flat
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Array} result
	     *
	     */
	    quickFind(whatToFind: any, flat: any, level: any, result: any): any;
	    /**
	     * Given a data item, scrolls to that item in the datagrid
	     * If the use item Key For compare parameter is set to true, uses
	     * the selectedKeyField value of the item to identify the item.
	     *
	     * Flexicious by default will only build RowPositionInfo objects
	     * for open items that the user can visually scroll to. So items that
	     * are closed, or are on a different page, will not be built, and cannot be scrolled to.
	     * If you set rebuildRowPositions to true, the function will inspect the data
	     * provider to find the item in question, and build the RowPositionInfo for it
	     * if its not found in the currently built RowPositionInfo objects.
	     *
	     * @method gotoItem
	     * @param {Object} item
	     * @param {Boolean} highlight
	     * @param {Boolean} useItemKeyForCompare
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Boolean} rebuild
	     * @return {Boolean}
	     *
	     */
	    gotoItem(item: any, highlight: any, useItemKeyForCompare: any, level: any, rebuild: any): boolean;
	    /**
	     * @method addOpenItem
	     * @param {Object} item
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     * @param {Boolean} check
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} lvl
	     */
	    addOpenItem(item: any, rowPositionInfo: any, check: any, lvl: any): void;
	    /**
	     * Given an object at any level, returns an array containing information about that object,
	     * followed by its parent, until the top of the tree is reached, in reverse order.
	     * The array contains a list of ItemPositionInfo objects, which contains that object
	     * itself, its index, as well as the page number it appears on, if enablePaging is
	     * set to true else -1.
	     *
	     *
	     * @method getObjectStack
	     * @param {Object} itemToFind
	     * @param {Array} stackSoFar
	     * @param {Boolean} useItemKeyForCompare
	     * @param {Object} flat
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     *
	     * @return {Boolean}
	     *
	     */
	    getObjectStack(itemToFind: any, stackSoFar: any, useItemKeyForCompare: any, flat: any, level: any): boolean;
	    /**
	     * Scrolls to a row that is already drawn.
	     * @method scrollToExistingRow
	     * @param {Number} vsp
	     * @param {Bolean} scrollDown
	     */
	    scrollToExistingRow(vsp: any, scrollDown: any): void;
	    /**
	     * Returnes true if the row's vertical position is less than the grids vertical scroll bar position
	     * or if the rows vertical position plus rows height is greater than the grids vertical position plus grid height.
	     *
	     * @method isOutOfVisibleArea
	     * @param {flexiciousNmsp.RowInfo} row
	     *
	     */
	    isOutOfVisibleArea(row: any): boolean;
	    /**
	     * Returnes true if the row's vertical position is less than the grids vertical scroll bar position
	     * or if the rows vertical position plus rows height is greater than the grids vertical position plus grid height.
	     *
	     * @method isYOutOfVisibleArea
	     * @param {Number} numY
	     * @param {Number} numH
	     *
	     * @return {Number}
	     *
	     */
	    isYOutOfVisibleArea(numY: any, numH: any): boolean;
	    /**
	     * Goes to the vertical position specified by the parameter.
	     * Recycles the renderers
	     *
	     * @method gotoVerticalPosition
	     * @param {Number} vsp vertical Scroll Position
	     *
	     */
	    gotoVerticalPosition(vsp: any): void;
	    /**
	     * @method isLoading
	     *
	     * @param {object} item
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Boolean} useSelectedKeyField
	     *
	     * @return {Boolean}
	     */
	    isLoading(item: any, level: any, useSelectedKeyField: any): boolean;
	    /**
	     *
	     * @method setChildData
	     *
	     * @param {Object} item
	     * @param {Object} schildren
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Number} totalRecords
	     * @param {Boolean} useSelectedKeyField
	     *
	     * @return {Boolean}
	     *
	     */
	    setChildData(item: any, schildren: any, level: any, totalRecords: any, useSelectedKeyField: any): void;
	    /**
	     * @method expandCollapse
	     *
	     * @param {Object} expandingDataItem
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     * @param {Boolean} forceScrollBar
	     *
	     */
	    expandCollapse(expandingDataItem: any, rowPositionInfo: any, forceScrollBar: any): void;
	    /**
	     * @method adjustRowPositions
	     *
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     * @param {number} howManyToRemove
	     * @param {number} heightRemoved
	     *
	     */
	    adjustRowPositions(rowPositionInfo: any, howManyToRemove: any, heightRemoved: any): void;
	    /**
	     * @method invalidateCalculatedHeight
	     */
	    invalidateCalculatedHeight(): void;
	    /**
	     * @method setCurrentRowAtScrollPosition
	     * @param {number} vsp
	     * @return {boolean}
	     */
	    setCurrentRowAtScrollPosition(vsp: any): any;
	    /**
	     * @method getFilteredPagedSortedData
	     *
	     * @param {Dictionary} dictionary
	     * @param {Boolean} applyFilter
	     * @param {Boolean} applyPaging
	     * @param {Boolean} applySort
	     * @param {Array} pages
	     * @param {Boolean} flatten
	     *
	     * @return {Object}
	     */
	    getFilteredPagedSortedData(dictionary: any, applyFilter: any, applyPaging: any, applySort: any, pages: any, flatten: any): any[];
	    /**
	     * @method gatherFilteredPagedSortedData
	     *
	     * @param {Dictionary} dictionary
	     * @param {ArrayCollection} result
	     * @param {Object} flat
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Object} parentObject
	     * @param {Boolean} applyFilter
	     * @param {Boolean} applyPaging
	     * @param {Boolean} applySort
	     * @param {Array} pages
	     * @param {Boolean} flatten
	     *
	     */
	    gatherFilteredPagedSortedData(dictionary: any, result: any, flat: any, level: any, parentObject: any, applyFilter: any, applyPaging: any, applySort: any, pages: any, flatten: any): void;
	    /**
	     * @method getRootFlat
	     * @return {Object}
	     */
	    getRootFlat(): any;
	    /**
	     * Dual purpose function, one to calculate height, second to figure out that at
	     * vertical position Y, the seed record to be shown is?.
	     *
	     * @method calculateTotalHeight
	     *
	     * @param {Object} flat
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {number} heightSoFar
	     * @param {number} nestLevel
	     * @param {flexiciousNmsp.RowPositionInfo} expanding
	     * @param {Array} addedRows
	     * @param {Object} parentObject
	     * @param {boolean} isRecursive
	     *
	     * @return {number} total Height
	     */
	    calculateTotalHeight(flat: any, level: any, heightSoFar: any, nestLevel: any, expanding: any, addedRows: any, parentObject: any, isRecursive: any): any;
	    /**
	     *
	     * @method checkScrollChange
	     * @param {number} prevCalc previous calculation
	     *
	     */
	    checkScrollChange(prevCalc: any): void;
	    /**
	     * Clears out the variable row height renderers
	     * @method clearVariableRowHeightRenderes
	     */
	    clearVariableRowHeightRenderes(): void;
	    /**
	     * @method processSection
	     *
	     * @param {Array} addedRows
	     * @param {number} rowIndex
	     * @param {Object} parentObject
	     * @param {number} heightSoFar
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Object} parentObject5
	     * @param {number} chromeType
	     * @param {flexiciousNmsp.RowPositionInfo} expanding
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} expandingLevel
	     *
	     * @return {number}
	     */
	    processSection(addedRows: any, rowIndex: any, parentObject: any, heightSoFar: any, level: any, parentObject5: any, chromeType: any, expanding: any, expandingLevel: any): number;
	    /**
	     * @method getChromeType
	     * @param {String} name name of chrome type
	     * @return {number}
	     */
	    getChromeType(name: any): any;
	    /**
	     * @method checkAutoAdjust
	     */
	    checkAutoAdjust(): void;
	    /**
	     * @method ensureAutoAjustHeight
	     */
	    ensureAutoAjustHeight(): void;
	    /**
	     * @method addToVerticalPositions
	     *
	     * @param {Object} item
	     * @param {number} heightSoFar
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Object} parent
	     * @param {number} rowType
	     *
	     * @return {number}
	     */
	    addToVerticalPositions(item: any, heightSoFar: any, level: any, parent: any, rowType: any): number;
	    /**
	     * @method addToExpandingPositions
	     *
	     * @param {Array} array
	     * @param {number} parentRowIndex
	     * @param {object} item
	     * @param {number} heightSoFar
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Object} parent
	     * @param {number} rowType
	     *
	     * @return {number}
	     */
	    addToExpandingPositions(array: any, parentRowIndex: any, item: any, heightSoFar: any, level: any, parent: any, rowType: any): number;
	    /**
	     * @method addCell
	     *
	     * @param {UIComponent} component
	     * @param {flexiciousNmsp.RowInfo} row
	     * @param {flexiciousNmsp.ComponentInfo} existingComponent
	     *
	     * @return {flexiciousNmsp.ComponentAdditionResult}
	     *
	     */
	    addCell(component: any, row: any, existingComponent: any): any;
	    /**
	     * @method onHeaderCellClicked
	     *
	     * @param {flexiciousNmsp.FlexDataGridHeaderCell} headerCell
	     * @param {*} triggerEvent
	     * @param {boolean} isMsc
	     *
	     */
	    onHeaderCellClicked(headerCell: any, triggerEvent: any, isMsc: any): void;
	    /**
	     * @method onChildHeaderClicked
	     * @param {flexiciousNmsp.FlexDataGridHeaderCell} headerCell
	     */
	    onChildHeaderClicked(headerCell: any): void;
	    /**
	     * @method onSelectAllChanged
	     * @param {*} event
	     */
	    onSelectAllChanged(event: any): void;
	    /**
	     * @method addRow
	     *
	     * @param {number} ht
	     * @param {boolean} scrollDown
	     * @param {RowPositionInfo} rowPositionInfo
	     *
	     */
	    addRow(ht: any, scrollDown: any, rowPositionInfo: any): any;
	    /**
	     * @method getAllRows
	     * @return {ArrayCollection} new rows
	     */
	    getAllRows(): any;
	    /**
	     * @method nextPage
	     * Goes to the next page of data.
	     */
	    nextPage(): void;
	    /**
	     * @method getColumnGroupDepth
	     * @param {flexiciousNmsp.RowInfo} row
	     * @return {number} depth
	     *  - not supported for now. Column groups are only supported at the top level.
	     */
	    getColumnGroupDepth(row: any): number;
	    /**
	     * @method clearAllCollections
	     */
	    clearAllCollections(): void;
	    /**
	     * @method clearOpenItems
	     */
	    clearOpenItems(): void;
	    /**
	     * @method removeOpenItem
	     *
	     * @param {Object} item
	     * @param {RowPositionInfo} rowPositionInfo
	     *
	     */
	    removeOpenItem(item: any, rowPositionInfo: any): void;
	    /**
	     * In lazy loaded grid levels, (filterPageSortMode=server), when
	     * the user expands a level for the first time, since the data
	     * is not loaded, the level dispatches the filterPageSortChange, or itemLoad.
	     *
	     * This event is then handled by client code, and when the data
	     * is retreieved from the server, the setChildData method is called. This method will
	     * store the results in this array collection.
	     *
	     * @method getLoadedItems
	     *
	     */
	    getLoadedItems(): any;
	    /**
	     * @method setVerticalScrollPosition
	     * @param {number} val
	     *
	     */
	    setVerticalScrollPosition(val: any): void;
	    /**
	     * Returns true if there is another page of data.
	     *
	     * @method getValidNextPage
	     * @return {boolean}
	     */
	    getValidNextPage(): boolean;
	    /**
	     * Returns the number of rows currently visible.
	     *
	     * @method getOnScreenRows
	     * @return {Array} on screen rows
	     */
	    getOnScreenRows(): any[];
	    /**
	     * @method getCalculatedTotalHeight
	     * @return {number} total calculated height.
	     */
	    getCalculatedTotalHeight(): any;
	    /**
	     * @method getNumTotalRows
	     * @return {number} total number of rows.
	     */
	    getNumTotalRows(): any;
	    /**
	     * Gets the vertical scroll bar props
	     *
	     * @method getVerticalScrollBar
	     * @return {flexiciousNmsp.Rectangle} vertical scrollbar
	     */
	    getVerticalScrollBar(): any;
	    /**
	     * Gets the horizontal scroll bar props
	     *
	     * @method getVerticalScrollBar
	     * @return {flexiciousNmsp.Rectangle} horizotal scrollbar
	     */
	    getHorizontalScrollBar(): any;
	    /**
	     * Gets the scrollLeft
	     */
	    /**
	     * Gets the scrollLeft
	     *
	     * @method getMaxHorizontalScrollPosition
	     * @return {number} maximum horizontal scroll position
	     *
	     */
	    getMaxHorizontalScrollPosition(): number;
	    /**
	     * Gets the scrollLeft
	     *
	     * @method getMaxVerticalScrollPosition
	     * @return {number} maximum vertical scroll position
	     *
	     */
	    getMaxVerticalScrollPosition(): number;
	    /**
	     * @method addMatchSticks
	     */
	    addMatchSticks(p: any): void;
	    /**
	     * @method addMatchStick
	     * @param p
	     */
	    addMatchStick(p: any): void;
	    /**
	     * @method addHMatchStick
	     * @param p
	     */
	    addHMatchStick(p: any): void;
	    /**
	     * @method kill
	     */
	    kill(): void;
	    /**
	     * @private
	     * @method getRowForRowPositionInfo
	     * @param {flexiciousNmsp.RowPositionInfo} rowPos
	     *
	     * @return {flexiciousNmsp.RowInfo} row
	     */
	    getRowForRowPositionInfo(rowPos: any): any;
	    /**
	     * @method checkStickyHeader
	     */
	    checkStickyHeader(): void;
	    /**
	     * @method hideFloatingRow
	     */
	    hideFloatingRow(): void;
	    /**
	     * @private
	     * @method snapToColumnWidths
	     */
	    snapToColumnWidths(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridCheckBoxColumn' {
	import FlexDataGridColumn from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumn';
	/**
	 * A column to add checkbox selection to the grid.
	 * @constructor
	 * @class FlexDataGridCheckBoxColumn
	 * @namespace flexiciousNmsp
	 */
	export default class FlexDataGridCheckBoxColumn extends FlexDataGridColumn {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * For printing, we need to be a  IFactory
	     * @method newInstance
	     * @return {flexiciousNmsp.FlexDataGridCheckBoxColumn}
	     *
	     */
	    newInstance(): any;
	    /**
	     * Flag to enable/disable the top level select checkbox. You would use this if you need the checkbox selection behavior, but do not wish for the user to be able to select all.
	     * @method getEnableSelectAll
	     * @return {boolean}
	     */
	    getEnableSelectAll(): any;
	    /**
	     * @method setEnableSelectAll
	     * @param {boolean} value
	     */
	    setEnableSelectAll(value: any): void;
	    /**
	     * In single select datagrids, set this to true for the icon to appear as if it is a radio button
	     * @method getEnableRadioButtonMode
	     * @return {boolean}
	     */
	    getEnableRadioButtonMode(): any;
	    /**
	     * In single select datagrids, set this to true for the icon to appear as if it is a radio button
	     * @method setEnableRadioButtonMode
	     * @param {boolean} value
	     */
	    setEnableRadioButtonMode(value: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumn' {
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * The FlexDataGridColumn class describes a column in a FlexDataGrid Column control.
	 *
	 * @constructor
	 * @class FlexDataGridColumn
	 * @namespace flexiciousNmsp
	 */
	export default class FlexDataGridColumn extends EventDispatcher {
	    constructor();
	    /**
	     * @method getClassNames
	     */
	    getClassNames(): string[];
	    /**
	     * The doFormat method returns formatted value on basis of the format properties (See description below)<br/>
	     * If the input is null, returns null.
	     * If there is a formatter specified, uses the formatter's format method to return a formatted value.
	     * If the format property is specified and no formatter is specified, the column will instantiate
	     * a formatter on basis of the value of the format property. The property can be one of 5 constants.
	     * <ul>
	     * <li>date (FORMAT_DATE) - Uses the DateUtils.MEDIUM_DATE_MASK format MMM D, YYYY - Can be customized using formatterDateString Property</li>
	     * <li>datetime (FORMAT_DATE_TIME) - Uses the DateUtils.LONG_DATE_MASK+ " " + DateUtils.MEDIUM_TIME_MASK format MMM D, YYYY L:NN:SS A - Can be customized using formatterDateString Property</li>
	     * <li>time (FORMAT_TIME) - Uses the DateUtils.LONG_TIME_MASK format. L:NN:SS A TZD - Can be customized using formatterDateString Property</li>
	     * <li>currency (FORMAT_CURRENCY) - Uses formatterCurrencySymbol and formatterPrecision properties for the currency formatter. </li>
	     * <li>number (FORMAT_NUMBER) - Uses formatterPrecision properties for the number formatter.</li>
	     * </ul>
	     * Based on the formatter created above, the value will be returned.
	     *
	     * @param retVal	String to format
	     * @return 			Formatted string.
	     * @method doFormat
	     */
	    doFormat(retVal: any): any;
	    /**
	     * @method labelFunctionSortCompare
	     * @param {object} obj1
	     * @param {object} obj2
	     * @return {boolean}
	     */
	    labelFunctionSortCompare(obj1: any, obj2: any): boolean;
	    /**
	     *  Returns the String that the item renderer displays for the given data object.
	     *  0) If there is a linktext property specified on the column, this function returns that.
	     *  1) If the DataGridColumn or its DataGrid control
	     *  has a non-null <code>labelFunction</code>
	     *  property, it applies the function to the data object.
	     *  2) If the DataGridColumn or its DataGrid control
	     *  has a non-null <code>labelFunction2</code>
	     *  property, it applies the function to the data object.
	     *  3) Otherwise, the method extracts the contents of the field specified by the
	     *  <code>dataField</code> property, or gets the string value of the data object.
	     *  4) If the method cannot convert the parameter to a String, it returns a
	     *  single space.
	     *  @return Displayable String based on the data.
	     *  @param {object} data
	     *  @param {flexiciousNmsp.FlexDataGridCell} cell
	     *  @method itemToLabel
	     */
	    itemToLabel(data: any, cell: any): any;
	    /**
	     * @method getAdjacentColumn
	     * @param {number} num
	     * @return {flexiciousNmsp.FlexDataGridColumn}
	     */
	    getAdjacentColumn(num: any): any;
	    /**
	     * Gets the style value for the provided style property at the current
	     * level. If not defined at current level, gets the one defined at
	     * the grid level.
	     * @method getStyleValue
	     * @param {string} styleProp
	     * @return {object}
	     */
	    getStyleValue(styleProp: any): any;
	    /**
	     *
	     * @method getIndex
	     * @return {number}
	     */
	    getIndex(): any;
	    /**
	     * Depending on the specified chrome type, gets the appropriate renderer.
	     * If truncateToFit or selectable is true, returns a label factory
	     * else returns a text field factory.
	     * @method deriveRenderer
	     * @param {*} chromeType
	     * @return {*}
	     */
	    deriveRenderer(chromeType: any): any;
	    /**
	     * @method hasCustomItemRenderer
	     * @return {boolean}
	     */
	    hasCustomItemRenderer(): boolean;
	    /**
	     * Whenever a tree datagrid event is dispatched at any column,
	     * we also dispatch it from the level so if someone wants
	     * to listen for an event at all columns...
	     * @method dispatchEvent
	     * @param event
	     */
	    dispatchEvent(event: any): any;
	    /**
	     * Returns this list of distinct values for this column,
	     * in a list of arraycollection which will have properties
	     * data and label.
	     * @method getDistinctValues
	     * @param {object} dp
	     * @param {Array} collection
	     * @param {Array} addedCodes
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} lvl
	     * @return {Array}
	     */
	    getDistinctValues(dp: any, collection: any, addedCodes: any, lvl: any): any;
	    /**
	     * @method itemToLabelCommon
	     * @param {object} item
	     * @return {String}
	     */
	    itemToLabelCommon(item: any): any;
	    /**
	     * A function that is used when we have complex properties in the datafield.
	     * @method isValidStyleValue
	     * @param {*} val
	     * @return {boolean}
	     */
	    isValidStyleValue(val: any): boolean;
	    /**
	     * Default Icon tooltip function. Returns value of the iconToolTip string.
	     * @method defaultIconFunction
	     * @param {flexiciousNmsp.FlexDataGridDataCell} cell
	     * @param {string} state
	     */
	    defaultIconFunction(cell: any, state: any): any;
	    /**
	     * Default Icon tooltip function. Returns value of the iconToolTip string.
	     * @method defaultIconTooltipFunction
	     * @param {flexiciousNmsp.FlexDataGridDataCell} cell
	     * @return {string}
	     */
	    defaultIconTooltipFunction(cell: any): any;
	    /**
	     *
	     * @method setStyle
	     * @param {string} styleProp
	     * @param {*} value
	     */
	    setStyle(styleProp: any, value: any): void;
	    /**
	     * Returns true if the column is left or right locked.
	     * @method getIsLocked
	     * @return {boolean}
	     */
	    getIsLocked(): boolean;
	    /**
	     * MX and Spark Grids implement the sortable differently, so to match the interface.
	     * @method getIsSortable
	     * @return {boolean}
	     */
	    getIsSortable(): any;
	    /**
	     * @method getIsFirstRightLocked
	     * @return {boolean}
	     */
	    getIsFirstRightLocked(): any;
	    /**
	     * @method getIsLastUnLocked
	     * @return {boolean}
	     */
	    getIsLastUnLocked(): any;
	    /**
	     * A control that implements IFilterControl
	     * @return
	     * @method getFilterControl
	     */
	    getFilterControl(): any;
	    /**
	     * The filter control to associate with this column. There are a number of built in filter controls, and you can even write your own by implementing
	     * the IFilterControl interface. To be implemented by any control that can participate in the filtering mechanism.
	     *
	     * There are the following controls available out of the box:
	     * <ul>
	     * <li>TextInput</li>
	     * <li>TriStateCheckBox</li>
	     * <li>ComboBox</li>
	     * <li>MultiSelectComboBox</li>
	     * <li>DateComboBox</li>
	     * <li>DateRangeBox</li>
	     * <li>NumericRangeBox</li>
	     * <li>NumericTextInput</li>
	     * </ul>
	     * You can write your own custom text input controls by extending any of these, or by implementing the IFilterControl, ICustomMatchFilterControl, or IDynamicFilterControl.
	     * For an example of this, please look at http://blog.flexicious.com/post/ICustomMatchFilterControl-example.aspx
	     * @method setFilterControl
	     * @param {*} val
	     */
	    setFilterControl(val: any): void;
	    /**
	     * @method getIsLastLeftLocked
	     * @return {boolean}
	     */
	    getIsLastLeftLocked(): any;
	    /**
	     * @method getIsLastleftLocked
	     * @return {boolean}
	     */
	    getIsLastleftLocked(): any;
	    /**
	     * Returns true if the column is right locked.
	     * @method getIsRightLocked
	     * @return {boolean}
	     */
	    getIsRightLocked(): boolean;
	    /**
	     * Current X position of this column relative to the container for its cells.
	     * @method getX
	     * @return {number}
	     */
	    getX(): any;
	    /**
	     *
	     * @method setX
	     * @param {number} value
	     */
	    setX(value: any): void;
	    /**
	     * A key used to uniquely identify a column. Defaults to the header text
	     * Used in print and preference persistence to identify columns.
	     * @return
	     * @method  getUniqueIdentifier
	     */
	    getUniqueIdentifier(): any;
	    /**
	     *
	     * @method setUniqueIdentifier
	     * @param {string} value
	     */
	    setUniqueIdentifier(value: any): void;
	    /**
	     * Similar to searchField, if you want to override what the database
	     * actually sorts when you sort this column
	     * @method getSortField
	     * @return {string}
	     */
	    getSortField(): any;
	    /**
	     *
	     * @param val
	     * @method setSortField
	     *
	     */
	    setSortField(val: any): void;
	    /**
	     * The property on the model object that returns the url to the icon,
	     * if you wish to show different icons for each cell.
	     *
	     * Defaults to data field. If there are scenarios where you wish to
	     * show both the icon as well as the text, you can specify the iconField
	     * and the dataField. Otherwise, where you show just the icon, you can leave the
	     * iconField blank and have the data field specify the value of the icon
	     * url.
	     * @method getIconField
	     * @return {string}
	     */
	    getIconField(): any;
	    /**
	     *
	     * @method setIconField
	     * @param  {string} value
	     */
	    setIconField(value: any): void;
	    /**
	     *
	     * @method getColIndex
	     * @return {number}
	     */
	    getColIndex(): any;
	    /**
	     * @method getOwner
	     * @return {flexiciousNmsp.FlexDataGrid}
	     */
	    getOwner(): any;
	    /**
	     *  The width of the column, in pixels.
	     *  @default 100
	     *  @method getWidth
	     * @return {number}
	     *
	     */
	    getWidth(): any;
	    /**
	     *
	     * @method setWidth
	     * @param {number} value
	     */
	    setWidth(value: any): void;
	    /**
	     * Gets the nest depth of the associated level.
	     * @return
	     * @method getNestDepth
	     */
	    getNestDepth(): any;
	    /**
	    * @method getIsFirstUnLocked
	    * @return {boolean}
	    */
	    getIsFirstUnLocked(): any;
	    /**
	     * The field that the filter should search on. Defaults to the
	     * dataField property from mx.controls.dataGridClasses.DataGridColumn.
	     * But can be overridden if needed.
	     *
	     * For example, consider a grid bound to a list of Employee objects, with a departmentName
	     * and departmentId property. This column shows the departmentName, with a combobox filter
	     * or a multi-select filter using a list of departments as filterComboBoxDataProvider
	     *
	     * By default, the comparison will occur using the selected label of the filter control
	     * being compared to the
	     * departmentName property of each employee. This is allright if the
	     * filterPageSortMode property of the com.flexicious.grids.ExtendedDataGrid is
	     * set to "client", but if it is "server" ,
	     * you would ideally want to have the ID of the selected department(s). In that case, you would
	     * set the searchField property to "departmentId", filterComboBoxDataField to "departmentId",
	     * filterComboBoxLabelField to "departmentName".
	     * @method getSearchField
	     * @return {string}
	     *
	     *
	     */
	    getSearchField(): any;
	    /**
	     *
	     * @param val
	     *
	     * @method setSearchField
	     */
	    setSearchField(val: any): void;
	    /**
	     *  Flag that indicates whether the column is visible.
	     *  If <code>true</code>, the column is visible.
	     *  @default true
	     * @method getVisible
	     * @return {boolean}
	     */
	    getVisible(): any;
	    /**
	     *
	     * @method setVisible
	     * @param {boolean} value
	     */
	    setVisible(value: any): void;
	    /**
	     * For datagrids where there are multiple columns with the same header text,
	     * this field may be specified so that the persistence mechanism does not
	     * overwrite it.
	     * @method getPersistenceKey
	     * @return {string}
	     * @deprecated - now defaults to the uniqueIdentifier.
	     */
	    getPersistenceKey(): any;
	    /**
	     *
	     * @param val
	     * @method setPersistenceKey
	     */
	    setPersistenceKey(val: any): void;
	    /**
	     * The actual control
	     * to render inside the header column. This control must implement
	     * the com.flexicious.controls.interfaces.filters.IFilterControl interface.
	     * @return
	     * @method getFilterRenderer
	     */
	    getFilterRenderer(): any;
	    /**
	     *
	     * @param value
	     * @method setFilterRenderer
	     *
	     */
	    setFilterRenderer(value: any): void;
	    /**
	     * Container for the item renderer. Needs to implement IFlexDataGridDataCell.
	     * Defaults to FlexDataGridDataCell
	     * @return
	     * @method getDataCellRenderer
	     */
	    getDataCellRenderer(): any;
	    /**
	     * @param value
	     * @method  setDataCellRenderer
	     */
	    setDataCellRenderer(value: any): void;
	    /**
	     * Returns true if the column is left locked.
	     * @method  getIsLeftLocked
	     * @return {boolean}
	     */
	    getIsLeftLocked(): boolean;
	    /**
	     *  Flag that indicates whether the items in the column are editable.
	     * @method  getEditable
	     * @return {boolean}
	     */
	    getEditable(): any;
	    /**
	     * @method  setEditable
	     * @param {boolean} value
	     */
	    setEditable(value: any): void;
	    /**
	     * Unused, for legacy purposes only
	     * @method  getClickBehavior
	     */
	    getClickBehavior(): null;
	    /**
	     * Similar to searchField, if you want to override what the database
	     * actually sorts when you sort this column
	     * @method  getSortFieldName
	     * @return {string}
	     */
	    getSortFieldName(): any;
	    /**
	     * @method  getIsLastrightLocked
	     * @return {boolean}
	     */
	    getIsLastrightLocked(): any;
	    /**
	     *  Text for the header of this column. By default, the DataGrid
	     *  control uses the value of the <code>dataField</code> property
	     *  as the header text. IF a headerTextFunction is specified, that
	     * is used first.
	     * @param {flexiciousNmsp.FlexDataGridDataCell} cell
	     * @return {string}
	     *
	     */
	    getHeaderText(cell: any): any;
	    /**
	     *
	     * @param {string} value
	     * @method  setHeaderText
	     */
	    setHeaderText(value: any): void;
	    /**
	     * Returns true if the column is not right locked or IFixedWidth.
	     * @method  getIsElastic
	     * @return {boolean}
	     */
	    getIsElastic(): boolean;
	    /**
	     * For support in pickers
	     * @return {string}
	     * @method  getLabel
	     *
	     */
	    getLabel(): any;
	    /**
	     * The columnWidthMode property on the column specifies how the column widths are applied. This property defaults to "none".
	     *
	     * Flexicious Ultimate provides a rich mechanism to control column widths. Column widths are a complicated
	     * topic because there are a number of scenarios and rules that we need to account for
	     *
	     * <ul>
	     * <li>When there is a horizontal scroll (horizontalScrollPolicy=on or auto):
	     * In this case, the columns are free to (much) take width as they need. Below is how the column widths should
	     * handle in this case:
	     * <ul>
	     * <li>When columnWidthMode=none or fixed: The column will basically take the width specified by the width property</li>
	     * <li>When columnWidthMode=fitToContent The column will take the width calculated by its contents. The grid identifies the longest
	     * string to be displayed in this column, and sets the width of the column to this value.</li>
	     * <li>When columnWidthMode=percent. This is not a valid setting when horizontalScrollPolicy is on or auto.
	     * The setting will be ignored and the column will take the width specified by the width property.
	     * When horizontalScrollPolicy is set to auto or on,
	     * columnWidthMode=percent holds no meaning, since there are no fixed bounds to squish the columns within.</li>
	     * </ul>
	     * </li>
	     * <li>When there is no horizontal scroll (horizontalScrollPolicy=off - this is the default):
	     * <ul>
	     * <li>When columnWidthMode=none: The column will take the width specified by the width property, and adjust for width (see sum of Column Widths exceeds Grid Width below).</li>
	     * <li>When columnWidthMode=fixed: The column will  take the width specified by the width property, and not adjust for width.</li>
	     * <li>When columnWidthMode=fitToContent: The column will take the width calculated by its contents, and adjust for width (see sum of Column Widths exceeds Grid Width below).</li>
	     * <li>When columnWidthMode=percent: For these columns, the grid divides the remaining width after allocating
	     * all fixed and fitToContent columns, on a percentage basis among all columns that have
	     * columnWidthMode set to percent. PLEASE NOTE : If you set columnWidthMode='percent', also
	     * set percentWidth. Also, ensure that the percentWidth of the columns adds up to a 100.</li>
	     * </ul>
	     * </li>
	     * </ul>
	     *
	     * Finally, there are the below calculations once the column widths are allocated:
	     *
	     * <ul>
	     * <li>Grid Width exceeds Sum of Column Widths:
	     * The situation where the calcualted column widths do not add upto the grid with is also handled on basis of
	     * the horizontalScrollPolicy.
	     * <ul>
	     * <li>When there is a horizontal scroll (horizontalScrollPolicy=on or auto): The last column extends to fill up all the remaining space. If you do not want your last column to resize, add a dummy column that has the following property (order is important) minWidth="1" width="1" paddingLeft="0" paddingRight="0"</li>
	     * <li>When there is no horizontal scroll (horizontalScrollPolicy=off - this is the default): The extra width is divided proportionally between all the columns where columnWidthMode does not equal fixed.</li>
	     * </ul>
	     * </li>
	     * </ul>
	     *
	     * <ul>
	     * <li>Sum of Column Widths exceeds Grid Width:
	     * Similarly, The situation where the allocated column widths exceed the width of the grid with is also handled on basis of
	     * the horizontalScrollPolicy.
	     * <ul>
	     * <li>When there is a horizontal scroll (horizontalScrollPolicy=on or auto): We simply show a scroll bar, and no column widths are changed.</li>
	     * <li>When there is no horizontal scroll (horizontalScrollPolicy=off - this is the default): This excess width
	     * is reduced proportionally between columns where columnWidthMode does not equal fixed.</li>
	     * </ul>
	     * </li>
	     * </ul>
	     * Left and right locked columns do not support column width mode, it is ignored for these.
	     * <br/>
	     * Finally, with multi level grids, if the hierarchy's columns width in the top level is smaller than the next level's width
	     * (and the horizontal scroll policy of the grid is "on"/"auto"), the horizontal scroller will be calculated only by the top
	     * level's width, making some columns in the next level unreachable. The recommendation is to give a large column width to the last top level column,
	     * which is large enough so that sum of column widths at top level is larger than the sum of column widths at the bottom level.
	     * <br/>
	     * Values : none,fixed,percent,fitToContent
	     * @default auto
	     * @method  getColumnWidthMode
	     */
	    getColumnWidthMode(): any;
	    /**
	     *
	     * @param val
	     * @method  setColumnWidthMode
	     */
	    setColumnWidthMode(val: any): any;
	    /**
	     * Formatter for the footer label
	     * @method  setFooterFormatter
	     */
	    setFooterFormatter(val: any): any;
	    /**
	     *  The name of the field or property in the data provider item associated
	     *  with the column.
	     *  Each DataGridColumn control
	     *  requires this property and/or the <code>labelFunction</code> property
	     *  to be set in order to calculate the displayable text for the item
	     *  renderer.
	     *  If the <code>dataField</code>
	     *  and <code>labelFunction</code> properties are set,
	     *  the data is displayed using the <code>labelFunction</code> and sorted
	     *  using the <code>dataField</code>.  If the property named in the
	     *  <code>dataField</code> does not exist, the
	     *  <code>sortCompareFunction</code> must be set for the sort to work
	     *  correctly.
	     *
	     *  <p>This value of this property is not necessarily the String that
	     *  is displayed in the column header.  This property is
	     *  used only to access the data in the data provider.
	     *  For more information, see the <code>headerText</code> property.</p>
	     *
	     *
	     * If you specify a complex property ,the grid takes over the sortCompareFunction, and the sortField
	     * property is ignored.
	     * @method  getDataField
	     * @return {string}
	     */
	    getDataField(): any;
	    /**
	     * @method  setDataField
	     * @param value
	     */
	    setDataField(value: any): void;
	    /**
	     *  A function that determines the text to display in this column.  By default
	     *  the column displays the text for the field in the data that matches the
	     *  column name.  However, sometimes you want to display text based on
	     *  more than one field in the data, or display something that does not
	     *  have the format that you want.
	     *  In such a case you specify a callback function using <code>labelFunction</code>.
	     *
	     *  <p>For the DataGrid control, the method signature has the following form:</p>
	     *
	     *  <pre>labelFunction(item:Object, column:DataGridColumn):String</pre>
	     *
	     *  <p>Where <code>item</code> contains the DataGrid item object, and
	     *  <code>column</code> specifies the DataGrid column.</p>
	     *
	     *  <p>A callback function might concatenate the firstName and
	     *  lastName fields in the data, or do some custom formatting on a Date,
	     *  or convert a number for the month into the string for the month.</p>
	     *
	     * @method  getLabelFunction
	     * @return {Function}
	     */
	    getLabelFunction(value: any): any;
	    /**
	     * @method setLabelFunction
	     * @param {Function} value
	     */
	    setLabelFunction(value: any): void;
	    /**
	     * A specialized function that determines the text to display in this column, and takes the actual cell being (a) evaluated parameter.
	     *
	     * As opposed to the regular label function, this actually takes a FlexDataGridCell (a) object parameter,
	     * which contains the level information if you need to perform additonal logic. Please note, the cell parameter will be null in certain cases,
	     * like from the quickFind() method, where the cell is not currently drawn.
	     *
	     * Example:
	     * labelFunction="myLabelFunc"
	     *
	     * private String myLabelFunc(Object item, FlexDataGridColumn col, FlexDataGridCell cell ){
	     * }
	     * @method  getLabelFunction2
	     * @return {Function}
	     */
	    getLabelFunction2(value: any): any;
	    /**
	     * @method  setLabelFunction2
	     * @param {Function} value
	     */
	    setLabelFunction2(value: any): void;
	    /**
	     * @method  getLevel
	     * @return {flexiciousNmsp.FlexDataGridColumnLevel} level
	     */
	    getLevel(value: any): any;
	    /**
	     * @method  kill
	     */
	    kill(): void;
	    /**
	     * @private
	     */
	    getConcatenatedHeaderText(): any;
	    /**
	     * @private
	     */
	    setUseLabelFunctionForSortCompare(value: any): void;
	    /**
	     * a.	The default text of the footer is calculated on basis of the following logic: <br/>
	     * i.	First we check to see if a footerLabelFunction2 is specified on the column. If so, we use it.<br/>
	     * ii.	Second, we check to see if there is a footerLabelFunction specified on the column. If so, we use it.<br/>
	     * iii.	Finally, if neither of these is specified, we use a default footer label function, which performs the following logic:<br/>
	     * 1.	Checks to see the value of the columns footerOperation. The valid values for this property are sum, min, max, count and average. On basis of this , it computes the value.<br/>
	     * 2.	It calls toFixed method passing in the footerOperationPrecision value to give it the appropriate number of decimal places<br/>
	     * 3.	If there is a footerFormater specified, it calls the format method of the footerFormatter passing in the value and displays the result.<br/>
	     * 4.	If there is a footerLabel specified, it will concatenate the value of the footer label to the result of the calculated value in step 3.<br/>
	     * @method calculateValue
	     * @param dataProvider
	     * @param {flexiciousNmsp.FlexDataGridDataCell} cell
	     * @return {String}
	     */
	    calculateFooterValue(dataProvider: any, cell: any): any;
	    /**
	     * 1.	Checks to see the value of the columns footerOperation. The valid values for this property are sum, min, max, count and average. On basis of this , it computes the value.<br/>
	     * 2.	It calls toFixed method passing in the footerOperationPrecision value to give it the appropriate number of decimal places<br/>
	     * 3.	If there is a footerFormater specified, it calls the format method of the footerFormatter passing in the value and displays the result.<br/>
	     * 4.	If there is a footerLabel specified, it will concatenate the value of the footer label to the result of the calculated value in step 3.<br/>
	     * @param {flexiciousNmsp.FlexDataGridDataCell} col
	     * @param dataProvider
	     * @method defaultLabelFunction
	     * @return {String}
	     */
	    defaultLabelFunction(col: any, dataProvider: any): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumnGroup' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * Class responsible for storing information about grouped columns
	 * @constructor
	 * @class FlexDataGridColumnGroup
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FlexDataGridColumnGroup extends EventDispatcher {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Will recalculate the columns at extremities in the next round. Will recursively go up the column group hierarchy
	     * invalidating its extremities
	     * @method invalidateCalculations
	     */
	    invalidateCalculations(): void;
	    /**
	     * Will recalculate the columns at extremities in the next round. Will recursively go down the column group hierarchy
	     * invalidating child extremities
	     * @method invalidateCalculationsDown
	     */
	    invalidateCalculationsDown(): void;
	    /**
	     *  If isClosed(),
	     *  return the value of collapseTooltip+ headerText else expandTooltip + headerText
	     *
	     * @method defaultExpandCollapseTooltipFunction
	     *
	     * @param {flexiciousNmsp.FlexDataGridCell} cell
	     * @return {String}
	     */
	    defaultExpandCollapseTooltipFunction(cell: any): string;
	    /**
	     *
	     * @method defaultPositionFunction
	     *
	     * @param {flexiciousNmsp.FlexDataGridCell} cell
	     * @return {flexiciousNmsp.Point}
	     */
	    defaultPositionFunction(cell: any): any;
	    /**
	     * Returns true if all but the collapseStateColumn column in this column group is visible.
	     * @method isClosed
	     * @return {Boolean}
	     */
	    isClosed(): boolean;
	    /**
	     * Sets the visibility of all columns to true
	     * @method openColumns
	     */
	    openColumns(): void;
	    /**
	     * Sets the visibility of all but the first column to false
	     * @method closeColumns
	     */
	    closeColumns(): void;
	    /**
	     *
	     * @method initializeGroup
	     */
	    initializeGroup(): void;
	    /**
	     * @method initializeDepthY
	     *
	     * @param {Number} dpIn
	     * @param {Number} yIn
	     */
	    initializeDepthY(dpIn: any, yIn: any): void;
	    /**
	     * Returns an array of Width and X for this column group.
	     * @method getWX
	     * @return {Array}
	     */
	    getWX(): any[];
	    /**
	     * Iterates through all child groups and gets columns
	     * @method getAllColumns
	     * @param result
	     * @return {Array}
	     *
	     */
	    getAllColumns(result: any): any;
	    /**
	     * Gets the left most or right most column
	     *
	     * @method getColumnAtExtremity
	     * @param {Boolean} left
	     *
	     * @return {flexiciousNmsp.FlexDataGridColumn}
	     */
	    getColumnAtExtremity(left: any): any;
	    /**
	     * Clone this Group. Copies over the start and end groups.
	     *
	     * @method clone
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} newLevel
	     * @return {flexiciousNmsp.FlexDataGridColumnGroup}
	     */
	    clone(newLevel: any): any;
	    /**
	     * The level of nesting for this column group
	     * @method getDepth
	     * @return {Number}
	     */
	    getDepth(): any;
	    /**
	     * The level of nesting for this column group
	     * @method getY
	     * @return {Number}
	     */
	    getY(): any;
	    /**
	     * @method getChildren
	     * @return {Array}
	     */
	    getChildren(): any;
	    /**
	     * @method setChildren
	     * @param val
	     */
	    setChildren(val: any): void;
	    /**
	     * @method getIsColumnOnly
	     * @return {Boolean}
	     */
	    getIsColumnOnly(): boolean;
	    /**
	     * If i have a parent group return his group, else return me
	     * @method getRootGroup
	     * @return {flexiciousNmsp.FlexDataGridColumnGroup}
	     *
	     */
	    getRootGroup(): any;
	    /**
	     * Height of the column group row. Defaults to 25.
	     * @method getHeight
	     * @return {Number}
	     */
	    getHeight(): any;
	    /**
	     * Support for columns and column groups as siblings. Prior to 2.7, you could not have a columngroup next to a column.
	     * In other words, a column group could either have sub columngroups OR sub columns. If you use the new groupedColumns property
	     * you can have column groups that contain both sub column groups as well as sub columns.
	     * @method getGroupedColumns
	     * @return {Array}
	     */
	    getGroupedColumns(): any;
	    /**
	     * @method setGroupedColumns
	     * @param value
	     *
	     */
	    setGroupedColumns(value: any): void;
	    /**
	     * @method setColumns
	     * @param {Array} value
	     */
	    setColumns(value: any): void;
	    /**
	     * The FlexDataGridColumn object to end the column group at. Needs to be
	     * at an index greater than the column specified in the start column. If child groups exist, goes through children to get the right most column
	     * @method getEndColumn
	     * @return {flexiciousNmsp.FlexDataGridColumn}
	     */
	    getEndColumn(): any;
	    /**
	     * @method setEndColumn
	     * @param {flexiciousNmsp.FlexDataGridColumn} value
	     */
	    setEndColumn(value: any): void;
	    /**
	     * The FlexDataGridColumn object to start the column group at. Needs to be
	     * at an index less than the column specified. If child groups exist, goes through children to get the left most column
	     *
	     * @method getStartColumn
	     * @return {flexiciousNmsp.FlexDataGridColumn} value
	     *
	     */
	    getStartColumn(): any;
	    /**
	     * @method setStartColumn
	     * @param {flexiciousNmsp.FlexDataGridColumn} value
	     */
	    setStartColumn(value: any): void;
	    /**
	     * Text for the header of this columnGroup
	     * @method getHeaderText
	     * @return {String}
	     */
	    getHeaderText(): any;
	    /**
	     * Text for the header of this columnGroup
	     *
	     * @method setHeaderText
	     * @param {String} val
	     */
	    setHeaderText(val: any): void;
	    kill(): void;
	    /**
	     * @private
	     */
	    getConcatenatedHeaderText(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridColumnLevel' {
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * <p>
	 * A class that contains information about a nest level of grid. This includes the columns at this
	 * level, information about whether or not to enable paging, footers, filters, the row sizes of each,
	 * the property of the dataprovider to be used as the key for selection, the property of the data provider
	 * to be used as the children field, the renderers for each of the cells, etc.The Grid always contains
	 * at least one level. This is the top level, and is accessible via the columnLevel property of the grid.
	 * </p>
	 * <p>
	 * One of the most important concepts behind the Architecture of Flexicious Ultimate arose from the
	 * fundamental requirement that the product was created for - that is display of Heterogeneous
	 * Hierarchical Data.
	 * </p>
	 * <p>
	 * The notion of nested levels is baked in to the grid via the "columnLevel" property.
	 * This is a property of type "FlexDataGridColumnLevel". The grid always has at least one column level.
	 * This is also referred to as the top level, or the root level. In flat grids (non hierarchical),
	 * this is the only level. But in nested grids, you could have any number of nested levels.
	 * </p>
	 * <p>
	 * The columns collection actually belongs to the columnLevel, and since there is one root level,
	 * the columns collection of the grid basically points to the columns collection of this root level.
	 * The FlexDataGridColumnLevel class has a "nextLevel" property, which is a pointer to another instance
	 * of the same class, or a "nextLevelRenderer" property, which is a reference to a
	 * ClassFactory the next level. Please note, currently, if you specify nextLevelRenderer, the nextLevel
	 * is ignored. This means, at the same level, you cannot have both a nested sub grid as well as a
	 * level renderer. Bottom line - use nextLevelRenderer only at the innermost level.
	 * Our examples demonstrate this.
	 * </p>
	 * @constructor
	 * @class FlexDataGridColumnLevel
	 * @namespace flexiciousNmsp
	 *
	 * */
	export default class FlexDataGridColumnLevel extends EventDispatcher {
	    constructor(grid: any);
	    getClassNames(): string[];
	    /**
	     * Get the maximum depth or height of column groups.
	     * @method getMaxColumnGroupDepthOrHeight
	     */
	    getMaxColumnGroupDepthOrHeight(soFar: any, children: any, what: any): any;
	    /**
	     * Get the maximum  depth of column groups.
	     * @method getMaxColumnGroupDepth
	     */
	    getMaxColumnGroupDepth(): any;
	    /**
	     * Checks disabled flag.
	     * @method checkRowDisabled
	     */
	    checkRowDisabled(cell: any, item: any): any;
	    /**
	     * Gets the index at which the given column appears in the sort list.
	     * @return
	     * @method getSortIndex
	     */
	    getSortIndex(fld: any, return1: any, returnSortObject: any): any;
	    /**
	     * Returns true if the given column is already in the sort
	     * @param fld
	     * @method hasSort
	     *
	     */
	    hasSort(fld: any): any;
	    /**
	     * For multi column sort support.
	     * @method addSort
	     */
	    addSort(sort: any): void;
	    /**
	     * Removes all the sorts and calls doInvalidate.
	     * @method removeAllSorts
	     */
	    removeAllSorts(): void;
	    /**
	     * Clears out the current sort collection and sets it to the passed in values
	     * @param fld
	     * @param asc
	     * @method setCurrentSort
	     *
	     */
	    setCurrentSort(fld: any, asc: any): void;
	    /**
	     *
	     * @method createAscendingSortIcon
	     */
	    createAscendingSortIcon(): any;
	    /**
	     * @method createDescendingSortIcon
	     */
	    createDescendingSortIcon(): any;
	    /**
	     * @method createSortArrow
	     */
	    createSortArrow(d: any): any;
	    /**
	     * @method onSelectedKeysChange
	     */
	    onSelectedKeysChange(): void;
	    /**
	     * IF rowSelectableFunction is specified, returns result of that.
	     * If selectableField is specified, returns value of that on the obj object
	     * Else returns true
	     * @method checkRowSelectable
	     */
	    checkRowSelectable(cell: any, obj: any): any;
	    /**
	     *
	     * @method calculateChromeTopHeight
	     */
	    calculateChromeTopHeight(): number;
	    /**
	     *
	     * @method calculateChromeBottomHeight
	     */
	    calculateChromeBottomHeight(): number;
	    /**
	     *
	     * @method setDepth
	     */
	    setDepth(nestLevel: any): void;
	    /**
	     * @method setParentLevel
	     *
	     */
	    setParentLevel(): void;
	    /**
	     * @method setGrid
	     *
	     */
	    setGrid(grid: any): void;
	    /**
	     * @method invalidateCache
	     *
	     */
	    invalidateCache(): void;
	    /**
	     * @method setColumnLevel
	     *
	     */
	    setColumnLevel(): void;
	    /**
	     *
	     * @method invalidateCalculationsDown
	     */
	    invalidateCalculationsDown(): void;
	    /**
	     * Clears the selected rows and cells.
	     * @method clearSelection
	     */
	    clearSelection(dispatch: any): void;
	    /**
	     * @method initializeLevel
	     *
	     * @param grid
	     *
	     */
	    initializeLevel(grid: any): void;
	    /**
	     * Applies the passed in value to the provided property and cascades that value down to the next level, if one exists.
	     * @param prp	The property to apply
	     * @param value	The value to apply
	     * @method cascadeProperty
	     */
	    cascadeProperty(prp: any, value: any): void;
	    /**
	     *
	     * @method transferProps
	     */
	    transferProps(from: any, to: any, checkForChanges: any): void;
	    /**
	     * Creates a new instance of this level, transfers all its primitive and factory
	     * properties to the new instance, creates a clone collection of all its columns,
	     * transfers the non primitive and factory properties of the columns to the cloned
	     * columns and returns the new instance.
	     * @return
	     * @method clone
	     *
	     */
	    clone(transferCols: any): any;
	    /**
	     * @method cloneColumn
	     */
	    cloneColumn(col: any): any;
	    /**
	     * Gets the height of the header, footer, pager if visible.
	     * @method getRowHeightFromType
	     */
	    getRowHeightFromType(chromeLevel: any): any;
	    /**
	     * Gets the sum of all column widths.
	     * @method getSumOfColumnWidths
	     */
	    getSumOfColumnWidths(modes: any): number;
	    /**
	     * All columns where visible=true and lock modes match the specified lock modes.
	     * @method getVisibleColumns
	     */
	    getVisibleColumns(lockModes: any): any;
	    /**
	     * All visible columns where excludeFromExport=false
	     * @method getExportableColumns
	     *
	     * @return {Array}
	     */
	    getExportableColumns(lockModes: any, deep: any, options: any): any[];
	    /**
	     * All visible columns where sortable=true
	     * @method getSortableColumns
	     * @return {Array} columns
	     */
	    getSortableColumns(): any[];
	    /**
	     * Gets the list of filter arguments at this level.
	     * @method getFilterArguments
	     * @return {ArrayCollection}
	     */
	    getFilterArguments(): any;
	    /**
	     * Removes the filter at this level, and all of this child levels, if specified.
	     * @method clearFilter
	     *
	     * @param {boolean} recursive
	     */
	    clearFilter(recursive: any): void;
	    /**
	     * All columns that can be "hidden"
	     * @method getShowableColumns
	     *
	     * @param {Array} lockModes
	     * @param {Boolean} deep
	     *
	     * @return {Array}
	     */
	    getShowableColumns(lockModes: any, deep: any): any[];
	    /**
	     * All visible columns where excludeFromPrint=false
	     * @method getPrintableColumns
	     *
	     * @param {Array} lockModes
	     * @param {boolean} deep
	     *
	     * @return {Array}
	     */
	    getPrintableColumns(lockModes: any, deep: any): any[];
	    /**
	     * Returns the filter for this level
	     * @method createFilter
	     *
	     * @param {object} parentObject
	     * @param {flexiciousNmsp.Filter} inFilter
	     *
	     * @return {flexiciousNmsp.Filter}
	     */
	    createFilter(parentObject: any, inFilter: any): any;
	    /**
	     * Returns the widest right locked width.
	     * @method getWidestRightLockedWidth
	     * @param {number} widestRightLockedWidth
	     * @return {number}
	     */
	    getWidestRightLockedWidth(widestRightLockedWidth: any): any;
	    /**
	     * @method getWidestLeftLockedWidth
	     * @param {number} widestLeftLockedWidth
	     * @return {number}
	     */
	    getWidestLeftLockedWidth(widestLeftLockedWidth: any): any;
	    /**
	     * List of visible columns of the specified lock modes.
	     * @method getColumnsByLockMode
	     * @param {Array} types
	     * @return {Array}
	     */
	    getColumnsByLockMode(types: any): any;
	    /**
	     * At each level, get the sum of column widths, and return the width at the
	     * level with the widest width. Only includes locked columns by default.
	     * @method getWidestWidth
	     *
	     * @param {number} widestWidth
	     * @param {boolean} deep
	     *
	     * @return {number}
	     */
	    getWidestWidth(widestWidth: any, deep: any): any;
	    /**
	     * @method getColumnsByWidthMode
	     * @param {Array} modes
	     * @return {Array}
	     */
	    getColumnsByWidthMode(modes: any): any[];
	    /**
	     * Goes through the unlocked columns, figures out the widest width needed by each of the columns
	     * by going through the data provider, and sets the width accordingly.
	     *
	     * If the equally parameter is set to true, all column settings are ignored, and the grid's width
	     * is distributed equally across all columns
	     *
	     * Below is a description of the logic used:
	     *
	     * @copy FlexDataGridColumn._columnWidthMode
	     * @method setColumnWidthsUsingWidthMode
	     * @param {boolean} equally
	     */
	    setColumnWidthsUsingWidthMode(equally: any): void;
	    /**
	     * Given a column and a dataprovider, measures the width required to render the text in the column, and if such width
	     * is greater than the minwidth of the column, applies that width to the column
	     *
	     * @param col		The FlexDataGridColumn object
	     * @param provider	The provider used to figure out the text width. You may use the grid.flatten(this.getNestDepth(),false,true,true,true,columnWidthModeFitToContentSampleSize);
	     * @method applyColumnWidthFromContent
	     */
	    applyColumnWidthFromContent(col: any, provider: any): void;
	    /**
	     * If the grid's horizontal scroll policy is off, then returns the width of the
	     * unlocked section minus the width of the scroll bar else returns the sum of all
	     * column widths.
	     * @method getAvailableWidth
	     * @return {number} availableWidth
	     */
	    getAvailableWidth(): number;
	    /**
	     * Once we have the widest width, since we don't want the grid to appear jagged in multi levels
	     * Adjust all columns where the widths are same so it looks like a contiguous rectangle.
	     *
	     * If the equally parameter is set to true, it will sum up the total column widths, and resize them
	     * all equally.
	     * @method adjustColumnWidths
	     *
	     * @param {number} widestWidth
	     * @param {boolean} equally
	     */
	    adjustColumnWidths(widestWidth: any, equally: any): void;
	    /**
	     * If a value exists for a style property at the  level return it, else return the value of the property at the grid level.
	     * @method getStyleValue
	     *
	     * @param {String} styleProp
	     * @return {*}
	     */
	    getStyleValue(styleProp: any): any;
	    /**
	     *
	     * @method invalidateList
	     */
	    invalidateList(): void;
	    /**
	     * For header checkbox state, returns if all items in the grid are selected.
	     * @method areAllSelected
	     *
	     * @param {Object} items
	     * @param {Boolean} checkLength
	     *
	     * @return {Boolean}
	     */
	    areAllSelected(items: any, checkLength: any): boolean;
	    /**
	     * If there is a selected key field (usually a field that uniquely identifies an object)
	     * returns the value of the selectedKeyField property of the item else returns the item itself.
	     * If saveLevel is set to true, returns a string in the format key|levelNestDepth. Use this
	     * in cases where you wish to refresh the grid with new data from the server and open items
	     * should only refer to the keys so the open state can be persisted across server roundtrips.
	     * @method getItemKey
	     *
	     * @param {object} item
	     * @param {boolean} saveLevel
	     *
	     * @return {object}
	     */
	    getItemKey(item: any, saveLevel: any): any;
	    /**
	     * If value is primitive, does a to string, if XMLList, returns the text.
	     * @param val
	     * @return
	     * @method getValue
	     *
	     */
	    getValue(val: any): any;
	    /**
	     * Provided an item or a key, and a flag that indicates what it is,
	     * returns true if the item matches the respective comparison.
	     * @method isItemEqual
	     *
	     * @param {object} itemOrKeyToCompare
	     * @param {object} rowData
	     * @param {boolean} useItemKeyForCompare
	     *
	     * @return {boolean}
	     */
	    isItemEqual(itemOrKeyToCompare: any, rowData: any, useItemKeyForCompare: any): boolean;
	    /**
	     * @method areItemsEqual
	     *
	     * @param {object} itemA
	     * @param {object} itemB
	     *
	     * @return {boolean}
	     */
	    areItemsEqual(itemA: any, itemB: any): boolean;
	    /**
	     * Provided an item key, loops through the data provider, and finds
	     * the item with the provided key.
	     * @method getItemFromKey
	     *
	     * @param {*} itemKey
	     * @param {object} flat
	     *
	     * @return {object}
	     */
	    getItemFromKey(itemKey: any, flat: any): any;
	    /**
	     * Returns true if the getItemKey for the specified item exists in the selectedKeys collection.
	     * @method isItemSelected
	     *
	     * @param {object} item
	     * @param {boolean} useExclusion
	     *
	     * @return {boolean}
	     */
	    isItemSelected(item: any, useExclusion: any): boolean;
	    /**
	     * Returns true if the CellInfo for the specified item and column exists in the selectedCells collection.
	     * @method isCellSelected
	     *
	     * @param {object} item
	     * @param {flexiciousNmsp.FlexDataGridColumn} col
	     *
	     * @return {flexiciousNmsp.FlexDataGridCell}
	     */
	    isCellSelected(item: any, col: any): any;
	    /**
	     *Selects or un selects a cell
	     * @method selectCell
	     *
	     * @param {flexiciousNmsp.FlexDataGridColumn} cell
	     * @param {boolean} selected
	     */
	    selectCell(cell: any, selected: any): void;
	    /**
	     * Inserts the column specified column before the specified column
	     * @method shiftColumns
	     *
	     * @param {flexiciousNmsp.FlexDataGridColumn} columnToInsert
	     * @param {flexiciousNmsp.FlexDataGridColumn} insertBefore
	     * @param {boolean} movingCg
	     */
	    shiftColumns(columnToInsert: any, insertBefore: any, movingCg: any): void;
	    /**
	     * @method swapColumns
	     *
	     * @param {flexiciousNmsp.FlexDataGridColumnGroup} cg
	     * @param {flexiciousNmsp.FlexDataGridColumn} columnToInsert
	     * @param {flexiciousNmsp.FlexDataGridColumn} insertBefore
	     */
	    swapColumns(cg: any, columnToInsert: any, insertBefore: any): void;
	    /**
	     * Selects or un selects a row
	     * @method selectRow
	     *
	     * @param {object} item
	     * @param {boolean} selected
	     * @param {boolean} dispatch
	     * @param {boolean} recurse
	     * @param {boolean} bubble
	     * @param {object} parent
	     *
	     */
	    selectRow(item: any, selected: any, dispatch: any, recurse: any, bubble: any, parent: any): void;
	    /**
	     *
	     * @method bubbleSelection
	     * @param {Object} item
	     */
	    bubbleSelection(item: any): void;
	    /**
	     * @method existsInCursor
	     * @param {Object} item
	     *
	     */
	    existsInCursor(item: any): any;
	    /**
	     * @method addSelectedItem
	     * @param {Object} item
	     *
	     */
	    addSelectedItem(item: any): void;
	    /**
	     * @method setEnablePaging
	     * @param val
	     *
	     */
	    setEnablePaging(val: any): void;
	    /**
	     * @method storeChain
	     * @param {Object} item
	     *
	     */
	    storeChain(item: any): void;
	    /**
	     * @method pushIntoChain
	     * @param {Array} chain
	     * @param {Object} item
	     */
	    pushIntoChain(chain: any, item: any): void;
	    /**
	     *
	     * @method removeSelectedItem
	     * @param {object} item
	     */
	    removeSelectedItem(item: any): void;
	    /**
	     * Sets the selected state at this level. If you specify checked, adds all rows
	     * to the selected keys collection.
	     * @param val
	     * @method setSelectedKeysState
	     */
	    setSelectedKeysState(val: any): void;
	    /**
	     * For nested/grouped hierarchical datagrids, used to select records.
	     * Iterates through the data provider, matching each object, and if matches, adds the object
	     * to the selectedObjects for the level
	     * @method setSelectedObjects
	     *
	     * @param {Array} objects
	     * @param {boolean} openItems
	     */
	    setSelectedObjects(objects: any, openItems: any): void;
	    /**
	     * For nested/grouped hierarchical datagrids, used to select records.
	     * Iterates through the data provider, matching each object, and if matches, adds the object
	     * to the selectedObjects for the level
	     * @method setSelectedKeys
	     *
	     * @param {Array} objects
	     * @param {boolean} openItems
	     */
	    setSelectedKeys(objects: any, openItems: any): void;
	    /**
	     * @method selectAll
	     *
	     * @param {boolean} select
	     * @param {boolean} dispatch
	     * @param {*} provider
	     * @param {Array} subset
	     * @param {boolean} useKeys
	     * @param {boolean} openItems
	     *
	     * @return
	     */
	    selectAll(select: any, dispatch: any, provider: any, subset: any, useKeys: any, openItems: any): boolean;
	    /**
	     * For nested datagrids, used to get all records at all levels
	     * @method getSelectedObjectsDeep
	     *
	     * @param {Array} soFar
	     * @param {boolean} getKey
	     * @param {boolean} unSelected
	     */
	    getSelectedObjectsDeep(soFar: any, getKey: any, unSelected: any): void;
	    /**
	     * If all items are selected, returns TriStateCheckBox.STATE_CHECKED.
	     * If none are selected, returns TriStateCheckBox.STATE_UNCHECKED
	     * else returns TriStateCheckBox.STATE_MIDDLE
	     * @method getSelectedKeysState
	     *
	     * @param {object} allItems
	     * @return {String}
	     */
	    getSelectedKeysState(allItems: any): any;
	    /**
	     * Returns true if there is at least one item in the selected keys collection
	     * for this level, or if the next level uses this levels columns, then  the
	     * selected keys collection for the next level.
	     * @method areAnySelected
	     *
	     * @param {object} itemsToCheck
	     * @param {boolean} recursive
	     *
	     * @return {boolean}
	     */
	    areAnySelected(itemsToCheck: any, recursive: any): boolean;
	    /**
	     * If the dataprovider is IHierarchicalCollectionView, calls the getChildren method on the incoming object.
	     * Else returns the value of the level.childrenField property on the object being passed in
	     * @method getChildren
	     *
	     * @param {object} object
	     * @param {boolean} filter
	     * @param {boolean} page
	     * @param {boolean} sort
	     *
	     * @return {object}
	     */
	    getChildren(object: any, filter: any, page: any, sort: any): any;
	    /**
	     * Calls getChildren, and if result is XML or XMLList, returns length() else returns length;
	     * @method getChildrenLength
	     *
	     * @param {object} object
	     * @param {boolean} filter
	     * @param {boolean} page
	     * @param {boolean} sort
	     *
	     * @return {number}
	     */
	    getChildrenLength(object: any, filter: any, page: any, sort: any): any;
	    /**
	     * Whenever a tree datagrid event is dispatched at any level,
	     * we also dispatch it from the top level grid so if someone wants
	     * to listen for an event at all levels...
	     * @method dispatchEvent
	     * @param event
	     */
	    dispatchEvent(event: any): any;
	    /**
	     * Sets the visible flag on all columns except the ones specified in the list to false.
	     * @method showColumns
	     * @param {Array} colsToShow
	     */
	    showColumns(colsToShow: any): void;
	    /**
	     * Sets the visible flag on all columns except the ones where excludeFromPrint=true.
	     * @method showPrintableColumns
	     */
	    showPrintableColumns(): void;
	    /**
	     *Returns the column with the specified datafield
	     * @method getColumnByDataField
	     *
	     * @param {String} fld
	     * @param {String} by
	     *
	     * @return {flexiciousNmsp.FlexDataGridColumn}
	     */
	    getColumnByDataField(fld: any, by: any): any;
	    /**
	     *Returns the column with the specified UniqueIdentifier
	     * @method getColumnByUniqueIdentifier
	     * @param {String} fld
	     * @return {flexiciousNmsp.FlexDataGridColumnLevel}
	     */
	    getColumnByUniqueIdentifier(fld: any): any;
	    /**
	     * Clears out all the columns of the grid
	     * If the parameter to rebuild is true, the grid will be rebuilt.
	     * Otherwise, just the columns will be cleared, and the consumer code
	     * should rebuild the grid.
	     * @method clearColumns
	     * @param {boolean} rebuild
	     */
	    clearColumns(rebuild: any): void;
	    /**
	     * Adds the column to the collection of columns at this level.
	     * Deprecated. Use columns setter instead. <br/>
	     * var cols:Array=level.columns;<br/>
	     * //manipulate cols<br/>
	     * level.columns=cols;<br/>
	     * @method addColumn
	     * @param {flexiciousNmsp.FlexDataGridColumn} col
	     */
	    addColumn(col: any): void;
	    /**
	     * Removes the column from the collection of columns at this level.
	     * @method removeColumn
	     * @param {flexiciousNmsp.FlexDataGridColumn} col
	     */
	    removeColumn(col: any): void;
	    /**
	     * Modifies the columns so the width is distributed equally.
	     * Columns that are fixedWidth are not updated.
	     * @method distributeColumnWidthsEqually
	     */
	    distributeColumnWidthsEqually(): void;
	    /**
	     * Returns the column groups specified at the level cgLevel.
	     * @method getColumnGroupsAtLevel
	     *
	     * @param {number} cgLevel
	     * @param {Array} groups
	     * @param {Array} result
	     * @param {number} start
	     *
	     * @return {Array}
	     */
	    getColumnGroupsAtLevel(cgLevel: any, groups: any, result: any, start: any): any;
	    /**
	     * @method ensureRowNumberColumn
	     */
	    ensureRowNumberColumn(): void;
	    /**
	     * A list of ID values, based on the selectedKeyField property.
	     * For hierarchical datagrids, used to get all open(expanded) records at all levels.
	     * Please NOTE - this is a read only collection. Adding to this does nothing.
	     *
	     * If you want to programatically modify the collapse expand, use the setOpenKeys instead, or add directly to the open items.
	     * @method getOpenKeys
	     *
	     * @param {Array} keys
	     * @param {object} provider
	     *
	     * */
	    getOpenKeys(keys: any, provider: any): void;
	    /**
	     * Sets the open keys at this level.
	     * @method setOpenKeys
	     *
	     * @param {Array} keys
	     * @param {object} provider
	     *
	     * */
	    setOpenKeys(keys: any, provider: any): void;
	    /**
	     * Iterates through items, checks to see if the selected bit is on, and if so, adds it to the open list.
	     * @method setSelectedItemsBasedOnSelectedField
	     *
	     * @param {Array} items
	     * @param {object} parent
	     * @param {Array} openItems
	     *
	     * @return {boolean}
	     */
	    setSelectedItemsBasedOnSelectedField(items: any, parent: any, openItems: any): boolean;
	    /**
	     * @method addUnSelectedItem
	     * @param {object} item
	     */
	    addUnSelectedItem(item: any): void;
	    /**
	     *
	     * @method removeUnSelectedItem
	     * @param {object} item
	     */
	    removeUnSelectedItem(item: any): void;
	    /**
	     *
	     * @method selectRowExclusion
	     *
	     * @param {object} item
	     * @param {boolean} selected
	     */
	    selectRowExclusion(item: any, selected: any): void;
	    /**
	     * @method getCheckBoxStateBasedOnExclusion
	     *
	     * @param {object} item
	     * @param {boolean} useBubble
	     * @param {boolean} checkDisabled
	     *
	     * @return
	     */
	    getCheckBoxStateBasedOnExclusion(item: any, useBubble: any, checkDisabled: any): any;
	    /**
	     * Returns true if the getItemKey for the specified item exists in the selectedKeys collection.
	     * @method isItemUnSelected
	     * @param {number} item
	     * @return {boolean}
	     */
	    isItemUnSelected(item: any): any;
	    /**
	     * @method getNumChildren
	     * @param {object} item
	     * @return {number}
	     */
	    getNumChildren(item: any): any;
	    /**
	     *
	     * @method getItemsInSelectionHierarchy
	     *
	     * @param {object} parent
	     * @param {boolean} recurse
	     * @param {Number} inNestDepth
	     * @param {Array} returnValue
	     * @param {boolean} clear
	     * @param {boolean} getUnSelected
	     *
	     * @return {Array}
	     */
	    getItemsInSelectionHierarchy(parent: any, recurse: any, inNestDepth: any, returnValue: any, clear: any, getUnSelected: any): any;
	    /**
	     * For columns with headerWordWrap, calculates the height required to display text in full.
	     * @method calculateHeaderHeights
	     */
	    calculateHeaderHeights(): void;
	    /**
	     * Columns where wordWrap=true || variableRowHeightUseRendererForCalculation and headerRenderer is not null
	     * @return {Array}
	     * @method getFlowHeaderColumns
	     */
	    getFlowHeaderColumns(): any;
	    /**
	     * @method getRightLockedWidth
	     * @return {number} column Widths
	     */
	    getRightLockedWidth(): number;
	    /**
	     * Same as pagerRowHeight, except no built in logic to handle enableFilters and filterVisible.
	     * @return {number}
	     * @method getPagerHeight
	     */
	    getPagerHeight(): any;
	    /**
	     * @method setPagerHeight
	     * @param {number} value
	     */
	    setPagerHeight(value: any): void;
	    /**
	     * Height of the header for this level. Defaults to 25
	     * @method getHeaderHeight
	     * @return {number}
	     */
	    getHeaderHeight(): any;
	    /**
	     *
	     * @method setHeaderHeight
	     * @param {number} o
	     */
	    setHeaderHeight(o: any): void;
	    /**
	     * A Class that implements com.flexicious.controls.interfaces.IPager.
	     * Defaults to a built in implementation
	     * @see com.flexicious.grids.columns.footers.PagerControl.
	     * @see implements com.flexicious.controls.interfaces.IPager.
	     * @return
	     * @method getPagerRenderer
	     */
	    getPagerRenderer(): any;
	    /**
	     * A Class that implements com.flexicious.controls.interfaces.IPager.
	     * Defaults to a built in implementation
	     * @see com.flexicious.grids.columns.footers.PagerControl.
	     * @see implements com.flexicious.controls.interfaces.IPager.
	     * @param value
	     * @method setPagerRenderer
	     *
	     */
	    setPagerRenderer(value: any): void;
	    /**
	     * Gets all unlocked columns
	     * @method getUnLockedColumns
	     * @return {Array}
	     */
	    getUnLockedColumns(): any;
	    /**
	     * Grouped columns - only supported at the top level.
	     * @method getGroupedColumns
	     * @return {Array}
	     */
	    getGroupedColumns(): any;
	    /**
	     * Grouped columns - only supported at the top level.
	     * @method setGroupedColumns
	     * @param {Array} value
	     */
	    setGroupedColumns(value: any): void;
	    /**
	     * Returns true if filterPageSortMode==client.
	     * @method getIsClientFilterPageSortMode
	     * @return {boolean}
	     */
	    getIsClientFilterPageSortMode(): boolean;
	    /**
	     * @method getTraceCols
	     * @return {str}
	     */
	    getTraceCols(): string;
	    /**
	     * Gets the width of the padding cell.
	     * @method getMaxPaddingCellWidth
	     * @return {number}
	     */
	    getMaxPaddingCellWidth(): number;
	    /**
	     * Height of the filter for this level. Defaults to 25
	     * @method getFilterRowHeight
	     * @return {number}
	     */
	    getFilterRowHeight(): any;
	    /**
	     *
	     * @method setFilterRowHeight
	     * @param {number} val
	     */
	    setFilterRowHeight(val: any): void;
	    /**
	     * Columns where wordWrap=true || variableRowHeightUseRendererForCalculation and itemRenderer not null
	     * @method getFlowColumns
	     * @return {Array}
	     */
	    getFlowColumns(): any;
	    /**
	     * This array is a list of all items that are have been selected by the user or programmatically, at this level.
	     *
	     *
	     * Please note, for hierarchical grids, each level has its own collection of selected keys.
	     * The grid.selectedObjects returns the selectedKeys at the top level. To access the selected keys
	     * at a lower level, you may navigate to that level using grid.getColumnLevel().nextLevel...nextLevel.selectedKeys
	     * You can also call grid.getSelectedObjects to get selected objects at all levels.
	     * @method getSelectedObjects
	     * @return {Array}
	     */
	    getSelectedObjects(): any;
	    /**
	     * Gets the sum of left lock column widths
	     * @method getUnLockedWidth
	     * @return {number}
	     */
	    getUnLockedWidth(): number;
	    /**
	     * Gets all left locked columns
	     * @method getLeftLockedColumns
	     * @return {Array}
	     */
	    getLeftLockedColumns(): any;
	    /**
	     * Same as filterRowHeight, except no built in logic to handle enableFilters and filterVisible.
	     * @method getFilterHeight
	     * @return {number}
	     */
	    getFilterHeight(): any;
	    /**
	     * @method setFilterHeight
	     */
	    setFilterHeight(value: any): void;
	    /**
	     * Returns true if itemLoadMode==client.
	     * @method getIsClientItemLoadMode
	     * @return {boolean}
	     */
	    getIsClientItemLoadMode(): boolean;
	    /**
	     * Gets the max disclosure cell width.
	     * @method getMaxDisclosureCellWidth
	     * @return {number}
	     */
	    getMaxDisclosureCellWidth(): number;
	    /**
	     * Gets the level that is the ultimate column owner.
	     * @method getColumnOwnerLevel
	     * @return {flexiciousNmsp.FlexDataGridColumnLevel}
	     */
	    getColumnOwnerLevel(): any;
	    /**
	     * A list of ID values, based on the selectedKeyField property.
	     * When a row is selected in the grid, we store the selectedKeyField property
	     * of the selected object in this array collection. This allows for multiple
	     * pages of data that comes down from the server and not maintained in memory
	     * to still keep track of the ids that were selected on other pages.
	     * @method getSelectedKeys
	     * @return {Array}
	     */
	    getSelectedKeys(): any;
	    /**
	     * Gets nestindent recursively
	     * @return {number}
	     * @method getDeepNestIndent
	     */
	    getDeepNestIndent(): number;
	    /**
	     * @method getHasFilterFunction
	     * @return {boolean}
	     */
	    getHasFilterFunction(): any;
	    /**
	     * Gets all right locked columns
	     * @method getRightLockedColumns
	     * @return {Array}
	     */
	    getRightLockedColumns(): any;
	    /**
	     * Height of the row for this level. Defaults to 25
	     * @method getRowHeight
	     * @return {number}
	     */
	    getRowHeight(): any;
	    /**
	     * @return {boolean} o
	     * @method setRowHeight
	     */
	    setRowHeight(o: any): void;
	    /**
	     * Returns true if the nest depth is 1 and grid as the enableMultiColumnSort field enabled.
	     * @return {boolean}
	     * @method getEnableMultiColumnSort
	     *
	     */
	    getEnableMultiColumnSort(): any;
	    /**
	     * When grid.enableSelectionExclusion is set to true, a list of items that the user
	     * explicitly unselected is stored here.
	     * @return {Array}
	     * @method getUnSelectedObjects
	     */
	    getUnSelectedObjects(): any;
	    /**
	     * Returns the first item from the selectedObjects collection, if one exists at this level. If there is none,
	     * then returns the selectedItem collection of the next level.
	     * @method getSelectedItem
	     * @return {Object}
	     */
	    getSelectedItem(): any;
	    /**
	     * A function that lets you control the background drawing mechanism for each cell.
	     * By default, each cell will draw a background on basis of the XXXXColors style property
	     * and XXXXRollOverColors style property, where XXXX= header,filter,pager,footer,renderer or blank.
	     *
	     * This function offers you the opportunity to hook into this mechanism, and draw
	     * your own background using the graphics property of the FlexDataGridCell object,
	     * that is passed in as a parameter to this function. If this function returns false,
	     * the default background is not drawn.
	     * @method getCellCustomBackgroundDrawFunction
	     * @return {Function}
	     */
	    getCellCustomBackgroundDrawFunction(): any;
	    /**
	     *
	     * @method setCellCustomBackgroundDrawFunction
	     * @param {Function} value
	     */
	    setCellCustomBackgroundDrawFunction(value: any): void;
	    /**
	     * Flag that indicates whether or not to show the filter
	     * @method getEnableFilters
	     * @return {boolean}
	     */
	    getEnableFilters(): any;
	    /**
	     *
	     * Sets whether or not to show the filter
	     * @param value
	     * @method setEnableFilters
	     */
	    setEnableFilters(value: any): void;
	    /**
	     * Flag that indicates whether or not to show the footer
	     * @method getEnableFooters
	     * @return {boolean}
	     */
	    getEnableFooters(): any;
	    /**
	     *
	     * Sets whether or not to show the footer
	     * @method setEnableFooters
	     * @param {boolean} value
	     */
	    setEnableFooters(value: any): void;
	    /**
	     * Height of the footer for this level. Defaults to 25
	     * @method getFooterRowHeight
	     * @return {number} row height
	     */
	    getFooterRowHeight(): any;
	    /**
	     *
	     * @method setFooterRowHeight
	     * @param {number} val
	     */
	    setFooterRowHeight(val: any): void;
	    /**
	     * A list of <code>CellInfo</code> objects. When grid.selectionMode=SINGLE_CELL, this collection contains only one item
	     * @method getSelectedCells
	     * @return {Array}
	     */
	    getSelectedCells(): any;
	    /**
	     * How deep in the nesting hierarchy is this item.
	     * Starts at 1 for the columnLevel that belongs to the grid.
	     * @method getNestDepth
	     * @return
	     */
	    getNestDepth(): any;
	    /**
	     * FlexDataGrid.columns
	     * @method getColumns
	     * @return {Array}
	     */
	    getColumns(): any;
	    /**
	     *
	     * @method setColumns
	     * @param {Array} value
	     */
	    setColumns(value: any): void;
	    /**
	     * The parent level for this level. For the root level, this is null.
	     * @method getParentLevel
	     * @return {flexiciousNmsp.FlexDataGridColumnLevel}
	     */
	    getParentLevel(): any;
	    /**
	     * The height of the pager row.
	     * If not set, defaults to the value of the rowHeight property
	     * @method getPagerRowHeight
	     * @return {number}
	     */
	    getPagerRowHeight(): any;
	    /**
	     *
	     * @method setPagerRowHeight
	     * @param {number} val
	     */
	    setPagerRowHeight(val: any): void;
	    /**
	     * Gets the sum of left lock column widths
	     * @method getLeftLockedWidth
	     * @return {number}
	     */
	    getLeftLockedWidth(): number;
	    /**
	     * @method getNestIndent
	     * @return {number}
	     */
	    getNestIndent(): any;
	    /**
	     * @method getLevelRendererHeight
	     * @return {boolean}
	     */
	    getLevelRendererHeight(val: any): any;
	    /**
	     * @method kill
	     */
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridHeaderContainer' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import FlexDataGridContainerBase from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridContainerBase';
	/**
	 * The container for header, footer, filter and pager sections of the top level. These
	 * rows are locked so they stay in place, i.e, they do not scroll when the user scrolls vertically.
	 *
	 * When the user scrolls horizontally, these rows will scroll.
	 *
	 * @constructor
	 * @class FlexDataGridHeaderContainer
	 * @namespace flexiciousNmsp
	 */
	export default class FlexDataGridHeaderContainer extends FlexDataGridContainerBase {
	    constructor(grid: any);
	    getClassNames(): string[];
	    /**
	     * @method onWidthChanged
	     * @param event
	     */
	    onWidthChanged(event: any): void;
	    /**
	     * @method onCellDropMouseMove
	     * @param event
	     */
	    onCellDropMouseMove(event: any): void;
	    /**
	     * @method getScrollableRect
	     * @return {flexiciousNmsp.Rectangle}
	     */
	    getScrollableRect(): any;
	    /**
	     * @method createComponents
	     *
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {number} currentScroll
	     * @param {object} flat
	     */
	    createComponents(level: any, currentScroll: any, flat: any): void;
	    /**
	     * @method rootPageChange
	     * @param event
	     */
	    rootPageChange(event: any): void;
	    /**
	     * @method onFilterChange
	     * @param event
	     */
	    onFilterChange(event: any): void;
	    /**
	     * @method getRowsForRecycling
	     * @return {Array}
	     */
	    getRowsForRecycling(): any;
	    /**
	     * @method getPagerCell
	     * @return {flexiciousNmsp.FlexDataGridPagerCell}
	     */
	    getPagerCell(): any;
	    /**
	     * @method getPager
	     * @return {flexiciousNmsp.FlexDataGridPagerCell}
	     */
	    getPager(): any;
	    /**
	     * @method addCell
	     *
	     * @param component
	     * @param {flexiciousNmsp.RowInfo} row
	     * @param {flexiciousNmsp.ComponentInfo} existingComponent
	     *
	     * @return
	     */
	    addCell(component: any, row: any, existingComponent: any): any;
	    /**
	     * Sets the filter value at the top level for the specified field
	     * @method setFilterValue
	     * @param col
	     * @param val
	     */
	    setFilterValue(col: any, val: any): void;
	    /**
	     *Returns the filter at the top level.
	     * @method getFilterArguments
	     * @return {Array}
	     */
	    getFilterArguments(): any;
	    /**
	     * Sets the filter at the top level.
	     *
	     * @param {String} fld	 The string to match the searchField property of the filter control with.
	     * @return {boolean} True if focus was set, false if otherwise.<br/>
	     * Focus may not be set if the given search field does not exist, <br/>
	     * or if the filter control for the given search field does not  <br/>
	     * implement IFocusManagerComponent.
	     */
	    setFilterFocus(fld: any): any;
	    /**
	     * @method getMaxHorizontalScrollPosition
	     * @return {number}
	     */
	    getMaxHorizontalScrollPosition(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridVirtualBodyContainer' {
	import FlexDataGridBodyContainer from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridBodyContainer';
	/**
	 * The container for the body that supports virtual scrolling
	 * @constructor
	 * @class FlexDataGridVirtualBodyContainer
	 */
	export default class FlexDataGridVirtualBodyContainer extends FlexDataGridBodyContainer {
	    constructor(grid: any);
	    /**
	     * @method getClassNames
	     * @return Array
	     */
	    getClassNames(): string[];
	    /**
	     * @method calculateTotalHeight
	     *
	     * @param {object} flat
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {number} heightSoFar
	     * @param {number} nestLevel
	     * @param {flexiciousNmsp.RowPositionInfo} expanding
	     * @param {Array} addedRows
	     * @param {object} parentObject
	     * @param {boolean} isRecusirve
	     *
	     * @return {number} total height
	     */
	    calculateTotalHeight(flat: any, level: any, heightSoFar: any, nestLevel: any, expanding: any, addedRows: any, parentObject: any, isRecusirve: any): any;
	    /**
	     * @method handleArrowKey
	     *
	     * @param {flexiciousNmsp.FlexDataGridCell} cell
	     * @param {number} keyCode
	     * @param triggerEvent
	     *
	     * @return {boolean}
	     */
	    handleArrowKey(cell: any, keyCode: any, triggerEvent: any): any;
	    /**
	     * @method gotoVerticalPosition
	     * @param {number} vsp
	     */
	    gotoVerticalPosition(vsp: any): void;
	    /**
	     * The current viewport rectange
	     * @method setCurrentRowAtScrollPosition
	     * @param {number} vsp
	     *
	     * @return {boolean}
	     */
	    setCurrentRowAtScrollPosition(vsp: any): any;
	    /**
	     * @method onTimerComplete
	     * @param event
	     */
	    onTimerComplete(event: any): void;
	    /**
	     * @method getOpenVirtualScrollInfo
	     *
	     * @param {number} vsp
	     * @param {number} levelNestDepth
	     *
	     * @return {object}
	     */
	    getOpenVirtualScrollInfo(vsp: any, levelNestDepth: any): any;
	    /**
	     * @method doScroll
	     */
	    doScroll(): void;
	    /**
	     * @method dispatchScroll
	     *
	     * @param {number} vsp
	     * @param {array} recordsOnPage
	     *
	     */
	    dispatchScroll(vsp: any, recordsOnPage: any): void;
	    /**
	     * @method getVpFromRecordIndex
	     *
	     * @param {number} vsp
	     * @param {number} recordIndex
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} expandingLevel
	     *
	     * @return {boolean}
	     */
	    getVpFromRecordIndex(vsp: any, recordIndex: any, expandingLevel: any): any;
	    /**
	     * @method getTopLevelRecordIndex
	     * @param {number} vsp
	     * @return {number} top level record index
	     *
	     */
	    getTopLevelRecordIndex(vsp: any): any;
	    /**
	     * @method addRecord
	     *
	     * @param {Array} recordsOnPage
	     * @param {number} vsp
	     *
	     * @return {number}
	     */
	    addRecord(recordsOnPage: any, vsp: any): any;
	    /**
	     * @method getAnchorArea
	     *
	     * @param {flexiciousNmsp.VirtualScrollLoadInfo} openArea
	     * @param {number} vsp
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     *
	     * @return {flexiciousNmsp.VirtualScrollLoadInfo}
	     */
	    getAnchorArea(openArea: any, vsp: any, level: any): any;
	    /**
	     * @method clearOpenItems
	     */
	    clearOpenItems(): void;
	    /**
	     * @method findRowPositionInfo
	     * @param {Object} item
	     * @return {flexiciousNmsp.RowPositionInfo}
	     */
	    findRowPositionInfo(item: any): any;
	    /**
	     * @method getChromeHeight
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} nextLvl
	     * @return {number}
	     */
	    getChromeHeight(nextLvl: any): any;
	    /**
	     * @method getParentOpenItemFromObject
	     * @param {object} item
	     * @return {object}
	     */
	    getParentOpenItemFromObject(item: any): any;
	    /**
	     * @method getParentOpenItem
	     *
	     * @param {number} verticalPosition
	     * @param {number} myNestDepth
	     *
	     * @return {flexiciousNmsp.VirtualScrollLoadInfo}
	     */
	    getParentOpenItem(verticalPosition: any, myNestDepth: any): any;
	    /**
	     * @method onChildHeaderClicked
	     * @param {flexiciousNmsp.FlexDataGridHeaderCell} headerCell
	     */
	    onChildHeaderClicked(headerCell: any): void;
	    /**
	     * @method clearAllCollections
	     */
	    clearAllCollections(): void;
	    /**
	     * @method addOpenItem
	     *
	     * @param {Object} item
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     * @param {boolean} check
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} lvl
	     */
	    addOpenItem(item: any, rowPositionInfo: any, check: any, lvl: any): void;
	    /**
	     * @method removeOpenItem
	     * @param {Object} item
	     * @param {flexiciousNmsp.RowPositionInfo} rowPositionInfo
	     */
	    removeOpenItem(item: any, rowPositionInfo: any): void;
	    /**
	     * @method removeOpenItemVerticalPosition
	     * @param {flexiciousNmsp.VirtualScrollLoadInfo} toRemove
	     * @param {number} vPos
	     */
	    removeOpenItemVerticalPosition(toRemove: any, vPos: any): void;
	    /**
	     * @method setVirtualScrollProperties
	     */
	    setVirtualScrollProperties(): void;
	    /**
	     * @method setVirtualScrollData
	     * @param {Array} arr
	     */
	    setVirtualScrollData(arr: any): void;
	    /**
	     * @method getFirstVisibleRow
	     * @return {flexiciousNmsp.RowInfo}
	     */
	    getFirstVisibleRow(): any;
	    /**
	     * @method getLastVisibleRow
	     * @return {flexiciousNmsp.RowInfo}
	     */
	    getLastVisibleRow(): any;
	    /**
	     * @method recycle
	     *
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {boolean} scrollDown
	     * @param {number} scrollDelta
	     * @param {boolean} scrolling
	     */
	    recycle(level: any, scrollDown: any, scrollDelta: any, scrolling: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/LockedContent' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * Basically an extended UIComponent that manages the filter and footer cell visibility, heights, and the y positions
	 * @constructor
	 * @class LockedContent
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class LockedContent extends UIComponent {
	    constructor(grid: any);
	    /**
	     * @method getClassNames
	     * @return Array
	     */
	    getClassNames(): string[];
	    /**
	     * handle placeSection
	     * @method placeSection
	     */
	    placeSection(): void;
	    /**
	     * @method kill
	     */
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/NdgBase' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * Base class for the FlexDataGrid. Please refer to the FlexDataGrid class for details
	 * @constructor
	 * @class NdgBase
	 * @namespace com.flexicious.lic
	 */
	export default class NdgBase extends UIComponent {
	    constructor(props: any, arg1: any, arg2: any, tag: any);
	    getClassNames(): string[];
	    showToaster(message: any, toasterPosition: any, toasterRenderer: any, animationDuration: any, visibleDuration: any, moveAnimate: any, fadeAnimate: any): void;
	    /**
	     * @method onCreationComplete
	     * @param event
	     */
	    onCreationComplete(event: any): void;
	    /**
	     * @method onGridMouseClick
	     * @param event
	     */
	    onGridMouseClick(event: any): void;
	    /**
	     * @method createListData
	     * @param text
	     * @param dataField
	     * @param i
	     *
	     * @return
	     */
	    createListData(text: any, dataField: any, i: any): null;
	    /**
	     * @method setActualSize
	     *
	     * @param {number} w width
	     * @param {number} h height
	     *
	     */
	    setActualSize(w: any, h: any): void;
	    /**
	     * Calls rebuild internally.
	     * @method refreshLayout
	     */
	    refreshLayout(): void;
	    /**
	     * Returns true if the grid defines the border style specified
	     * @param side
	     * @return {boolean}
	     *
	     */
	    hasBorderSide(side: any): any;
	    /**
	     * Rebuild the entire grid. Iterates through the data provider, re-evaluvates the vertical positions of each item,
	     * Drops and recreates all cells.
	     * There are four functions that you can use to redraw the grid, on basis of what your needs are.
	     * <ul>
	     * <li>rebuild : Most expensive. Rebuilds the entire grid. This is also the most expensive function</li>
	     * <li>reDraw  : Removes the cells in view, and redraws them. Should be used when there are no additions/removals to the data provider</li>
	     * <li>refreshCells : Resets the text,enabled, styles and border/background etc. of the currently visible cells. See the refreshCells() function for details.</li>
	     * <li>invalidateCells : Least expensive. Only resets the border/background of the currently visible cells. </li>
	     * <li>rebuildBody : A light weight replacement for rebuild that only rebuids the body, not the header,footer,filter, and pager (which are generally more expensive to rebuild). </li>
	     * </ul>
	     * */
	    rebuild(): void;
	    /**
	     * Calls invalidateDisplayList()
	     */
	    doInvalidate(): void;
	    /**
	     * @method updateDisplayList
	     *
	     * @param {number} unscaledWidth
	     * @param {number} unscaledHeight
	     *
	     */
	    updateDisplayList(unscaledWidth: any, unscaledHeight: any): void;
	    /**
	     * @method onCollectionChange
	     * @param event
	     */
	    onCollectionChange(event: any): void;
	    /**
	     * Redraws the grid, assuming the data provider is the same, we're just changing column widths or ordinals.
	     * There are four functions that you can use to redraw the grid, on basis of what your needs are.
	     * <ul>S
	     * <li>rebuild : Most expensive. Rebuilds the entire grid. This is also the most expensive function</li>
	     * <li>reDraw  : Removes the cells in view, and redraws them. Should be used when there are no additions/removals to the data provider</li>
	     * <li>refreshCells : Resets the text,enabled, styles and border/background etc. of the currently visible cells. See the refreshCells() function for details.</li>
	     * <li>invalidateCells : Least expensive. Only resets the border/background of the currently visible cells. </li>
	     * <li>rebuildBody : A light weight replacement for rebuild that only rebuids the body, not the header,footer,filter, and pager (which are generally more expensive to rebuild). </li>
	     * </ul>
	     *
	     * @method reDraw
	     */
	    reDraw(): void;
	    /**
	     * @method traceEvent
	     * @param {String} msg
	     */
	    traceEvent(msg: any): void;
	    /**
	     * @method dragEnter
	     * @param event
	     */
	    dragEnter(event: any): void;
	    /**
	     * @method dragDrop
	     * @param event
	     */
	    dragDrop(event: any): void;
	    /**
	     * @method drawDefaultSeparators
	     */
	    drawDefaultSeparators(): void;
	    /**
	     * @method clearSelection
	     */
	    clearSelection(): void;
	    /**
	     * Invalidates the cell widths, so in the next commit properties, we snap to the new column widths.
	     * @method invalidateCellWidths
	     */
	    invalidateCellWidths(): void;
	    /**
	     * On grid resized, we reposition the cells.
	     * @method onGridResized
	     * @param event
	     */
	    onGridResized(event: any): void;
	    /**
	     * Drag and Drop support, create a image representation of the row.
	     * @method getUIComponentBitmapData
	     * @param target
	     * @return
	     */
	    getUIComponentBitmapData(target: any): any;
	    /**
	     * @method resumeKeyboardListeners
	     */
	    resumeKeyboardListeners(): void;
	    /**
	     * Invalidates the height, which in turn adjusts the various section based on the updated numbers,
	     * and recycles the renderers, so if there is more stuff on the viewport than is currently visible, it is drawn.
	     * @method invalidateHeight
	     */
	    invalidateHeight(): void;
	    /**
	     * Invalidates the width, which in turn adjusts the various section based on the updated numbers,
	     * and recycles the renderers, so if there is more stuff on the viewport than is currently visible, it is drawn.
	     * @method invalidateWidth
	     */
	    invalidateWidth(): void;
	    /**
	     * Returns true if  selectionMode=MULTIPLE_ROWS or SINGLE_ROW
	     * @method getIsCellSelectionMode
	     * @return {Boolean}
	     */
	    getIsCellSelectionMode(): boolean;
	    /**
	     * A list of <code>CellInfo</code> objects. When grid.selectionMode=SINGLE_CELL, this collection contains only one item
	     * @method getSelectedCells
	     * @return
	     *
	     */
	    getSelectedCells(): any;
	    /**
	     * @method getForceColumnsToFitVisibleArea
	     * @return {boolean}
	     */
	    getForceColumnsToFitVisibleArea(): boolean;
	    /**
	     * @method setWidth
	     * @param {number} val
	     */
	    setWidth(val: any): void;
	    /**
	     * @method setHeight
	     * @param {number} val
	     */
	    setHeight(val: any): void;
	    /**
	     * Flag that indicates whether or not to setup drop support.
	     * Same as enableDrag, property provided for consistency with sdk counterpart
	     * @method getDropEnabled
	     * @return
	     */
	    getDropEnabled(): any;
	    /**
	     * @method setDropEnabled
	     * @param {boolean} enabled
	     */
	    setDropEnabled(enabled: any): void;
	    /**
	     * The left locked vertical separator Sprite. To style this, please use the lockedSeparatorColor and lockedSeparatorThickness.
	     * You can also customize this by extending the grid and overriding the drawDefaultSeparators function.
	     * @method getLeftLockedVerticalSeparator
	     * @return
	     */
	    getLeftLockedVerticalSeparator(): any;
	    /**
	     * Selection mode for the grid.
	     * The grid supports the following selection modes:
	     * <ul>
	     * <li> MULTIPLE_CELLS </li>
	     * <li> MULTIPLE_ROWS </li>
	     * <li> NONE </li>
	     * <li> SINGLE_CELL</li>
	     * <li> SINGLE_ROW</li>
	     * </ul>
	     * In Row selection modes (Single Row or Multiple Rows), as the user selects rows, the selectedKeys and selectedObjects properties are updated respectively. <br/>
	     * In cell selection mode, the selectedCells property is updated. The selectedKeys contains the value of the selected objects "selectedKeyField" property. <br/>
	     * The selected objects is a readonly collection that contains the actual selected objects. <br/>
	     * The selected cells property is a collection of CellInfo Objects, which contains a rowData property (which is a pointer to the actual data object bound to the row)
	     * and a column property which can uniquely identify a cell.<br/>
	     * If you programatically modify the selected cells collection or selectedKeys collection, please ensure that you call refreshCells() method on the grid.<br/>
	     * @method getSelectionMode
	     * @default MULTIPLE_ROWS
	     */
	    getSelectionMode(): any;
	    /**
	     * @method setSelectionMode
	     * @param {boolean} value
	     */
	    setSelectionMode(value: any): void;
	    /**
	     * The row data that is currently being dragged
	     * @method getDragRowData
	     * @return
	     */
	    getDragRowData(): any;
	    /**
	     * Returns true if  selectionMode=MULTIPLE_ROWS or SINGLE_ROW
	     * @method getIsRowSelectionMode
	     * @return {Boolean}
	     */
	    getIsRowSelectionMode(): boolean;
	    /**
	     * Flag that indicates whether or not to setup drag support.
	     * Same as enableDrag, property provided for consistency with sdk counterpart
	     * @method getDragEnabled
	     * @return {boolean}
	     */
	    getDragEnabled(): any;
	    /**
	     * @method setDragEnabled
	     * @param {boolean} enabled
	     */
	    setDragEnabled(enabled: any): void;
	    /**
	     * Flag that indicates whether or not to setup drop support. Same as the dropEnabled flag.
	     * @method getEnableDrop
	     * @return {boolean}
	     */
	    getEnableDrop(): any;
	    /**
	     * @method setEnableDrop
	     * @param {boolean} enabled
	     */
	    setEnableDrop(enabled: any): void;
	    /**
	     * The right locked vertical separator Sprite. To style this, please use the lockedSeparatorColor and lockedSeparatorThickness.
	     * You can also customize this by extending the grid and overriding the drawDefaultSeparators function.
	     * @method getRightLockedVerticalSeparator
	     * @return
	     */
	    getRightLockedVerticalSeparator(): any;
	    /**
	     * The dropIndicator separator Sprite. To style this, please use the dropIndicatorColor and dropIndicatorSeparatorThickness.
	     * You can also customize this by extending the grid and overriding the showDropIndicator function.
	     * @method getDropIndicator
	     * @return
	     */
	    getDropIndicator(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/StyleDefaults' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * An object that represents information about a cell.
	 * @constructor
	 * @class StyleDefaults
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class StyleDefaults extends TypedObject {
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/Themes' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * An object that represents information about a cell.
	 * @constructor
	 * @class BaseStyles
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Themes extends TypedObject {
	    getClassNames(): string[];
	    static getThemeStyles(themeName: any): any;
	    static applyTheme(themeName: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/cache/FactoryKey' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A class that is used as a key to group renderers that belong to specific factory and sub factory.
	 * @constructor
	 * @class FactoryKey
	 * @namespace flexiciousNmsp
	 */
	export default class FactoryKey extends TypedObject {
	    constructor(factory: any, subFactory: any);
	    /**
	     * @override
	     */
	    getClassNames(): string;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/cache/KeyValuePairCollection' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	/**
	 * An equivalent of a Java HashMap, that allws you to have object keys and values.
	 * @constructor
	 * @class KeyValuePairCollection
	 * @namespace flexiciousNmsp
	 */
	export default class KeyValuePairCollection extends TypedObject {
	    constructor();
	    getClassNames(): string;
	    /**
	     * Add a key value pair
	     * @param {Object} key
	     * @param {Object} value
	     */
	    addItem(key: any, value: any): void;
	    /**
	     * Remove item with associate key
	     * @param {Object} key
	     */
	    removeItem(key: any): void;
	    /**
	     * Get value for the key from key Value pair
	     * @param {Object} key
	     */
	    getValue(key: any): any;
	    /**
	     * Check whether key exists or not
	     * @param {Object} key
	     */
	    hasKey(key: any): any;
	    /**
	     * Remove all key value pairs
	     */
	    clear(): void;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/cache/RendererCache' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Class to keep renderers around...
	 *
	 * Each Cell in the grid, is a container UI component, and the actual renderer UI component
	 * The _dict object here holds a bucket for each container type/renderer type combination
	 * The _rendererFactories holds a map of each cell and the corresponding bucket key (FactoryKey) that
	 * was used to generate it, so we are able to put it back into the bucket that it came from.
	 *
	 * The idea is, there should always be only just as many things in memory as are currently visibule
	 * plus a little outside so we scroll smoothly...
	 * @constructor
	 * @class RendererCache
	 * @namespace flexiciousNmsp
	 */
	export default class RendererCache extends TypedObject {
	    constructor(grid: any);
	    getClassNames(): string;
	    /**
	     * Returns an instance of the specified factory/subfactory combination from the cache, if once exists.
	     * Else, instantiates a new instance, and stores the factory key that was used to create it.
	     * @param factory
	     * @param subFactory
	     * @return
	     */
	    popInstance(factory: any, subFactory: any): any;
	    /**
	     * Returns a previously created renderer into the bucket for reuse later.
	     */
	    pushInstance(instance: any): void;
	    /**
	     *
	     * @param {flexiciousNmsp.ClassFactory} factory
	     * @param {flexiciousNmsp.ClassFactory} subFactory
	     *
	     * @return {flexiciousNmsp.FactoryKey}
	     */
	    getFactoryKey(factory: any, subFactory: any): any;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/filters/AdvancedFilter' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import Filter from 'flxs-react-datagrid/js/flexgrid/grids/filters/Filter';
	/**
	 * A container object that encapsulates all the
	 * individual property filter settings, page settings
	 * and the sort state.
	 * @constructor
	 * @class AdvancedFilter
	 * @namespace flexiciousNmsp.filter
	 */
	export default class AdvancedFilter extends Filter {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * @return {flexiciousNmsp.FlexDataGridColumnLevel} returns level
	     */
	    getLevel(): any;
	    /**
	     * @param {flexiciousNmsp.Filter} param
	     * @return {flexiciousNmsp.AdvancedFilter}
	     */
	    static from(param: any): AdvancedFilter;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/filters/Filter' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A container object that encapsulates all the
	 * individual property filter settings, page settings
	 * and the sort state.
	 * @constructor
	 * @class Filter
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Filter extends TypedObject {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * Takes a filter and populates the current filter's
	     * properties with the provided filter
	     * @method copyFrom
	     * @param {Object} filter to copy
	     */
	    copyFrom(filter: any): void;
	    /**
	     * Adds a com.flexicious.grids.filters.FilterSort
	     * object to the list. Must be just 1 for Basic DataGrid, but can be
	     * more than one for advanced datagrid.
	     * @method addSort
	     *
	     * @param {String} sortColumn
	     * @param {Boolean} isAscending
	     * @param {String} sortComparisionType default value is "auto"
	     * @param {Function} sortCompareFunction
	     *
	     */
	    addSort(sortColumn: any, isAscending: any, sortComparisionType: any, sortCompareFunction: any): void;
	    /**
	     * Adds a FilterExpression to the current list
	     * Uses the default equality operator.
	     * @method addCriteria
	     * @param {String} columnName
	     * @param {Object} expression
	     *
	     */
	    addCriteria(columnName: any, expression: any): void;
	    /**
	     * Adds a com.flexicious.grids.filters.FilterExpression to the current list. If an Filter Expression
	     * was added with the same column name previously, overwrites the operation and the compareValue
	     * @method addOperatorCriteria
	     * @param {String} columnName 	The column to filter on
	     * @param {String} operation  	The filter operation to apply. See com.flexicious.grids.filters.FilterExpression for a list of available operations.
	     * @param {Object} compareValue	The expression to filter with. A single value in case of Binary operators like equals, greater than, less than, and an array for rante operators like between, in list, etc.
	     * @param {Boolean} wasContains
	     */
	    addOperatorCriteria(columnName: any, operation: any, compareValue: any, wasContains: any): void;
	    /**
	     * Expression to add
	     * @method addFilterExpression
	     * @param {flexiciousNmsp.FilterExpression} filterExpression
	     *
	     */
	    addFilterExpression(filterExpression: any): void;
	    /**
	     * Removes a previously added FilterExpression from the current list
	     * that matches the specified search field.
	     * @method removeCriteria
	     * @param {String} searchField
	     */
	    removeCriteria(searchField: any): void;
	    /**
	     * Given a filter column, returns the corresponding value of the filter expression of that column.
	     *
	     * @method getFilterValue
	     * @param {String} fld
	     * @return {*}
	     *
	     */
	    getFilterValue(fld: any): any;
	    /**
	     * Given a filter column, returns the corresponding filter expression.
	     * @method getFilterExpression
	     * @param {String} fld
	     * @return {*}
	     */
	    getFilterExpression(fld: any): any;
	    /**
	     * @method getFilterExpressions
	     * @return {Object}
	     */
	    getFilterExpressions(): any;
	    /**
	     * @method setFilterExpressions
	     * @param {*} val
	     */
	    setFilterExpressions(val: any): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/filters/FilterContainerImpl' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A Class that encapsulates functionality that containers of filter controls should have.
	 * @class FilterContainerImpl
	 * @constructor
	 * @param iEventDispatcher
	 *
	 */
	export default class FilterContainerImpl extends TypedObject {
	    constructor(iEventDispatcher: any);
	    getClassNames(): string;
	    /**
	     * Return filter arguments
	     * @return {Array}
	     */
	    getFilterArguments(): any[];
	    /**
	     * Remove all filter controls
	     */
	    resetFilterControls(): void;
	    /**
	     * Unresgister a filter control component
	     * @param {*} iFilterControl
	     */
	    unRegisterIFilterControl(iFilterControl: any): void;
	    /**
	     * Check whether filter control component already resgister or not
	     * @param {*} iFilterControl
	     */
	    isIFilterControlRegistered(iFilterControl: any): any;
	    /**
	     * Resgister a filter control component
	     * @param {*} iFilterControl
	     */
	    registerIFilterControl(iFilterControl: any): void;
	    /**
	     * @param fld	The string to match the searchField property of the filter control with.
	     * @return 		True if focus was set, false if otherwise.
	     * Focus may not be set if the given search field does not exist, <br/>
	     * or if the filter control for the given search field does not  <br/>
	     * implement IFocusManagerComponent.
	     */
	    setFilterFocus(fld: any): boolean;
	    /**
	     * set focus on its child component
	     * @param {*} child
	     */
	    setFocusOnChild(child: any): void;
	    /**
	     *
	     * @param event
	     */
	    getNextFilter(event: any): any;
	    /**
	     * Returns next focusable filter
	     * @param {Number} myIndex current focusable filter index
	     * @param {Boolean} forward forward or backward mode
	     * @param {Boolean} inclusive exclusive or inclusive mode
	     */
	    getNextFocusableFilter(myIndex: any, forward: any, inclusive: any): any;
	    /**
	     * Set filter value to column
	     * @param {flexiciousNmsp.FlexDataGridColumn} column
	     * @param {Object} value
	     */
	    setFilterValue(column: any, value: any): void;
	    /**
	     * Get filter value from column
	     * @param {flexiciousNmsp.FlexDataGridColumn} column
	     * @return {Object} value
	     */
	    getFilterValue(column: any): any;
	    /**
	     * Check whether filter control search field belongs to this column or not
	     * @param {flexiciousNmsp.FlexDataGridColumn} column
	     * @return {Boolean}
	     */
	    hasField(column: any): boolean;
	    /**
	     * Process filter
	     */
	    processFilter(): void;
	    /**
	     * Clear all filter controls
	     */
	    clearFilter(): void;
	    onKeyUp(event: any): void;
	    onChangeHandler(event: any): void;
	    /**
	     * Get filter expression from filter control
	     * @param {*} iFilterControl
	     * @return {flexiciousNmsp.FilterExpression}
	     */
	    getFilterExpression(iFilterControl: any): any;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/filters/FilterExpression' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A class that represents an individual filter expression
	 * A filter expression consists of a columnName (this is the
	 * property of the object to search), an operation type (one of the
	 * FILTER_OPERATION_TYPE constants) and an expression (the value to search on).
	 * @constructor
	 * @class FilterExpression
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FilterExpression extends TypedObject {
	    constructor(columnName: any, filterOperation: any, expression: any);
	    getClassNames(): string[];
	    /**
	     * @method copyFrom
	     * @param {Object} filterExpression
	     * @return {flexiciousNmsp.FilterExpression}
	     */
	    copyFrom(filterExpression: any): this;
	    /**
	     * @method clone
	     * @return {flexiciousNmsp.FilterExpression} return clone of this filter expresssion
	     */
	    clone(): any;
	    /**
	     * Creates a filter expression
	     * @param filter            The filter create the expression for
	     * @param columnName        The column to search
	     * @param filterOperation    The filter operation to apply. See the list of FILTER_OPERATION_TYPE constants
	     * @param expression        The expression to compare against
	     * @param wasContains
	     * @method createFilterExpression
	     */
	    static createFilterExpression(filter: any, columnName: any, filterOperation: any, expression: any, wasContains: any): any;
	    /**
	     * convert object to other datatype using filterComparisionType parameter
	     *
	     * @method convert
	     * @param {String} filterComparisionType
	     * @param {Object} object
	     *
	     * @return {*}
	     */
	    static convert(filterComparisionType: any, object: any): any;
	    /**
	     * Given an object checks to see if it matches the criteria specified by this filter expression
	     * @method isMatch
	     * @param src
	     * @param grid
	     *
	     * @return {Boolean}
	     * @throws {Error} Invalid expression for Filter expression
	     */
	    isMatch(src: any, grid: any): any;
	    /**
	     * It parse "1" or "true" or "yes" or "y" as true and
	     * "0" or "false" or "no" or "n" as false otherwise handled by default boolean function
	     * @param {String} str
	     * @return {Boolean} description
	     */
	    static parseBoolean(str: any): boolean;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/filters/FilterSort' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * The advanced grid supports multi column sorting
	 * This class was created in order to provide server
	 * support for multi column sorting.
	 * @constructor
	 * @class FilterSort
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class FilterSort extends TypedObject {
	    constructor(sortColumn: any, isAscending: any);
	    getClassNames(): string[];
	    /**
	     * Copy sort properties to current instance
	     * @param {Object} filterSort
	     */
	    copyFrom(filterSort: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/grids/filters/PrintExportFilter' {
	import Filter from 'flxs-react-datagrid/js/flexgrid/grids/filters/Filter';
	/**
	 * A class that extends the base filter object, but adds
	 * the additional properties, to store whether the user
	 * chose to print all pages, or specific pages of data.
	 *
	 * Please note, this is only required when the grid's
	 * filterPageSortMode is server.
	 * @constructor
	 * @class PrintExportFilter
	 * @namespace flexiciousNmsp
	 */
	export default class PrintExportFilter extends Filter {
	    constructor();
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/GridPreferencesInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Class added in 2.9 to support multiple preferences. Each IPersistable has
	 * a gridpreferences object, that contains an array of PreferenceInfo objects
	 * @constructor
	 * @class GridPreferencesInfo
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class GridPreferencesInfo extends TypedObject {
	    constructor();
	    /**
	     *
	      * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * A function that converts the current preference object into a string.
	     * @param uso
	     * @return {String}
	     */
	    toPreferenceString(uso: any): string;
	    /**
	     *  Converts a string resut of toPreferenceString to a GridPreferencesInfo object
	     * @param uso
	     * @param str
	     * @return {*}
	     */
	    fromPreferenceString(uso: any, str: any): this;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/OpenSettingsPopup' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A OpenSettingsPopup that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class OpenSettingsPopup
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class OpenSettingsPopup extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    setGrid(val: any): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    onClearSettings(): void;
	    onSaveSettings(): void;
	    onCancel(evt: any): void;
	    openSettings_cbDefaultChangeHandler(): void;
	    onDeletePref(pref: any): void;
	    onApplyPref(pref: any): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    initialize(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/PreferenceInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Class added in 2.9 to support multiple preferences. Store information about the
	 * name of the preference, whether or not it is a system preference (which cannot be deleted),
	 * and the preference string associated with this name.
	 * @constructor
	 * @class PreferenceInfo
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class PreferenceInfo extends TypedObject {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/SaveSettingsPopup' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A SaveSettingsPopup that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class SaveSettingsPopup
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class SaveSettingsPopup extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    showDialog(): void;
	    setGrid(val: any): void;
	    onClearSettings(evt: any): void;
	    onCancel(evt: any): void;
	    onSaveSettings(domElementdiv: any): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/SettingsPopup' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A SettingsPopup that which can be used within the filtering/binding infrastructure.
	 * @constructor
	 * @class SettingsPopup
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class SettingsPopup extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @param val
	     */
	    setGrid(val: any): void;
	    /**
	     *
	     * @type {on}
	     */
	    onOK(dialog: any): void;
	    /**
	     *
	     * @param evt
	     */
	    onCancel(evt: any): void;
	    showDialog(): void;
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/UserSettingsController' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Class responsible for preference persistence.
	 * @constructor
	 * @class UserSettingsController
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class UserSettingsController extends TypedObject {
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @return {*}
	     */
	    static instance(): any;
	    /**
	     * Clears preferences
	     *  @param userSettingsOptions
	     */
	    clearPreferences(userSettingsOptions: any): void;
	    /**
	     *  Loads preferences
	     * @param userSettingsOptions
	     */
	    loadPreferences(userSettingsOptions: any): void;
	    /**
	     * Saves the preferences
	     * @param userSettingsOptions
	     * @param name
	     * @param isDefault
	     */
	    persistPreferences(userSettingsOptions: any, name: any, isDefault: any): void;
	    /**
	     * Gets the preferences string for the supplied grid
	     * @param userSettingsOptions
	     * @return {*}
	     */
	    getPreferencesString(userSettingsOptions: any): string;
	    /**
	     *
	     * @param userSettingsOptions
	     * @param val
	     * @return {*}
	     */
	    parsePreferences(userSettingsOptions: any, val: any): {
	        key: any;
	        data: any;
	    }[];
	    /**
	     *
	     * @param userSettingsOptions
	     * @param val
	     * @return {Array}
	     */
	    parseCompactPreferencesString(userSettingsOptions: any, val: any): {
	        key: any;
	        data: any;
	    }[];
	    /**
	     *
	     * @param userSettingsOptions
	     * @return {String}
	     */
	    getCompactPreferencesString(userSettingsOptions: any): string;
	    /**
	     *
	     * @param userSettingsOptions
	     * @return {Array}
	     */
	    getLegacyPreferences(userSettingsOptions: any): {
	        key: any;
	        data: any;
	    }[];
	    /**
	     * Gets the order of columns
	     * @param userSettingsOptions
	     * @return {Array}
	     */
	    getColumnOrder(userSettingsOptions: any): any[];
	    /**
	     *
	     * @param userSettingsOptions
	     * @param property
	     * @return {Array}
	     */
	    getPropertyValues(userSettingsOptions: any, property: any): {
	        key: any;
	        property: any;
	    }[];
	    /**
	     *
	     * @param userSettingsOptions
	     */
	    getColumnVisibility(userSettingsOptions: any): {
	        key: any;
	        property: any;
	    }[];
	    /**
	     * Gets the widths of the columns
	     * @param [userSettingsOptions]
	     * @return
	     */
	    getColumnWidths(userSettingsOptions: any): {
	        key: any;
	        property: any;
	    }[];
	    /**
	     * Applies previously set preferences..
	     * @param [userSettingsOptions]
	     * @param [arrayCollection]
	     *
	     */
	    setPreferences(userSettingsOptions: any, arrayCollection: any): void;
	    /**
	     * Sets the order of columns
	     * @param [userSettingsOptions]
	     * @param [val]
	     *
	     */
	    setColumnOrder(userSettingsOptions: any, val: any): void;
	    /**
	     *
	     * @param col
	     * @param val
	     * @param userSettingsOptions
	     */
	    rearrangeColumns(col: any, val: any, userSettingsOptions: any): void;
	    /**
	     *
	     * @param col
	     * @return {Boolean}
	     */
	    getIsColumnOnly(col: any): boolean;
	    /**
	     *
	     * @param source
	     * @return {Array}
	     */
	    removeUndefined(source: any): any[];
	    /**
	     *
	     * @param col
	     * @return {*}
	     */
	    getFirstColumn(col: any): any;
	    /**
	     * @param [userSettingsOptions]
	     * @param [val]
	     * @param [property]
	     *
	     */
	    setPropertyValues(userSettingsOptions: any, val: any, property: any): void;
	    /**
	     * Sets the visibility of the columns
	     * @param userSettingsOptions
	     * @param val
	     */
	    setColumnVisibility(userSettingsOptions: any, val: any): void;
	    /**
	     * Sets the widths of the columns
	     * @param [userSettingsOptions]
	     * @param [val]
	     *
	     */
	    setColumnWidths(userSettingsOptions: any, val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/persistence/UserSettingsOptions' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Class responsible for storing information about the user preference persistence settings
	 * @constructor
	 * @class UserSettingsOptions
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class UserSettingsOptions extends TypedObject {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     * Returns an options object for this grid.
	     * @param grid
	     */
	    static create(grid: any): UserSettingsOptions;
	    /**
	     * Quick accessor for persistable grid
	     * @return {null}
	     */
	    getGrid(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/toolbar/MultiColumnSortPopup' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A MultiColumnSortPopup that which can be used within the sorting/binding infrastructure.
	 * @constructor
	 * @class MultiColumnSortPopup
	 * @namespace flexiciousNmsp
	 */
	export default class MultiColumnSortPopup extends UIComponent {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    showDialog(): void;
	    onClear(evt: any): void;
	    onCancel(evt: any): void;
	    onApply(evt: any): void;
	    onSelectionHandler(rowIndex: any, evt: any): void;
	    /**
	     * Initializes the auto complete and watermark plugins
	     */
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/toolbar/PagerControlAS' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A JavaScript only version of the Pager control that significantly cuts down on
	 * initialization time. It does so by using pure ActionScript opposed to MXML,
	 * not using as many nested HBoxes, and not using plain events instead databindings to modify appearance.
	 * @constructor
	 * @class PagerControl
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class PagerControl extends UIComponent {
	    constructor();
	    getClassNames(): string[];
	    getPageSize(): any;
	    setPageSize(val: any): void;
	    getPageIndex(): any;
	    setPageIndex(val: any): void;
	    setTotalRecords(val: any): void;
	    getTotalRecords(): any;
	    /**
	     * Default handler for the First Page Navigation Button
	     */
	    onImgFirstClick(): void;
	    /**
	     * Default handler for the Previous Page Navigation Button
	     */
	    onImgPreviousClick(): void;
	    /**
	     * Default handler for the Next Page Navigation Button
	     */
	    onImgNextClick(): void;
	    /**
	     * Default handler for the Last Page Navigation Button
	     */
	    onImgLastClick(): void;
	    /**
	     * Default handler for the Page Change Combo Box
	     */
	    onPageCbxChange(event: any): void;
	    /**
	     * Default handler for the Page Change Event
	     */
	    onPageChanged(): void;
	    onCreationComplete(event: any): void;
	    /**
	     * Sets the page index to 1(0), dispatches the reset event.
	     */
	    reset(): void;
	    getPageStart(): number;
	    getPageEnd(): any;
	    getPageCount(): number;
	    /**
	     * Default handler for the Word Export Button. Calls
	     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create(ExportOptions.DOC_EXPORT))
	     */
	    onWordExport(): void;
	    /**
	     * Default handler for the Word Export Button. Calls
	     * ExtendedExportController.instance().doexport(this.grid,ExportOptions.create())
	     */
	    onExcelExport(): void;
	    /**
	     * Default handler for the Print Button. Calls
	     * var po:PrintOptions=PrintOptions.create();
	     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
	     * ExtendedPrintController.instance().print(this.grid,po)
	     */
	    onPrint(): void;
	    /**
	     * Default handler for the Print Button. Calls
	     * var po:PrintOptions=PrintOptions.create(true);
	     * po.printOptionsViewrenderer = new ClassFactory(ExtendedPrintOptionsView);
	     * ExtendedPrintController.instance().print(this.grid,po)
	     */
	    onPdf(): void;
	    /**
	     * Default handler for the Clear Filter Button.
	     * Calls grid.clearFilter()
	     */
	    onClearFilter(): void;
	    /**
	     * Default handler for the Process Filter Button.
	     * Calls grid.processFilter()
	     */
	    onProcessFilter(): void;
	    /**
	     * Default handler for the Show Hide Filter Button.
	     * Calls this.grid.filterVisible=!this.grid.filterVisible;nestedGrid.placeSections()
	     */
	    onShowHideFilter(): void;
	    /**
	     * Default handler for the Show Hide Filter Button.
	     * Calls this.grid.filterVisible=!this.grid.filterVisible;nestedGrid.placeSections()
	     */
	    onShowHideFooter(): void;
	    /**
	     * Default handler for the Settings Popup
	     * Calls var popup:SaveSettingsPopup=new SaveSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
	     */
	    onShowSettingsPopup(): void;
	    /**
	     * Default handler for the OPen Settings Popup
	     * Calls var popup:OpenSettingsPopup=new OpenSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
	     */
	    onOpenSettingsPopup(): void;
	    /**
	     * Default handler for the Save Settings Popup
	     * Calls var popup:SaveSettingsPopup=new SaveSettingsPopup();UIUtils.addPopUp(popup,grid as DisplayObject);popup.grid=grid;
	     */
	    onSaveSettingsPopup(): void;
	    createToolbarActions(): void;
	    onToolbarActionsChanged(event: any): void;
	    onGridSelectionChange(event: any): void;
	    toolbarActionFilterFunction(item: any): boolean;
	    getPageDropdown(): any;
	    destroy(): void;
	    addToolbarActionsHTML(): any[];
	    updateDisplayList(w: any, h: any): void;
	    render(): any;
	    componentDidMountCustom(): void;
	    enableDisableButton(button: any, enabled: any): void;
	    rebuild(): void;
	    refresh(): void;
	    destroyButtons(arr: any): void;
	    initializeButtons(arr: any): void;
	    processAction(code: any): void;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/utils/CellUtils' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A set of utility functions that are shared by FlexDataGridDataCell, FlexDataGridDataCell2 and FlexDataGridDataCell3
	 * @constructor
	 * @class CellUtils
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class CellUtils extends TypedObject {
	    getClassNames(): string[];
	    /**
	     * Draws the background as well as calls drawBorder on the given cell
	     *
	     * Each cell in Ultimate will draw its own background
	     * and border. This method will use the evaluated results of a number of properties on the cell
	     * object to calculate the color, width, and visibility of the background associated with this cell.
	     * <ul>
	     * <li>First, this method will check to see if you have defined a cellCustomBackgroundDrawFunction for the
	     * associated column or level. If so, it will call this method, with the cell as a parameter. You can draw
	     * a custom background in this function. If you return false, from this function, this method will not
	     * execute any other code, and simply call the drawBorders method</li>
	     * <li>First, this method will check to see if you have defined a cellCustomBackgroundDrawFunction for the
	     * associated column or level. If so, it will call this method, with the cell as a parameter. You can draw
	     * a custom background in this function. If you return false, from this function, this method will not
	     * execute any other code, and simply call the drawBorders method</li>
	     * </ul>
	     */
	    static drawBackground(cell: any): void;
	    /**
	     * If this is a fillRow, returns the value of the color property.
	     * Else, returns the value of the "prop" property which is the value of one of the following style properties:
	     * <ul>
	     * <li>rollOverColors</li>
	     * <li>headerRollOverColors</li>
	     * <li>footerRollOverColors</li>
	     * <li>filterRollOverColors</li>
	     * <li>pagerRollOverColors</li>
	     * <li>columnGroupRollOverColors</li>
	     * </ul>
	     */
	    static getRolloverColor(cell: any, prop: any): any;
	    /**
	     * The getTextColors method is responsible for evaluating the text color of the cell.
	     * <ul>
	     * <li>First, it checks to see if the cell is disabled. If so, it will return the value of the textDisabledColor style property</li>
	     * <li>Next, it checks to see if there is a value for the currentTextColors property (based upon rollover) and if so returns that. </li>
	     * <li>Next, it checks to see if there is a custom cellTextColorFunction on the column and if so, it returns the result of this function</li>
	     * <li>Next, it checks to see if there is a custom rowTextColorFunction on the level and if so, it returns the result of this function</li>
	     * <li>Next, it checks to see if there enableEditRowHighlight is true amd this row is in edit mode, then it returns the value of the editTextColor style property.</li>
	     * <li>Next, it checks to see if the row is selected (row selection mode) or cell is selected (cell selection mode) and if so, returns textSelectedColor property.</li>
	     * <li>Next, it checks to see if a columnTextColor property is specified on the associated column and if so, returns the value of this property.</li>
	     * <li>Finally, it uses the alternatingTextColors array and return its 0th or 1st index based upton the rowInfo.rowPositionInfo.rowIndex.</li>
	     * </ul>
	     */
	    static getTextColors(cell: any): any;
	    /**
	     * If a value is defined for grid.cellBackgroundColorFunction, returns the result of that function
	     * else returns null.
	     */
	    static getBackgroundColorFromGrid(cell: any): any;
	    /**
	     * If a value is defined for grid.cellTextColorFunction, returns the result of that function
	     * else returns null.
	     */
	    static getTextColorFromGrid(cell: any): any;
	    /**
	     * The getBackgroundColors method is responsible for evaluating the background color of the cell.
	     * <ul>
	     * <li>First, it checks to see if this is a filler row. If so, it will use the alternatingItemColors array and return its 0th or 1st index based upton the rowInfo.rowPositionInfo.rowIndex. </li>
	     * <li>Next, it checks to see if the cell is disabled. If so, it will return the value of the selectionDisabledColor style property</li>
	     * <li>Next, it checks to see if there is a custom cellBackgroundColorFunction on the column and if so, it returns the result of this function</li>
	     * <li>Next, it checks to see if there is a custom rowBackgroundColorFunction on the level and if so, it returns the result of this function</li>
	     * <li>Next, it checks to see if there rowInfo's data object is in the errors collection of the grid, and if so, it return the value of the errorBackgroundColor property.</li>
	     * <li>Next, it checks to see if there enableEditRowHighlight is true amd this row is in edit mode, then it returns the value of the editItemColors style property.</li>
	     * <li>Next, it checks to see if there is a value for the currentBackgroundColors property (based upon rollover) and if so returns that.
	     * The currentBackgroundColors property is a result of the grid.highlightRow method.
	     * <ul>
	     * <li>If enableActiveCellHighlight=true uses the value of the activeCellColor style.</li>
	     * <li>Else, uses the value of the rollOverColor style property.</li>
	     * </ul>
	     * </li>
	     * <li>Next, it checks to see if the row is selected (row selection mode) or cell is selected (cell selection mode) and if so, returns selectionColor property.</li>
	     * <li>Next, it checks to see if a backgroundColor property is specified on the associated column and if so, returns the value of this property.</li>
	     * <li>Finally, it uses the alternatingItemColors array and return its 0th or 1st index based upton the rowInfo.rowPositionInfo.rowIndex.</li>
	     * </ul>
	     */
	    static getBackgroundColors(cell: any): any;
	    /**
	     * Draws the borders of the given cell. Each cell in Ultimate will draw its own background
	     * and border. This method will use the evaluated results of a number of properties on the cell
	     * object to calculate the color, width, and visibility of the border associated with this cell.
	     * <ul>
	     * <li>First, it checks to see if the grid.hasErrors evaluates to true. If it does, the nit checks to
	     * see if the cell.rowInfo.getData() object associated with this cell is within the error collection.
	     * If so, it will use the result of the errorBorderColor style property to figure out the color
	     * of the border for this cell. </li>
	     * <li>Next, it checks to see if there is a cellBorderFunction defined. If there is one, it will just
	     * pass the cell to the given cellBorderFunction and if this function returns false, this method
	     * performs no additional processing and returns.</li>
	     * <li>Next, if the cell's hasHorizontalGridLines evaulates to true, this method then uses the results
	     * of horizontalGridLineThickness, horizontalGridLineColor property to draw a bottomn border</li>
	     * <li>Next, if the cell's drawTopBorder evaulates to true, this method then uses the results
	     * of horizontalGridLineThickness, horizontalGridLineColor property to draw a top border.</li>
	     * <li>Finally, it calls the drawRightBorder method on the cell.</li>
	     * </ul>
	     */
	    static drawBorders(cell: any): void;
	    /**
	     * Returns the value of the given style property based on the following logic:
	     * <ul>
	     * <li> If there is a column associated with this cell, and there is a property in the styleOverrides  collection of the column with styleProp
	     * name, returns the value of that property from styleOverrides</li>
	     * <li> If there is a column, calls the getStyleValue method on that column (which checkes to see if a there is a value for this style property
	     * in the column, return that, else if in the level, return that, else if in the grid, return that). The idea being that
	     * you can define a property at the highest possible container (the grid) or one below (at the level) or one below (at the column)</li>
	     * </ul>
	     */
	    static getStyleValue(cell: any, styleProp: any): any;
	    /**
	     * Draws the right border for this cell.
	     * There are a few rules on basis of which a right (or a left) border is drawn on a cell.
	     * <ul>
	     * <li>First, if the cell is a Pager cell, no right border is drawn, since the pager shares its left and right border with the grid.</li>
	     * <li>Second, if the cell has no vertical gridlines, no border is drawn.</li>
	     * <li>Else, if the cell has a column and its right locked, then a left border is drawn.</li>
	     * </ul>
	     */
	    static drawRightBorder(cell: any): void;
	    /**
	     * @copy com.flexicious.nestedtreedatagrid.interfaces.IFlexDataGridCell#refreshCell
	     */
	    static refreshCell(cell: any): void;
	    /**
	     * Given a renderer, sets the size on basis of whether or not there are vertical and horizotnal gridlines .
	     * If there are vertical gridlines, sets the width to width minus verticalGridLineThickness
	     * If there are vertical gridlines, sets the height to width minus horizontalGridLineThickness
	     */
	    static setRendererSize(cellRenderer: any, w: any, h: any): void;
	    /**
	     * If there is a value for the prefix parameter, capitalizes the first word of the val parameter and returns it
	     */
	    static capitalizeFirstLetterIfPrefix(prefix: any, val: any): any;
	    /**
	     * Capitalizes the first character of the passed in string.
	     */
	    static doCap(val: any): any;
	    /**
	     * This method is responsible for initializing the checkbox renderer for both the header and data cells.
	     * It performns the following tasks
	     * <ul>
	     * <li>First, it will set the radio button mode of the associated TriStateCheckBox to true if col.radioButtonMode or level.enableSingleSelect is set to true </li>
	     * <li>Next, if the grid.enableSelectionExclusion flag is set to true, it will set the selected state of the associated TriStateCheckBox to the result of the getCheckBoxStateBasedOnExclusion method of the level</li>
	     * <li>Next, if the grid.enableSelectionExclusion flag is set to false (default),
	     * it will set the selected state of the associated TriStateCheckBox based upon the following logic (if enableTriStateCheckBox=true):
	     * <ul>
	     * 	<li>If the associated rowData object is in the selected objects collection of the level, sets it to checked</li>
	     * 	<li>If any of the children the associated rowData object are selected, sets it to middle</li>
	     * 	<li>Else sets it to unchecked</li>
	     * </ul>
	     * </li>
	     * <li>Finally, if the enableLabelAndCheckBox flag is set to true on the column, this method will apply the result of the columns itemToLabel function
	     * to the label property of the checkbox</li>
	     * </ul>
	     */
	    static initializeCheckBoxRenderer(cell: any, level: any): void;
	    /**
	     * If the cell.backgroundColors is an array, returns a string join using a comma.
	     * Else, returns the result of ExtendedUIUtils.getColorName on it.
	     */
	    static getBackGroundColorString(cell: any): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/utils/PrintExportOptions' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Stores user selection for records to print or to export. Only applicable
	 * when the filterPageSortMode of the grid is set to server,
	 * and the user requests to print all pages or specific pages
	 * of data that are not currently loaded.
	 * @return
	 * @constructor
	 * @class PrintExportOptions
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class PrintExportOptions extends TypedObject {
	    constructor();
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/utils/Rectangle' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 *
	 * @class Rectangle
	 * @param [x]
	 * @param [y]
	 * @param [w]
	 * @param [h]
	 * @constructor
	 */
	export default class Rectangle extends TypedObject {
	    constructor(x: any, y: any, w: any, h: any);
	    getClassNames(): string;
	    getX(): any;
	    setX(val: any): void;
	    getY(): any;
	    setY(val: any): void;
	    getWidth(): any;
	    setWidth(val: any): void;
	    getHeight(): any;
	    setHeight(val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/CellInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * An object that represents information about a cell.
	 * @constructor
	 * @class CellInfo
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class CellInfo extends TypedObject {
	    constructor(rowData: any, column: any);
	    /**
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    getColumn(): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/ChangeInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A Class that holds row and column information
	 * @constructor
	 * @class ChangeInfo
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class ChangeInfo extends TypedObject {
	    constructor(changedItem: any, changeLevelNestDepth: any, changedProperty: any, previousValue: any, newValue: any, changeType: any);
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): any[];
	    /**
	     * Creates a human readable string out of the given ChangeInfo object.
	     * @return {String}
	     */
	    toString(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/ComponentAdditionResult' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Creates an instance of ComponentAdditionResult.
	 * @constructor
	 * @class ComponentAdditionResult
	 */
	export default class ComponentAdditionResult extends TypedObject {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/ComponentInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Creates an instance of ComponentInfo.
	 * @param {FlexDataGridCell} component
	 * @param {Number} x
	 * @param {RowInfo} row
	 * @constructor
	 * @class ComponentInfo
	 */
	export default class ComponentInfo extends TypedObject {
	    constructor(component: any, x: any, row: any);
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @return {int}
	     */
	    getColIndex(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLocked(): any;
	    /**
	     *If left locked, returns X, if right locked returns leftLockedWidth+unlockedWidth+x
	     * if unlocked returns leftLockedX + x
	     @return {Boolean}
	     */
	    getPerceivedX(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsRightLocked(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsLeftLocked(): any;
	    /**
	     * Returns true if we are a data cell or if we area a chrome cell
	     * at a nest depth of greater than 1. These cells are all drawn in the
	     * content area, hence have to scroll
	     */
	    getIsContentArea(): any;
	    /**
	     *
	     * @return {Number}
	     */
	    getX(): any;
	    /**
	     *
	     * @param val
	     */
	    setX(val: any): void;
	    /**
	     *
	     * @return {Number}
	     */
	    getY(): any;
	    /**
	     *
	     * @param val
	     */
	    setY(val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/InsertionLocationInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Creates an instance of InsertionLocationInfo.
	 * @constructor
	 * @class InsertionLocationInfo
	 */
	export default class InsertionLocationInfo extends TypedObject {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @param row
	     */
	    nextChromeRow(row: any): void;
	    /**
	     * handle reset
	     */
	    reset(): void;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/ItemLoadInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * In lazy loaded grids, stores information about which items
	 * are being loaded or have been loaded.
	 * @constructor
	 * @class ItemLoadInfo
	 * @namespace flexiciousNmsp
	 *
	 * @param item
	 * @param level
	 * @param hasLoaded
	 */
	export default class ItemLoadInfo extends TypedObject {
	    constructor(item: any, level: any, hasLoaded: any);
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @param compare
	     * @param levelToCompare
	     * @param useSelectedKeyField
	     * @return {Boolean}
	     */
	    isEqual(compare: any, levelToCompare: any, useSelectedKeyField: any): boolean;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/ItemPositionInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 *A class that stores information about what page an
	 * item exists on, at what level.
	 * @constructor
	 * @class ItemPositionInfo
	 * @namespace flexiciousNmsp
	 *
	 * @param item
	 * @param level
	 * @param pageIndex
	 * @param itemindex
	 */
	export default class ItemPositionInfo extends TypedObject {
	    constructor(item: any, level: any, pageIndex: any, itemindex: any);
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/LevelSelectionInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Support for selection based on exclusion. In scenarios where you have lazy loaded grids, selection cascade and select all will
	 * simply set flags on the selectionInfo object. The selectedObjects and selectedKeys no longer contain references to data that is selected
	 * Instead, they contain the items that the user explicitly selected. unSelectedObjects will contain items that the user explicitly unselected.
	 * This helps maintain selection across very large lazy loaded datasets. When you set the enableSelectionExclusion flag to true, use the selectionInfo object to
	 * access the selection (or build a query on the server) to identify the objects user selected. The selectionInfo object is a simple list of LevelSelectionInfo objects,
	 *  which contains explicitly selected and unselected objects, which can then be used to construct a query on the server as to what the selection on the client was.
	 * @constructor
	 * @class LevelSelectionInfo
	 * @namespace flexiciousNmsp
	 */
	export default class LevelSelectionInfo extends TypedObject {
	    constructor();
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/RowInfo' {
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * @constructor
	 * @class RowInfo
	 * @namespace flexiciousNmsp
	 */
	export default class RowInfo extends EventDispatcher {
	    constructor(height: any, y: any, grid: any);
	    /**
	     *
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    /**
	     *
	     * @return {Object}
	     */
	    getData(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsHeaderRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsColumnGroupRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsFooterRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsPagerRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsFilterRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsRendererRow(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsFillRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsDataRow(): boolean;
	    /**
	     * Returns true if we are a data cell or if we area a chrome cell
	     * at a nest depth of greater than 1. These cells are all drawn in the
	     * content area, hence have to scroll
	     @return {Boolean|*|Boolean}
	     */
	    getIsContentArea(): boolean;
	    /**
	     * Returns true for Header, footer, Pager and renderer rows.
	     @return {Boolean}
	     */
	    getIsChromeRow(): boolean;
	    /**
	     * Returns true for Header, Data and Footer rows,where cells map directly to columns
	     @return {Boolean}
	     */
	    getIsColumnBased(): boolean;
	    getName(): any;
	    /**
	     *
	     * @param other
	     * @return {Boolean}
	     */
	    isSimilarTo(other: any): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    paddingExists(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    scrollbarPadExists(): any;
	    /**
	     *
	     * @return {Array}
	     */
	    getInnerCells(): any[];
	    /**
	     *
	     * @return {Boolean}
	     */
	    disclosureExists(): any;
	    /**
	     *
	     * @return {Boolean}
	     */
	    rightLockedExists(): boolean;
	    /**
	     *
	     * @param col
	     * @return {Boolean}
	     */
	    columnCellExists(col: any): boolean;
	    /**
	     *
	     * @param col
	     * @return {Boolean}
	     */
	    columnGroupCellExists(col: any): boolean;
	    /**
	     * Gets the component info object for the specified column
	     * @param col
	     * @return {*}
	     */
	    getCellForColumnGroup(col: any): any;
	    /**
	     * Gets the first IExpandCollapseComponent
	     * @return {*}
	     */
	    getExpandCollapseCell(): any;
	    /**
	     * Gets the component info object for the specified column
	     * @param col
	     * @return {*}
	     */
	    getCellForColumn(col: any): any;
	    /**
	     *
	     * @return {Array}
	     */
	    getLockedCells(): any[];
	    /**
	     *
	     * @param component
	     * @param x
	     * @return {flexiciousNmsp.ComponentInfo}
	     */
	    addCell(component: any, x: any): any;
	    /**
	     *
	     * @param comp
	     */
	    removeCell(comp: any): void;
	    /**
	     * Reuse an existing row.
	     * @param rowPos
	     * @param setHt
	     */
	    setRowPositionInfo(rowPos: any, setHt: any): void;
	    forceUpdate(): void;
	    /**
	     *
	     * @param showHide
	     */
	    showHide(showHide: any): void;
	    /**
	     *  handle invalidatecells
	     */
	    invalidateCells(): void;
	    /**
	     *
	     * @return {int}
	     */
	    getRowIndex(): any;
	    /**
	     *
	     * @param grid
	     * @return {int}
	     */
	    getColumnGroupDepth(grid: any): any;
	    /**
	     *
	     * @param col
	     * @return {Number}
	     */
	    getMaxCellHeight(col: any): any;
	    /**
	     *
	     * @return {ArrayCollection}
	     */
	    getFilterArguments(): any;
	    /**
	     * Registers the IFilter control in our list.
	     * @param iFilterControl     A control that implements IFilterControl
	     */
	    registerIFilterControl(iFilterControl: any): void;
	    /**
	     * Registers the IFilter control in our list.
	     * @param iFilterControl     A control that implements IFilterControl
	     */
	    unRegisterIFilterControl(iFilterControl: any): void;
	    /**
	     * Clears all the filters
	     */
	    clearFilter(): void;
	    /**
	     * process all the filters.
	     */
	    processFilter(): void;
	    /**
	     * Used to set the initial value of the filter.
	     * @param column        The column to set filter for
	     * @param value            The value to set
	     */
	    setFilterValue(column: any, value: any): void;
	    /**
	     * @param fld    The string to match the searchField property of the filter control with.
	     * @return         True if focus was set, false if otherwise.
	     * Focus may not be set if the given search field does not exist, <br/>
	     * or if the filter control for the given search field does not  <br/>
	     * implement IFocusManagerComponent.
	     */
	    setFilterFocus(fld: any): any;
	    /**
	     * Used to set the initial value of the filter.
	     * @param column
	     * @return {Object}
	     */
	    getFilterValue(column: any): any;
	    /**
	     * Returns true if the container has a filter control
	     * that is bound to the specified column.
	     * @param column
	     * @return {Boolean}
	     */
	    hasField(column: any): any;
	    /**
	     * handle kill
	     */
	    kill(): void;
	    /**
	     *
	     * @return {Number}
	     */
	    getWidth(): any;
	    /**
	     *
	     * @param val
	     * @return {Number}
	     */
	    setWidth(val: any): any;
	    /**
	     *
	     * @return {Number}
	     */
	    getHeight(): any;
	    /**
	     *
	     * @param val
	     * @return {Number}
	     */
	    setHeight(val: any): any;
	    /**
	     *
	     * @param val
	     * @return {Number}
	     */
	    setY(val: any): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/RowPositionInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 *
	 * Internal class used to keep track of the overall grid rows. (Not just the visible ones).
	 * @param rowData
	 * @param rowIndex
	 * @param verticalPosition
	 * @param rowHeight
	 * @param level
	 * @param rowType
	 * @constructor
	 * @class RowPositionInfo
	 */
	export default class RowPositionInfo extends TypedObject {
	    constructor(rowData: any, rowIndex: any, verticalPosition: any, rowHeight: any, level: any, rowType: any);
	    /**
	     *
	     * @return {String}
	     */
	    getClassNames(): string;
	    kill(): void;
	    /**
	     *
	     * @param grid
	     * @return {*}
	     */
	    getLevel(grid: any): any;
	    /**
	     *
	     * @return {Number}
	     */
	    getRowIndex(): number;
	    /**
	     *
	     * @param val
	     */
	    setRowIndex(val: any): void;
	    /**
	     *
	     * @param val
	     */
	    setRowHeight(val: any): void;
	    /**
	     *
	     * @return {Number}
	     */
	    getVerticalPosition(): number;
	    /**
	     *
	     * @param val
	     */
	    setVerticalPosition(val: any): void;
	    /**
	     *
	     * @return {Number}
	     */
	    getRowHeight(): number;
	    /**
	     *
	     * @return {Number}
	     */
	    getRowType(): number;
	    /**
	     *
	     * @return {Number}
	     */
	    getLevelNestDepth(): number;
	    /**
	     *
	     * @return {*}
	     */
	    getRowNestlevel(): number;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsRendererRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsDataRow(): boolean;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getIsHeaderRow(): boolean;
	    /**
	     *
	     * @return {Number}
	     */
	    getVerticalPositionPlusHeight(): number;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/SelectionInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 *
	 * @constructor
	 * @class SelectionInfo
	 */
	export default class SelectionInfo extends TypedObject {
	    constructor();
	    /**
	    *
	    * @return {String}
	    */
	    getClassNames(): string;
	    /**
	     *
	     * @return {String}
	     */
	    toString(): string;
	    /**
	     *
	     * @return {Boolean}
	     */
	    getHasAnySelections(): boolean;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/SortInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 *
	 * @param sortCol
	 * @param sortAscending
	 * @constructor
	 * @class SortInfo
	 */
	export default class SortInfo extends TypedObject {
	    constructor(sortCol: any, sortAscending: any);
	    /**
	     *
	     * @return {String}
	     * @property getClassNames

	     */
	    getClassNames(): string;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/ToolbarAction' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A class that represents a custom toolbar action.
	 *
	 * @param [name]     Name of the toolbar action
	 * @param [level]    Nest Depth of the level to enable the toolbar action for. Nest Depths Start at 1. Use -1 for all levels.
	 * @param [code]    The Code associated with the tool bar action, not required.
	 * @param [tooltip]    The hover over tooltip when the user hovers over the image specified by the icon url
	 * @param [iconUrl]    The image to use for the toolbar action.
	 * @param [seperatorBefore]    Whether or not to draw a separator before the toolbar action
	 * @param [seperatorAfter]    Whether or not to draw a separator after the toolbar action
	 *
	 * @class ToolbarAction
	 * @constructor
	 */
	export default class ToolbarAction extends TypedObject {
	    constructor(name: any, level: any, code: any, tooltip: any, iconUrl: any, seperatorBefore: any, seperatorAfter: any, requiresSelection: any, requiresSingleSelection: any);
	    getClassNames(): string;
	    /**
	     * Returns true if type!=seperator and does not have subActions
	     */
	    getIsRegularAction(): boolean;
	    /**
	     * Returns true if type!=seperator and has subActions
	     */
	    getIsDropdownAction(): boolean;
	    /**
	     * Returns true if type==seperator
	     */
	    getIsSeparator(): boolean;
	    /**
	     * For hierarchical menu support
	     * @return
	     */
	    getChildren(): any;
	    /**
	     *
	     */
	    getLabel(): any;
	    static create(name: any, callback: any, closeDialog: any): any;
	}

}
declare module 'flxs-react-datagrid/js/flexgrid/valueobjects/VirtualScrollLoadInfo' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * When grid.enableVirtualScroll=true, the grid dispatches a virtualScroll event when the grid scrolls.
	 * This event contains a recordsToLoad array, which contains an series of VirtualScrollLoadInfo records.
	 * This provides the application a list of record indexes to load, and which levels to load them at.
	 *
	 * In flat grids, the FlexDataGridVirtualScrollEvent.recordsToLoad will always contain a list of VirtualScrollLoadInfo records were level=1.
	 * For nested grids, depending on where the user scrolls and which items are open, you could get a list of records from multiple levels,
	 * for example. Records 1-3 from level 1, All children of record 3 from level 2, and then Record 4-10 from level 1.
	 *
	 * Setting enableVirtualScroll requires that you specify childrenCountField as well as selectedKeyField.
	 * Additionally, enableVirtualScroll also requires that you set filterPageSortMode=server and
	 * itemLoadMode=server. Finally, virtual scroll does not work with variableRowHeights.
	 * @class VirtualScrollLoadInfo
	 * @constructor
	 */
	export default class VirtualScrollLoadInfo extends TypedObject {
	    constructor(level: any, recordIndex: any, verticalScrollPosition: any, itemHeight: any, item: any, parent: any, rowType: any);
	    getClassNames(): string;
	    /**
	     * The nest depth of the level
	     */
	    getLevelNestDepth(): any;
	    toString(): string;
	    getItemArea(): any;
	    isParentOf(child: any): boolean;
	    getVerticalScrollPosition(): any;
	    setVerticalScrollPosition(val: any): void;
	    setRowType(val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/table/ReactDataGrid' {
	import FlexDataGrid from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGrid';
	/**
	 * The ReactDataGrid class is the main component intended to be consumed by application developers to embed the
	 * Flexicious React DataGrid component in their React Apps. It ultimately inherits from React.Component base class. The
	 * immediate super class of this class is the {@link FlexDataGrid} class, which contains most of the grid API.
	 *
	 * In order to make the Flexicious React DataGrid (base class of this class) build purely from JSX markup,
	 * This class provides a hook into JSX parsing (making its children not visual DOM children, but actually
	 * just configuration)
	 *
	 * This class will also be the actual DOM node that renders the REACT datagrid - it will contain all the
	 * scrolling containers (pager, header, filter, body and footer) - which in turn will contain instances of
	 * {@link ReactDataGridCellContainer} classes which will in turn contain the actual renderers (div's)
	 *
	 * The children of this class in markup will be {@link ReactDataGridColumn} or {@link ReactDataGridColumnGroup} or {@link ReactDataGridColumnLevel}
	 * classes. They are config classes, and are ignored for rendering purposes - their only use is to pass the
	 * configuration of the grid into the base class for this class ({@link FlexDataGrid})
	 *
	 * For a complete list of properties and methods, please refer to the following classes:
	 * {@link FlexDataGrid} (base class of this class, which eventually inherits from React.Component)
	 * {@link FlexDataGridColumnLevel} (Please read the Introduction section of the user guide to understand what a level means)
	 * {@link FlexDataGridColumnGroup} (For grouped columns)
	 * {@link FlexDataGridColumn} (The actual column object within the grid)    .
	 *
	 * For a list of examples, review http://reactdatagrid.com/demo/ - Each example has a "Source Code" section where you
	 * can review sample configurations.
	 *
	 * Here is the source code for all running examples:
	 * https://github.com/flexicious/react-datagrid
	 *
	 * Here is a video that demonstrates how to quickly get up and running with the React DataGrid:
	 * https://www.youtube.com/watch?v=sO3o0zG93fM
	 *
	 * For a simple example:
	 *  https://github.com/flexicious/react-datagrid-getting-started
	 *
	 * Running simple example:
	 *  https://www.webpackbin.com/bins/-Kj9JhCTXC3CghFUfRtQ
	 *
	 * For a example with the base adapter [CSS Styles, Popups, etc included] included see
	 *  https://github.com/flexicious/react-datagrid-with-styles
	 *
	 * React-Redux example code:
	 *  https://github.com/flexicious/redux-react-datagrid
	 *
	 * React-Redux example running:
	 *  https://www.webpackbin.com/bins/-Kl_rVyde2vHvB1s4gmf
	 *
	 * Typical markup looks like:
	 *  @example
	 * <ReactDataGrid dataProvider={this.state.dataProvider} width={"100%"} height={300} ... [See {FlexDataGrid} class for full list of properties]>
	 *      <ReactDataGridColumnLevel [See { FlexDataGridColumnLevel} for full list of properties - note that this is not required, you can directly
	 *                                      list { ReactDataGridColumn} nodes here, a level is only needed for hierarchical grids where each level
	 *                                      of hierarchy may potentially have different sets of columns.]>
	 *            <ReactDataGridColumnGroup ... [See { FlexDataGridColumnGroup} class for full list of properties]>
	 *                 <ReactDataGridColumn  ... [See { FlexDataGridColumn} class for full list of properties]/>
	 *                 <ReactDataGridColumn  ... [See { FlexDataGridColumn} class for full list of properties]/>
	 *                 <ReactDataGridColumn  ... [See { FlexDataGridColumn} class for full list of properties]/>
	 *                 <ReactDataGridColumn  ... [See { FlexDataGridColumn} class for full list of properties]/>
	 *            </ReactDataGridColumnGroup>
	 *      </ReactDataGridColumnLevel>
	 * </ReactDataGrid>
	 *
	 * Complete Example:
	 * @example
	 *      <ReactDataGrid  width={"100%"} ref={(grid) => { this.grid = grid; }} enablePrint enablePreferencePersistence enableExport enableCopy enableFilters enableFooters initialSortField="title" preferencePersistenceKey="variableRowHeight" initialSortAscending forcePagerRow variableRowHeight
	 *          horizontalScrollPolicy="off">
	 *            <ReactDataGridColumn dataField="id" headerText="ID" filterControl="TextInput" filterOperation="Contains" columnWidthMode="fitToContent" />
	 *            <ReactDataGridColumn dataField="title" headerText="Title" filterControl="TextInput" columnWidthMode="fitToContent" footerLabel="Count:" footerOperation="count" footerAlign="center" filterOperation="Contains" />
	 *            <ReactDataGridColumn dataField="description" headerText="Description" wordWrap />
	 *            <ReactDataGridColumn dataField="genre" headerText="Genre" filterControl="MultiSelectComboBox" filterComboBoxBuildFromGrid columnWidthMode="fitToContent" />
	 *            <ReactDataGridColumn dataField="price" headerText="Price" filterControl="NumericRangeBox" columnWidthMode="fixed" width="100" footerLabel="Avg:" footerOperation="average" footerAlign="center" footerOperationPrecision={2} footerFormatter={flexiciousNmsp.CurrencyFormatter} labelFunction={UIUtils.dataGridFormatCurrencyLabelFunction} />
	 *              <ReactDataGridColumn dataField="publish_date" headerText="Publish Date" filterControl="DateComboBox" columnWidthMode="fitToContent" filterConverterFunction={this.convertDate} labelFunction={this.dataGridFormatDateLabelFunction} />
	 *      </ReactDataGrid>
	 */
	export default class ReactDataGrid extends FlexDataGrid {
	    constructor(props: any, arg1: any, arg2: any);
	    getAllChildren(): any;
	    getClassNames(): string[];
	}

}
declare module 'flxs-react-datagrid/js/table/ReactDataGridColumn' {
	import React from 'react';
	/**
	 * Configuration for the {@link ReactDataGridColumn} - this is not a visual component, just container
	 * for properties for the corresponding {@link FlexDataGridColumn} object.
	 *
	 * For more details, refer to the documentation of the {@link ReactDataGrid} class.
	 */
	export default class ReactDataGridColumn extends React.Component {
	    static process(grid: any, level: any, props: any, group: any): any;
	}

}
declare module 'flxs-react-datagrid/js/table/ReactDataGridColumnGroup' {
	import React from 'react';
	/**
	 * Configuration for the ReactDataGridColumnGroup - this is not a visual component, just container
	 * for properties for the corresponding {@link FlexDataGridColumnGroup} object.
	 *
	 * For more details, refer to the documentation of the {@link ReactDataGrid} class.
	 */
	export default class ReactDataGridColumnGroup extends React.Component {
	    static process(grid: any, level: any, props: any, parentGroup: any): any;
	}

}
declare module 'flxs-react-datagrid/js/table/ReactDataGridColumnLevel' {
	import React from 'react';
	/**
	 * Configuration for the ReactDataGridColumnLevel - this is not a visual component, just container
	 * for properties for the corresponding {@link FlexDataGridColumnLevel} object.
	 *
	 * For more details, refer to the documentation of the {@link ReactDataGrid} class.
	 */
	export default class ReactDataGridColumnLevel extends React.Component {
	    static process(grid: any, parentLevel: any, props: any): void;
	}

}
declare module 'flxs-react-datagrid/js/table/psuedoscroll/ReactDataGridPsuedoScroll' {
	import ReactDataGrid from 'flxs-react-datagrid/js/table/ReactDataGrid';
	/**
	 * Specialized extension of the FlexDataGrid that is used for psuedo scroll. Hides the
	 * vertical scrollbar, and shows only what can be displayed on the page given the
	 * height constraints of the page being printed to.
	 * @constructor
	 * @namespace flexiciousNmsp.print
	 * @extends FlexDataGrid
	 */
	export default class ReactDataGridPsuedoScroll extends ReactDataGrid {
	    constructor(props: any, arg1: any, arg2: any);
	    getClassNames(): string[];
	    /**
	     * We create a specialized body container
	     * @return
	        *
	     */
	    createBodyContainer(): any;
	    synchronizeLockedVerticalScroll(): void;
	    /**
	     * @method placeComponent
	     */
	    placeComponent(comp: any): void;
	    /**
	    * Transfers mouse wheel events over the locked left and right sections to scroll events on the body container,
	    * so we scroll when the user mouse wheels over the left or right locked containers.
	    * @method onMouseWheel
	    * @param event
	    */
	    onMouseWheel(event: any): void;
	    buildScrollEvent(scrollpos: any): any;
	}

}
declare module 'flxs-react-datagrid/js/table/psuedoscroll/ReactDataGridPsuedoScrollBodyContainer' {
	import FlexDataGridVirtualBodyContainer from 'flxs-react-datagrid/js/flexgrid/grids/FlexDataGridVirtualBodyContainer';
	/**
	 * An object that represents information about a cell.
	 * @constructor
	 * @class CellInfo
	 * @namespace flexiciousNmsp
	 * @extends TypedObject
	 */
	export default class ReactDataGridPsuedoScrollBodyContainer extends FlexDataGridVirtualBodyContainer {
	    constructor(grid: any);
	    componentDidMountCustom(): void;
	    /**
	     * @return {Array}
	     */
	    getClassNames(): string[];
	    setVerticalScrollPolicy(policy: any): void;
	    setVerticalScrollPosition(pos: any): void;
	    getVerticalScrollPosition(): any;
	    checkScrollChange(prevCalc: any): void;
	    onExternalContainerScroll(evt: any, noThrottle: any): void;
	    recycleNoScroll(level: any, scrollDown: any, scrollDelta: any, scrolling: any): void;
	    removeMatchSticks(): void;
	    addMatchSticks(p: any): void;
	    addMatchStick(p: any): void;
	    /**
	     * Gets the scrollLeft
	     */
	    getMaxVerticalScrollPosition(): number;
	    /**
	     * Scrolls to a row that is already drawn.
	     */
	    scrollToExistingRow(vsp: any, scrollDown: any): void;
	    recycle(level: any, scrollDown: any, scrollDelta: any, scrolling: any): void;
	    drawRows(forceFiller: any): void;
	    handleArrowKey(cell: any, keyCode: any, triggerEvent: any): any;
	}

}
declare module 'flxs-react-datagrid/js/table/psuedoscroll/ScrollableDiv' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A ScrollableDiv that which can be used within the filtering/binding infrastructure.
	 * @class ScrollableDiv
	 * @constructor
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class ScrollableDiv extends UIComponent {
	    constructor(tag: any);
	    componentDidMountCustom(): void;
	    componentWillUnmountCustom(): void;
	    scrollCallBack(e: any): any;
	}

}
declare module 'flxs-react-datagrid/js/utils/ClassFactory' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A generator class that instantiates new classes of type classConstruct.
	 * @constructor
	 * @class ClassFactory
	 * @namespace flexiciousNmsp
	 *
	 * @param classConstruct
	 * @param [props]
	 * @param [passPropertiesToConstructor]
	 *
	 */
	export default class ClassFactory extends TypedObject {
	    constructor(classConstruct: any, props: any, passPropertiesToConstructor: any);
	    getClassNames(): any[];
	    /**
	     * Creates a new instance of the object specified by the class construct
	     * @return {*}
	     */
	    newInstance(props: any, passPropertiesIfReactComponent: any): any;
	}

}
declare module 'flxs-react-datagrid/js/utils/Constants' {
	/**
	 * A Class that holds constant values
	 * @constructor
	 * @class Constants
	 * @namespace flexiciousNmsp
	 */
	export default class Constants {
	    static isMobileBrowser(): boolean;
	}

}
declare module 'flxs-react-datagrid/js/utils/CurrencyFormatter' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A CurrencyFormatter
	 * @constructor
	 * @class CurrencyFormatter
	 * @namespace flexiciousNmsp
	 */
	export default class CurrencyFormatter extends TypedObject {
	    constructor();
	    getClassNames(): string[];
	    /**
	     * format the currency value
	     * @param value
	     * @return the formatted currency value
	     */
	    format(value: any): any;
	}

}
declare module 'flxs-react-datagrid/js/utils/DateFormatter' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A wrapper around date formatting functions from various underlying libraries DateFormatter
	 * @constructor
	 * @class DateFormatter
	 * @namespace flexiciousNmsp
	 */
	export default class DateFormatter extends TypedObject {
	    getClassNames(): string[];
	    /**
	     * format a date
	     * @param value
	     * @return {Object}
	     */
	    format(value: any): any;
	    /**
	     * Parse a date string into an object, changes - into
	     * @param {Object} value
	     * @return {Object}
	     */
	    parse(value: any): any;
	}

}
declare module 'flxs-react-datagrid/js/utils/DateRange' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	     * Given a date range, sets the startDate and endDate values to the appropraite values.
	     * @param dateRangeType	One of the DATE_RANGE constants
	     * @param startDate		Start Date of the custom date range. Only required where dateRangeType=DateRange.DATE_RANGE_CUSTOM
	     * @param endDate		End Date of the custom date range. Only required where dateRangeType=DateRange.DATE_RANGE_CUSTOM
	     * @constructor
	     * @class DateRange
	     */
	export default class DateRange extends TypedObject {
	    constructor(dateRangeType: any, startDate: any, endDate: any);
	    getClassNames(): string;
	    /**
	     * A Function that takes a date range code, and a initialization function.
	     * The code is what shows up in the list of dropdowns. The initFunction
	     * is resposible for initializing the date range object, which should populate
	     * its start and end dates. The initFunction should take a dateRange object,
	     * and return that object with its start and end date populated.
	     *
	     * @param {String} rangeName
	     * @param {Function} initFunction
	     */
	    static registerDateRange(rangeName: any, initFunction: any): void;
	    /**
	     * Given a quarter, returns the date at the start of the quarter
	     * @param {number} year
	     * @param {number} quarter
	     */
	    static getStartOfQuarter(year: any, quarter: any): Date;
	    /**
	     * Given a quarter, returns the date at the end of the quarter
	     * @param {number} year
	     * @param {number} quarter
	     */
	    static getEndOfQuarter(year: any, quarter: any): Date;
	}

}
declare module 'flxs-react-datagrid/js/utils/DateUtils' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	export default class DateUtils extends TypedObject {
	    getClassNames(): string;
	    /**
	     * Formats a date into a certain date/time format
	     *
	     * @param date    The date to format
	     * @param mask    How the date should be formatted
	     *
	     * @return        A formatted date
	     */
	    static dateTimeFormat(date: any, mask: any): any;
	    /**
	     * Formats a time into a certain time format
	     *
	     * @param date    The date to format
	     * @param mask    How the date should be formatted
	     *
	     * @return        A formatted time
	     */
	    static getTimeFormat(date: any, mask: any): any;
	    /**
	     * Formats a date into a certain date format
	     *
	     * @param date    The date to format
	     * @param mask    How the date should be formatted
	     *
	     * @return        A formatted date
	     */
	    static formatString(date: any, mask: any): any;
	    /**
	     * Adds the specified number of "date parts" to a date, e.g. 6 days
	     *
	     * @param datePart    The part of the date that will be added
	     * @param number    The total number of "dateParts" to add to the date
	     * @param date        The date on which to add
	     *
	     * @return            The new date
	     */
	    static dateAdd(datePart: any, number: any, date: any): Date;
	    /**
	     * Gets the day of the week
	     *
	     * @param date    The date for which to get the day of the week
	     *
	     * @return        A number representing the day of the week, 0 to 6
	     */
	    static dayOfWeek(date: any): any;
	    /**
	     * Gets the ordinal value or day of the year
	     *
	     * @param date    The date for which to get the day of the year
	     *
	     * @return        A number representing the day of the year, 1 to 365 or 366 for a leap year
	     */
	    static dayOfYear(date: any): number;
	    /**
	     * Gets the week of the year
	     *
	     * @param date    The date for which to get the week of the year
	     *
	     * @return        A number representing the week of the year, 1 to 53 ( as there are slightly more than 52 weeks of days in a year)
	     */
	    static weekOfYear(date: any): number;
	    /**
	     * Converts the day of the week to a Flex day of the week
	     *
	     * @param {Number} localDayOfWeek    The human readable day of week
	     *
	     * @return {Number}       The Flex converted day of week or 0 aka Sunday
	     */
	    static toFlexDayOfWeek(localDayOfWeek: any): number;
	    /**
	     * Gets the Xth day of the month.
	     * e.g. get the 3rd Wednesday of the month
	     *
	     * @param iteration        The iteration of the month to get e.g. 4th or Last
	     * @param strDayOfWeek    The day of the week as a string
	     * @param date            The date containing the month and year
	     *
	     * @return                The date of the xth dayOfWeek of the month
	     */
	    static dayOfWeekIterationOfMonth(iteration: any, strDayOfWeek: any, date: any): Date;
	    /**
	     * Gets the days in the month
	     *
	     * @param date    The date to check
	     *
	     * @return        The number of days in the month
	     */
	    static daysInMonth(date: any): number;
	    /**
	     * Gets the total number of dayOfWeek in the month
	     *
	     * @param strDayOfWeek    The day of week to check
	     * @param date            The date containing the month and year
	     *
	     * @return {Number}               The number of <code>strDayOfWeek</code> in that month and year
	     */
	    static totalDayOfWeekInMonth(strDayOfWeek: any, date: any): number;
	    /**
	     * Converts the month to a Flex month
	     * @method toFlexMonth
	     * @param {Number} localMonth  The human readable month
	     *
	     * @return {Number}       The Flex converted month or 0 aka January
	     */
	    static toFlexMonth(localMonth: any): number;
	    /**
	     * Determines whether a value is actually a valid date
	     *
	     * @method isDate
	     * @param {String} value    The date value
	     *
	     * @return        <code>true</code> means this is a valid date, <code>false</code> means it is not a valid date
	     */
	    static isDate(value: any): boolean;
	    /**
	     * Formats a date to the string version of the day of the week
	     *
	     * @param date    The date to format
	     *
	     * @return        A formatted day of week
	     */
	    static dayOfWeekAsString(date: any): any;
	    /**
	     * Formats a date to the numeric version of the day of the week
	     *
	     * @param strDayOfWeek    The day of week to convert
	     *
	     * @return                A formatted day of week or -1 if day not found
	     */
	    static dayOfWeekAsNumber(strDayOfWeek: any): any;
	    /**
	     * Formats a date to the string version of the month
	     *
	     * @param date    The date to format
	     *
	     * @return        A formatted month
	     */
	    static monthAsString(date: any): any;
	    /**
	     * Formats a month to the numeric version of the month
	     *
	     * @param strMonth    The month to convert
	     *
	     * @return            A formatted month or -1 if month not found
	     */
	    static monthAsNumber(strMonth: any): any;
	    /**
	     * Gets the number of days in the year
	     *
	     * @param date    The date to check
	     *
	     * @return        The total number of days in the year
	     */
	    static daysInYear(date: any): number;
	    /**
	     * Determines whether the year is a leap year or not
	     *
	     * @param date    The date to check
	     *
	     * @return        <code>true</code> means it is a leap year, <code>false</code> means it is not a leap year.
	     */
	    static isLeapYear(date: any): boolean;
	    /**
	     * Determines the number of "dateParts" difference between 2 dates
	     *
	     * @param datePart    The part of the date that will be checked
	     * @param startDate    The starting date
	     * @param endDate    The ending date
	     *
	     * @return            The number of "dateParts" difference
	     */
	    static dateDiff(datePart: any, startDate: any, endDate: any): number;
	}

}
declare module 'flxs-react-datagrid/js/utils/Fecha' {
	/**
	 * The MIT License (MIT)

	Copyright (c) 2015 Taylor Hakes

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

	 */
	/**
	 * Parse or format dates
	 * @class fecha
	 */
	export default class fecha {
	    /***
	     * Format a date
	     * @method format
	     * @param {Date|number} dateObj
	     * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
	     * @param {string} i18nSettings
	     */
	    static format(dateObj: any, mask: any, i18nSettings: any): any;
	    /**
	     * Parse a date string into an object, changes - into /
	     * @method parse
	     * @param {string} dateStr Date string
	     * @param {string} format Date parse format
	     * @param {string} i18nSettings
	     * @returns {Date|boolean}
	     */
	    static parse(dateStr: any, format: any, i18nSettings: any): false | Date;
	}

}
declare module 'flxs-react-datagrid/js/utils/ModalPopup' {
	import UIComponent from 'flxs-react-datagrid/js/core/UIComponent';
	/**
	 * A ModalPopup that encapsulates children
	 * @class Label
	 * @constructor
	 * @namespace flexiciousNmsp
	 */
	export default class ModalPopup extends UIComponent {
	    constructor(props: any);
	    componentDidMount(): void;
	    getClassNames(): string[];
	    render(): any;
	}

}
declare module 'flxs-react-datagrid/js/utils/NumberFormatter' {
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * Number formatter
	 * @constructor
	 * @class NumberFormatter
	 */
	export default class NumberFormatter extends TypedObject {
	    constructor();
	    getClassNames(): string[];
	    format(value: any): any;
	}

}
declare module 'flxs-react-datagrid/js/utils/ObjectUtil' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 *  The ObjectUtil class is an all-static class with methods for
	 *  working with Objects within Flex.
	 *  You do not create instances of ObjectUtil;
	 *  instead you simply call static methods such as the
	 *  <code>ObjectUtil.isSimple()</code> method.
	 *
	 *  @langversion 3.0
	 *  @playerversion Flash 9
	 *  @playerversion AIR 1.1
	 *  @productversion Flex 3
	 * @constructor
	 * @class ObjectUtil
	 * @namespace
	 *
	 */
	export class ObjectUtil extends TypedObject {
	    getClassNames(): string[];
	    /**
	     *  Returns <code>true</code> if the object reference specified
	     *  is a simple data type. The simple data types include the following:
	     *  <ul>
	     *    <li><code>String</code></li>
	     *    <li><code>Number</code></li>
	     *    <li><code>uint</code></li>
	     *    <li><code>int</code></li>
	     *    <li><code>Boolean</code></li>
	     *    <li><code>Date</code></li>
	     *    <li><code>Array</code></li>
	     *  </ul>
	     *
	     *  @param value Object inspected.
	     *
	     *  @return <code>true</code> if the object specified
	     *  is one of the types above; <code>false</code> otherwise.
	     *
	     *  @langversion 3.0
	     *  @playerversion Flash 9
	     *  @playerversion AIR 1.1
	     *  @productversion Flex 3
	     */
	    static isSimple(value: any): boolean | undefined;
	    /**
	     *  Compares two numeric values.
	     *
	     *  @param a First number.
	     *
	     *  @param b Second number.
	     *
	     *  @return 0 is both numbers are NaN.
	     *  1 if only <code>a</code> is a NaN.
	     *  -1 if only <code>b</code> is a NaN.
	     *  -1 if <code>a</code> is less than <code>b</code>.
	     *  1 if <code>a</code> is greater than <code>b</code>.
	     *
	     *  @langversion 3.0
	     *  @playerversion Flash 9
	     *  @playerversion AIR 1.1
	     *  @productversion Flex 3
	     */
	    static numericCompare(a: any, b: any): 1 | -1 | 0;
	    /**
	     *  Compares two String values.
	     *
	     *  @param a First String value.
	     *
	     *  @param b Second String value.
	     *
	     *  @param caseInsensitive Specifies to perform a case insensitive compare,
	     *  <code>true</code>, or not, <code>false</code>.
	     *
	     *  @return 0 is both Strings are null.
	     *  1 if only <code>a</code> is null.
	     *  -1 if only <code>b</code> is null.
	     *  -1 if <code>a</code> precedes <code>b</code>.
	     *  1 if <code>b</code> precedes <code>a</code>.
	     *
	     *  @langversion 3.0
	     *  @playerversion Flash 9
	     *  @playerversion AIR 1.1
	     *  @productversion Flex 3
	     */
	    static stringCompare(a: any, b: any, caseInsensitive: any): any;
	    /**
	     *  Compares the two Date objects and returns an integer value
	     *  indicating if the first Date object is before, equal to,
	     *  or after the second item.
	     *
	     *  @param a Date object.
	     *
	     *  @param b Date object.
	     *
	     *  @return 0 if <code>a</code> and <code>b</code> are equal
	     *  (or both are <code>null</code>);
	     *  -1 if <code>a</code> is before <code>b</code>
	     *  (or <code>b</code> is <code>null</code>);
	     *  1 if <code>a</code> is after <code>b</code>
	     *  (or <code>a</code> is <code>null</code>).
	     *
	     *  @langversion 3.0
	     *  @playerversion Flash 9
	     *  @playerversion AIR 1.1
	     *  @productversion Flex 3
	     */
	    static dateCompare(a: any, b: any): 1 | -1 | 0;
	}

}
declare module 'flxs-react-datagrid/js/utils/Point' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A Class that holds X and Y information
	 * @constructor
	 * @class Point
	 * @namespace flexiciousNmsp
	 *
	 */
	export default class Point extends TypedObject {
	    constructor(x: any, y: any);
	    getClassNames(): any[];
	    getX(): any;
	    setX(val: any): void;
	    getY(): any;
	    setY(val: any): void;
	}

}
declare module 'flxs-react-datagrid/js/utils/Timer' {
	import EventDispatcher from 'flxs-react-datagrid/js/core/EventDispatcher';
	/**
	 * Flexicious
	 * Copyright 2011, Flexicious LLC
	 */
	/**
	 *
	 * @param delay
	 * @param [repeatCount]
	 * @constructor
	 * @class Timer
	 */
	export default class Timer extends EventDispatcher {
	    constructor(delay: any, repeatCount: any);
	    getClassNames(): string;
	    reset(): void;
	    start(): this;
	    onTimer(): void;
	    stop(): void;
	    kill(): void;
	}

}
declare module 'flxs-react-datagrid/js/utils/UIUtils' {
	import TypedObject from 'flxs-react-datagrid/js/core/TypedObject';
	/**
	 * A Utility class that contains generic functions needed in multiple
	 * places.
	 * @namespace flexiciousNmsp
	 * @class UIUtils
	 * @name UIUtils
	 *
	 */
	export default class UIUtils extends TypedObject {
	    getClassNames(): string[];
	    /**
	     * Returns property or subproperty (dot delimited) of an object <br/>
	     * @param data The source object
	     * @param property The name of the property with the path if dot-delimited
	     */
	    static getObjectProperty(data: any, property: any): any;
	    /**
	     * Parses the value of a complex property and return its String equivalent
	     * @param item the source object
	     * @param column the DataGridColumn object. Its dataField property gets the property path with name
	     */
	    static labelObjectProperty(item: any, column: any): string;
	    /**
	     * Generates single string from collection of items, delimited by delimiter
	     * @param list array of objects
	     * @param propertyName name of a property to be included, may be a complex "." delimited property name
	     * @param delimiter a delimiter between elements in the string, by default it's ", "
	     */
	    static concatenateList(list: any, propertyName: any, delimiter: any): string;
	    /**
	     * Parses the value of a complex list property, concatenating string values of all elements.
	     * To specify field name and display field name use dataField="dataField/displayPropertyName/delimiter",
	     * where "dataField" is the field name, and "displayPropertyName" is the display field of elements in the list,
	     * and "delimiter" is the delimiter string to be used (optional).
	     * @param item the source object
	     * @param column the DataGridColumn object. Its dataField property gets the property path with name
	     */
	    static labelObjectPropertyList(item: any, column: any): string;
	    /**
	     * Datagrid function to format the yes no column in a grid.
	     * @return A formatted boolean string
	     *
	     */
	    static dataGridFormatYesNoLabelFunction(item: any, dgColumn: any): "Yes" | "No";
	    /**
	     * Datagrid function to format the date column in a grid.
	     * @return A formatted date string
	     *
	     */
	    static dataGridFormatDateLabelFunction(item: any, dgColumn: any): any;
	    /**
	     * Datagrid function to format the currency column in a grid.
	     * @return A formatted currency string
	     *
	     */
	    static dataGridFormatCurrencyLabelFunction(item: any, dgColumn: any): any;
	    /**
	     * Takes in a boolean, returns a Yes or No
	     * @param val  Boolean indicator to format
	     * @return     The formatted yes or no string
	     *
	     */
	    static formatBoolean(val: any): "Yes" | "No";
	    /**
	     * Takes in a date, and returns it formatted as
	     * MM/DD/YY
	     * @param {Object} date The date to format
	     * @param {String} formatString
	     * @return     The formatted date string
	     *
	     */
	    static formatDate(date: any, formatString: any): any;
	    static getDateValue(dateStr: any, formatString: any): any;
	    /**
	     * Takes in a number, and returns it formatted as
	     * Currency
	     * @param val  The number to format
	     * @param currencySymbol
	     * @return     The formatted currency string
	     *
	     */
	    static formatCurrency(val: any, currencySymbol: any): any;
	    /**
	     * Calls add popup.
	     * @param pop
	     * @param parent
	     * @param modal
	     * @param triggerEvent - If you specify this, it will move the popup right below the mouse click
	     * @param title
	     * @param actions
	     * callbackFunctionDetail - a callback wrapper for the popup getting close.
	     *                                 it should be
	     *                                                {
	     *                                                     context : this,
	     *                                                     method : onPopupClosed. // which means this.onPopupClosed.
	     *                                                }
	     * @return
	     *
	     */
	    static addPopUp(pop: any, parent: any, modal: any, triggerEvent: any, title: any, actions: any): any;
	    static removePopUp(popup: any): void;
	    static createSettingsPopup(): any;
	    static createSaveSettingsPopup(): any;
	    static createExportPopup(): any;
	    static getDomElementIndex(parent: any, child: any): number;
	    /**
	     * Returns true if passed in object is a boolean, number or string
	     */
	    static isPrimitive(input: any): boolean;
	    /**
	     * Returns true if passed in object is a undefined or null data types.
	     */
	    static isSpecialDataType(input: any): boolean;
	    /**
	     * Returns true if passed in object is Array or Object data type
	     */
	    static isCompositeDataType(input: any): boolean;
	    /**
	     * Returns true if passed in object is Array
	     */
	    static isArray(input: any): boolean;
	    /**
	     * Returns true if passed in object is clonable
	     */
	    static isCloneable(input: any): boolean;
	    static ensureWithinView(popup: any, parent: any): void;
	    /**
	     * Returns the average of all items the specified data provider
	     * @param dataProvider
	     * @param fld
	     * @return
	     *
	     */
	    static average(dataProvider: any, fld: any): number;
	    /**
	     * If arr is XML or XMLList, returns length() else returns length;
	     */
	    static getLength(arr: any): any;
	    /**
	     * Returns the sum of all items the specified data provider
	     * @param dataProvider
	     * @param fld
	     * @return
	     *
	     */
	    static sum(dataProvider: any, fld: any): number;
	    /**
	     * Returns the minimum value in the specified data provider
	     * @param dataProvider
	     * @param fld
	     * @param comparisionType
	     * @return
	     *
	     */
	    static min(dataProvider: any, fld: any, comparisionType: any): any;
	    /**
	     * Returns the maximum value in the specified data provider
	     * @param dataProvider
	     * @param fld
	     * @param comparisionType
	     * @return
	     *
	     */
	    static max(dataProvider: any, fld: any, comparisionType: any): any;
	    /**
	     * Pastes the passed in data to the clipboard.
	     * @param strToPaste
	     * @return
	     *
	     */
	    static pasteToClipBoard(strToPaste: any): void;
	    /**
	     * Checks to see if the passed in value is a string representation of a numeric value
	     * @param str The string representation to check
	     * @return True if str is a string representation of a number value
	     *
	     */
	    static isStringNumeric(str: any): boolean;
	    /**
	     * A utility function that encapsulates the task of showing a confirmation popup.
	     * @param msg     Text string that appears in the Alert control.
	     * @param parent  Object upon which the confirm dialog centers itself.
	     * @param modal   Flag represents if this is a modal window or not
	     * @param title   Text string that appears in the title bar.
	     * @param features An array of objects having the details about the flag, class(style) and its callback function
	     *
	     */
	    static showConfirm(msg: any, parent: any, modal: any, title: any, features: any): void;
	    /**
	     * Shows a popup with an error message
	     * @param errorMessage     Text string that appears in the Alert control.
	     * @param [errorTitle]    Text string that appears in the title bar.
	     */
	    static showError(errorMessage: any, errorTitle: any): void;
	    /**
	     * Shows a popup with an informational message
	     * @param message     Text string that appears in the Alert control.
	     * @param title    Text string that appears in the title bar.
	     * @param flag   Test string which represents the type of message. e.g error
	     */
	    static showMessage(message: any, title: any, flag: any): void;
	    /**
	     *
	     * @param obj
	     *
	     */
	    static traceData(obj: any): void;
	    /**
	     *
	     */
	    static handleError(event: any): void;
	    /**
	     * Removes the supplied item from the supplied array,
	     * and returns that array
	     * @param array            The array to remove the item from
	     * @param itemToRemove    The item to remove
	     *
	     */
	    static removeFromArray(array: any, itemToRemove: any): any;
	    /**
	     * Iterates through an array to see if the toString of the "valFld" property of any of the <br/>
	     * items in the array array equals "compareVal"
	     * @param array            Array to search
	     * @param valFld        Property of the objects in the array
	     * @param compareVal    The value to compare against.
	     * @return
	     *
	     */
	    static doesArrayContainValue(array: any, valFld: any, compareVal: any): any;
	    /**
	     *
	     * Iterates through an array to see if the "toString" methods of any of the <br/>
	     * items in the a1 array equals "compareVal"
	     * @param array            Array to search
	     * @param compareVal    The value to compare against.
	     * @return The first object that matches the search criteria, null if no match
	     *
	     */
	    static doesArrayContainStringValue(array: any, compareVal: any): any;
	    /**
	     * Iterates through an array to see if the "valFld" property of any of the <br/>
	     * items in the a1 array equals "compareVal"
	     * @param array            Array to search
	     * @param valFld        Property of the objects in the array
	     * @param compareVal    The value to compare against.
	     * @return The first object that matches the search criteria, null if no match
	     *
	     */
	    static doesArrayContainObjectValue(array: any, valFld: any, compareVal: any): any;
	    /**
	     * Opens a browser popup
	     * @param url        The URL to open
	     * @param [options]    Options string, defaults to width=800,height=600,lef t=0,top=0, toolbar=No,location=No,scrollbars=Yes,status=No,resizable=No,fullscreen=No
	     * @param [useNew]    If true, creates a new window, else reuses the existing one. Defaults to true
	     *
	     */
	    static openBrowserPopup(url: any, options: any, useNew: any): Window;
	    /**
	     * Iterates through each array and returns false if either contains
	     * an element not contained within the other.
	     * @param a1
	     * @param a2
	     * @return
	     *
	     */
	    static areArraysEqual(a1: any, a2: any): boolean;
	    /**
	     * Used to create a filter renderer along with initialization properties
	     * @param renderer         Class factory to be used as the generator
	     * @param properties    Initialization properties.
	     * @return The created renderer factory
	     *
	     */
	    static createRenderer(renderer: any, properties: any): void;
	    /**
	     * Returns the top level application.
	     * @return
	     */
	    static getTopLevelApplication(): HTMLElement;
	    /**
	     * Adds a child to the provided display object.
	     * Takes into account the scenario where the parent is a Spark application.
	     * @param {flexiciousNmsp.UIComponent} parent
	     * @param {flexiciousNmsp.UIComponent} child
	     * @param {flexiciousNmsp.UIComponent} before
	     * @return
	     */
	    static addChild(parent: any, child: any, before: any): void;
	    /**
	     * remove child from parent element
	     * @param parent
	     * @param child
	     *
	     */
	    static removeChild(parent: any, child: any): void;
	    /**
	     * Given an array collection of complex objects, and a property,
	     * returns an array collection of the propertyToExtract values
	     * of each object within the array collection
	     * @param source    A list of objects that contain the property to extract
	     * @param propertyToExtract    The name of the property to extract
	     * @return An array collection of the extracted property values
	     */
	    static extractPropertyValues(source: any, propertyToExtract: any): any[];
	    /**
	     * Returns the string value of the passed in object, or if null, returns an empty string.
	     */
	    static toString(host: any): any;
	    /**
	     * Returns a specially formatted string that stores information about the
	     * type. Used by preference persistence serialization, can handle array,
	     * arraycollection and primitives.
	     */
	    static toPersistenceString(host: any): string;
	    /**
	     * Takes in a specifically formatted strings and spits out an object
	     * that was used to make that string.
	     */
	    static fromPersistenceString(host: any): any;
	    /**
	     * For prebuilt filters, short cut method to create date filter
	     * @param description    Name of the filter (to show in filter dropdown)
	     * @param fld            DataField of the column to apply filter to
	     * @param dateRange        One of the DateRange constants (See the DateRange object)
	     * @param start            If you specify DateRange=Custom, the start date for the custom range
	     * @param end            If you specify DateRange=Custom, the end date for the custom range
	     * @return A Filter object that contains the passed in fld and date range in the arguments collection.
	     */
	    static createDateFilter(description: any, fld: any, dateRange: any, start: any, end: any): any;
	    /**
	     * For prebuilt filters, short cut method to create list based filters (ComboBox, MSCB)
	     * @param description    Name of the filter (to show in filter dropdown)
	     * @param fld            DataField of the column to apply filter to
	     * @param values        An array of strings that represents the dataField of the filter list control
	     * @return A Filter object that contains the passed in fld and values in the arguments collection.
	     */
	    static createListFilter(description: any, fld: any, values: any): any;
	    /**
	     * Goes through columns of the passed in grid (or level for Ultimate) and checks to see if the given
	     * column is in a columnGroup. If yes, returns the top level Column Group for it.
	     * Added for Printing support of column groups
	     *
	     * @param grid    EADG, FDG or FDGCL
	     * @param col    EADGC or FDGC
	     * @return         ADGCG or FDGCG
	     */
	    static getGroupForColumn(grid: any, col: any): any;
	    /**
	     * Is col a child of grp or any of its children?
	     * Added for Printing support of column groups
	     * @param grp
	     * @param col
	     * @return
	     */
	    static isChildRecursive(grp: any, col: any): boolean;
	    /**
	     * check whether value is null or not
	     * @param {Object} val
	     */
	    static emptyIfNull(val: any): any;
	    /**
	     * capitalize first letter if prefix exist
	     *
	     * @param prefix
	     * @param val
	     */
	    static capitalizeFirstLetterIfPrefix(prefix: any, val: any): any;
	    /**
	     * capitalize first letter
	     * @param {String} val
	     */
	    static doCap(val: any): any;
	    /**
	     * change first letter to lower case
	     * @param {String} val
	     */
	    static doLower(val: any): any;
	    /**
	     * fetch style properties of cell
	     * @param {flexiciousNmsp.FlexDataGridCell} cell
	     * @param {Object} styleProp
	     */
	    static getStyleValue(cell: any, styleProp: any): any;
	    /**
	     * get wheel delta value on occuring mouse event
	     * @param evt
	     * @return wheel data value
	     */
	    static getMouseWheelDelta(evt: any): number;
	    /**
	     * remove all children of the parent element
	     * @param {*} parent
	     */
	    static removeAllChildren(parent: any): void;
	    /**
	     * A utility function that resolves expressions like x.y.z (for complex object dataField Support)
	     * Also used to apply values. For example, if dataField=x.y.z, we can apply x.y.z=valueToApply.
	     *
	     * @param host
	     * @param expression
	     * @param valueToApply
	     * @param returnUndefinedIfPropertyNotFound
	     * @param applyNullValues
	     * @param valueApplier
	     * @return {*}
	     */
	    static resolveExpression(host: any, expression: any, valueToApply: any, returnUndefinedIfPropertyNotFound: any, applyNullValues: any, valueApplier: any): any;
	    /**
	     * Sorts the given array
	     */
	    static sortArray(arrayIn: any, sorts: any): any;
	    /**
	     * Returns array of pages
	     * @param {Array} arrayIn
	     * @param {Number} pageIndex
	     * @param {Number} pageSize
	     * @return {Array}
	     */
	    static pageArray(arrayIn: any, pageIndex: any, pageSize: any): any[];
	    /**
	     * returns array of pages by page number
	     * @param {Array} arrayIn
	     * @param {Array} pageIndexes
	     * @param {Number} pageSize
	     * @return {Array}
	     */
	    static pageArrayByPageNumbers(arrayIn: any, pageIndexes: any, pageSize: any): any[];
	    /**
	     * Provided an array, filters it on basis of the filter arguments. Returns a new array that only contains the values that match filters.
	     *
	     * @param {Array} arrayIn
	     * @param {flexiciousNmsp.Filter} filter
	     * @param {flexiciousNmsp.FlexDataGrid} grid
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Boolean} hideIfNoChildren
	     *
	     * @return {Array} returns filtered array.
	     */
	    static filterArray(arrayIn: any, filter: any, grid: any, level: any, hideIfNoChildren: any): any[];
	    /**
	     * if object do not have children, or none of them matched or object did not match and none of my children did either or there are are no recursing expressions its return false.
	     * if <code>hideIfNoChildren=false</code> and object matched or object didn't match but atleast one of its children matched or there have nothing to filter its return true.
	     * Filter data of all level of data grid recursively using defind filter function
	     * @param {*} obj
	     * @param {flexiciousNmsp.Filter} filter
	     * @param {flexiciousNmsp.FlexDataGridColumnLevel} level
	     * @param {Boolean} hideIfNoChildren
	     * @return {Boolean}
	     */
	    static filterRecursive(obj: any, filter: any, level: any, hideIfNoChildren: any): any;
	    /**
	     *
	     * @param {*} items
	     * @param {*} filter
	     * @param {*} grid
	     * @param {*} level
	     * @param {*} recursingExpression
	     */
	    static recursiveMatch(items: any, filter: any, grid: any, level: any, recursingExpression: any): boolean;
	    /**
	     * Returns sorted array of pages
	     * @param {Array} flat array of total pages
	     * @param {*} filter instance of filter
	     * @param {*} pages number of pages
	     * @return {Array}
	     */
	    static filterPageSort(flat: any, filter: any, pages: any): any;
	    /**
	     * Returns Zero if passed in input is NAN else returns input as is.
	     * @param {Number} input
	     * @return {Number}
	     */
	    static nanToZero(input: any): any;
	    /**
	     * check whether browser is internet explorer or not
	     */
	    static isIE(): any;
	    /**
	     * check whether browser is Mozila Firefox or not
	     */
	    static isMoz(): boolean;
	    /**
	     * check whether browser is Chrome or Webkit version or not
	     */
	    static isWebKit(): boolean;
	    /**
	     * Creates a gradient fill
	     * @param {*} comp
	     * @param {Array} colors
	     * @param {Number} paddingX
	     * @param {Number} paddingY
	     */
	    static gradientFill(comp: any, colors: any, paddingX: any, paddingY: any): void;
	    /**
	     * Returns true if parent exists somwhere in the parent hierarchy of the child.
	     * @param {*} child
	     * @param {*} parent
	     */
	    static isInUIHierarchy(child: any, parent: any): boolean;
	    /**
	     * Returns nearest json object
	     * @param {*} target
	     * @return {*}
	     */
	    static getNearestJSObject(target: any): any;
	    /**
	     * Returns true if method exists on the object specified.
	     * @param {*} obj
	     * @param {String} prop
	     * @return {Boolean}
	     */
	    static hasMethod(obj: any, prop: any): boolean;
	    /**
	     * Returns true if method or property with name prop exists on the object specified.
	     * @param {*} obj
	     * @param {String} prop
	     * @return {Boolean}
	     */
	    static hasMethodOrProperty(obj: any, prop: any): boolean;
	    /**
	     * convert data object to xml
	     * @param {Object} data
	     * @return {Object} return xml object
	     */
	    static parseXML(data: any): any;
	    /**
	     * Sort array with property and whether there have any numeric data or not
	     * @param {Array} arr
	     * @param {String} prop
	     * @param {Boolean} numeric
	     *
	     * @return {Array} returns sorted array
	     */
	    static sortOn(arr: any, prop: any, numeric: any): void;
	    /**
	     * Add static DOM event listener to the UI component having DOM element
	     * @param {flexiciousNmsp.UIComponent} uiComponent
	     * @param {*} domElement
	     * @param {*} evt
	     * @param {Function} f
	     */
	    static addDomEventListener(uiComponent: any, domElement: any, evt: any, f: any): void;
	    /**
	     *
	     * Remove static DOM event listener from the UI component having DOM element using same function signature.
	     *
	     * @param {*} domElement
	     * @param {*} evt
	     * @param {Function} f
	     */
	    static removeDomEventListener(domElement: any, evt: any, f: any): void;
	    /**
	     * Attach style class to DOM elements
	     * @param {*} domElement
	     * @param {String} clsName
	     */
	    static attachClass(domElement: any, clsName: any): void;
	    /**
	     *
	     * Remove style class to DOM elements
	     * @param {*} domElement
	     * @param {String} clsName
	     */
	    static detachClass(domElement: any, clsName: any): void;
	    /**
	     * set plain text to DOM element
	     * @param {*} elem
	     * @param {String} text
	     */
	    static setText(elem: any, text: any): void;
	    /**
	     * set html text to DOM element
	     * @param {*} elem
	     * @param {String} html
	     */
	    static setHtml(elem: any, html: any): void;
	    /**
	     *  Compares the two Date objects and returns an integer value
	     *  indicating if the first Date object is before, equal to,
	     *  or after the second item.
	     *
	     *  @param a Date object.
	     *
	     *  @param b Date object.
	     *
	     *  @return 0 if <code>a</code> and <code>b</code> are equal
	     *  (or both are <code>null</code>);
	     *  -1 if <code>a</code> is before <code>b</code>
	     *  (or <code>b</code> is <code>null</code>);
	     *  1 if <code>a</code> is after <code>b</code>
	     *  (or <code>a</code> is <code>null</code>).
	     */
	    static dateCompare(a: any, b: any): 1 | -1 | 0;
	    /**
	     *  Compares two String values.
	     *
	     *  @param a First String value.
	     *
	     *  @param b Second String value.
	     *
	     *  @param caseInsensitive Specifies to perform a case insensitive compare,
	     *  <code>true</code>, or not, <code>false</code>.
	     *
	     *  @return 0 is both Strings are null.
	     *  1 if only <code>a</code> is null.
	     *  -1 if only <code>b</code> is null.
	     *  -1 if <code>a</code> precedes <code>b</code>.
	     *  1 if <code>b</code> precedes <code>a</code>.
	     *
	     */
	    static stringCompare(a: any, b: any, caseInsensitive: any): any;
	    /**
	     * Returns the string value of the passed in object, or if null, returns an empty string.
	     */
	    static toStringSafe(host: any): any;
	    /**
	     * Displays a tooltip for the control in question. The tooltip will disappear if the mouse
	     * moves over an area that is not the 'relativeTo' component or the tooltip component..
	     * @param relativeTo Which component to position the popup relative to
	     * @param tooltip The popup to display
	     * @param dataContext If the popup has a data property, it will be set to this value
	     * @param point If you specify this, the relativeTo is ignored, and the popup appears at the exact point you specify. Please ensure that the X and Y are relative to the Grid.
	     * @param leftOffset Whether to shift the popup left after calculating the positions, for customizing the actual position
	     * @param topOffset	Whether to shift the popup top after calculating the positions, for customizing the actual position
	     * @param offScreenMath	Whether or not to adjust the popup if it appears off screen
	     * @param where		One of three values, left, right or none. If left, positions to bottom left, if right, positions to bottom right, if none, positions right below the relativeTo component.
	     * @param container	The holder for the tooltip, defaults to UIUtils.getTopLevelApplication(). You may need to override in multi window Air apps.
	     * @param bounds
	     * By default, the tooltip will go away once you hover the mouse out of the trigger cell or the tooltip and stayed that way for tooltipWatcherTimeout. You may also
	     * manually remove the tooltip by calling the hideToolTip() function.
	     */
	    static showTooltip(relativeTo: any, tooltip: any, dataContext: any, point: any, leftOffset: any, topOffset: any, offScreenMath: any, where: any, container: any, bounds: any): void;
	    static positionComponent(relativeTo: any, itemToPosition: any, my: any, at: any, leftOffset: any, topOffset: any): void;
	    static hasLocalStorage(): false | Storage;
	    /**
	     * Check whether attributes is already set and set value to it
	     * @param {*} target
	     * @param {String} attrName
	     * @param {*} val
	     */
	    static checkSetterAndApply(target: any, attrName: any, val: any): void;
	    /**
	     * Check whether attributes is already set and return value of that attribute
	     * @param {*} target
	     * @param {String} attrName
	     */
	    static checkGetterAndRetrieve(target: any, attrName: any): any;
	    /**
	     * check whether the event is a mouse event or not
	     * @param evt
	     * @return {Boolean} returns true if it is mouse event othetwise false
	     */
	    static isMouseEvent(evt: any): any;
	    /**
	     * Merges the props of two objects.
	     * @param to
	     * @param from
	     */
	    static mergeObjects(to: any, from: any): void;
	    /**
	     * The MIT License (MIT)

	Copyright (c) 2015 Rubén Norte

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	     */
	    static objectAssign(target: any, firstSource: any): any;
	    /**
	     * convert string to date object
	     * @param {String} valueString
	     * @param {String} inputFormat
	     *
	     * @return returns date object
	     */
	    static stringToDate(valueString: any, inputFormat: any): any;
	    /**
	     * get theme by theme ID
	     * @param {*} themeID
	     */
	    static getThemeById(themeID: any): any;
	    /**
	     * check whether browser is internet explorer 8.0 or not
	     */
	    static isIE8(): any;
	    /**
	     * Disable a DOM element
	     * @param {*} elem
	     */
	    static disableElement(elem: any): void;
	    static showToaster(message: any, title: any, type: any, toasterPosition: any, animationDuration: any, visibleDuration: any, moveAnimate: any, fadeAnimate: any): void;
	    /**
	     * convert decimal color code to hexadecimal color code
	     * @param {Number} d
	     * @param {*} padding
	     */
	    static decimalToColor(d: any, padding: any): any;
	    /**
	     * Escaped the escape character
	     * @param {String} str
	     * @return {String}
	     */
	    static escapeRegExp(str: any): any;
	    /**
	     * Fetch the first DOM element by class name
	     * @param {*} parent
	     * @param {String} containerClassName
	     *
	     * @return {Object}
	     */
	    static findElementWithClassName(parent: any, containerClassName: any): any;
	    /**
	     * Fetch all the DOM elements by class name
	     * @param {*} parent
	     * @param {String} containerClassName
	     *
	     * @return {Array}
	     */
	    static findElementsWithClassName(parent: any, containerClassName: any): any;
	    /**
	     * Fetch the first DOM element by tag name
	     * @param {*} parent
	     * @param {String} tagName
	     *
	     * @return {Object}
	     */
	    static findFirstElementByTagName(parent: any, tagName: any): any;
	    /**
	     *
	     * @param {*} input
	     * @param {*} options
	     */
	    static setupInputMask(input: any, options: any): void;
	    /**
	     *
	     * @param {*} input
	     * @param {*} options
	     */
	    static setupWaterMark(input: any, options: any): void;
	    /**
	     * get offset values of an element
	     * @param {*} el
	     * @return {Object} return offset object contains top-left values
	     */
	    static offset(el: any): {
	        top: any;
	        left: any;
	    };
	    /**
	     * find anscestor element of an element by its class name
	     * @param {*} elem
	     * @param {*} className
	     *
	     * @return return ancestor element or null
	     */
	    static findAncestorByClassName(elem: any, className: any): any;
	    /**
	     * convert xml to json string or data object
	     * @param {*} xml
	     * @param {*} tab add tab character
	     * @param {*} returnObject return as string or object
	     *
	     * @return {Object|String} returns json formatted data
	     */
	    static xml2json(xml: any, tab: any, returnObject: any): any;
	}

}
