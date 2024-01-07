import { writable, type Writable } from "svelte/store";

export const Config:any = writable({
    settings: {websiteName: ''}
})

export const updateConfig = (newConfig:any) => Config.update((_Config:any) => ({..._Config, ...newConfig}));