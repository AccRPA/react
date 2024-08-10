import { createContext } from "react";
import { ContextModel } from "../models/Context.model";
import { SettingsModel } from "../models/Settings.model";

export const SettingsContext = createContext(
    new ContextModel(
        new SettingsModel(), 
        () => {}
    )
);