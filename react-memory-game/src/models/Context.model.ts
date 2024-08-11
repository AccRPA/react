import { Dispatch, SetStateAction } from "react";
import { SettingsModel } from "./Settings.model";

export class ContextModel {
    public settings: SettingsModel;
    public setSettings: Dispatch<SetStateAction<SettingsModel>>;

    constructor(initSettings: SettingsModel, setInitSettings: Dispatch<SetStateAction<SettingsModel>>){
        this.settings = initSettings;
        this.setSettings = setInitSettings; 
    }
}