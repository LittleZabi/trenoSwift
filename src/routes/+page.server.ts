import { getHomeContent } from "$lib";
import { parse } from "$lib/globals";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    let homeContent = parse(await getHomeContent())
    return {...homeContent}
}) satisfies PageServerLoad 