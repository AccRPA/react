import { createContext } from "react";
import { SettingsModel } from "../models/Settings.model";

// a context with an object that has to be initialized with useState
export const SettingsContext = createContext({
    settings: new SettingsModel(),
    setSettings: (_: SettingsModel) => {}
});