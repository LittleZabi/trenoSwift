import { writable, type Writable } from "svelte/store";

export const Config: any = writable({
    settings: { config_exist: false, websiteName: '' }
})

export const updateConfig = (newConfig: any) => Config.update((_Config: any) => ({ ..._Config, ...newConfig }));