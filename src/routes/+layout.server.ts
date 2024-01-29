import { getConfig } from "$lib";
import { parse } from "$lib/globals";
import { configProjection } from "$lib/vars";

export const load = async ({ url }) => {
    return {
        config: parse(await getConfig(configProjection({ _id: 0 }))),
        url: url.pathname
    }
};
