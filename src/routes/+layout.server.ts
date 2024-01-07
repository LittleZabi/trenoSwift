import { getSettings } from "$lib";
import { parse } from "$lib/globals";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    return {
        config: parse(await getSettings())
    } 
}) satisfies PageServerLoad;