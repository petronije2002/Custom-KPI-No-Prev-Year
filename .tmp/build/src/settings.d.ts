import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class CircleSettings {
    fontColour: string;
    fontSize: number;
    fontFamily: string;
}
export declare class CustomTitle {
    customText: string;
    fontColor: string;
    fontSize: number;
}
export declare class ThisYearSetting {
    fontColour: string;
    fontSize: number;
    fontFamily: string;
    displayUnits: number;
    cornerRadius: number;
    backgroundColour: string;
}
export declare class TargetSetting {
    fontColour: string;
    fontSize: number;
    fontFamily: string;
    displayUnits: number;
    cornerRadius: number;
    backgroundColour: string;
    customText: string;
    fontSizeForTitle: number;
    fontColourTitle: string;
    reverseTarget: boolean;
}
export declare class CircleSettings2 {
    circleColor2: string;
    circleThickness2: number;
    displayUnits: number;
}
export declare class VisualSettings extends DataViewObjectsParser {
    thisYear: ThisYearSetting;
    target: TargetSetting;
}
