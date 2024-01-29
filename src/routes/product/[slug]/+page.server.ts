import type { PageServerLoad } from "./$types"
import { getItem } from '$lib';
import { parse } from "$lib/globals";
import { error } from "@sveltejs/kit";
export const load = (async ({ params }) => {
    const item = await getItem(params.slug)
    if (!item) {
        throw error(404, {
            message: `<h1>Product Not found!</h1> (${params.slug})`,
        });
    }
    return { slug: params.slug, item: parse(item) }
}) satisfies PageServerLoad