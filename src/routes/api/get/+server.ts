// import { getConfig } from '$lib'
// import { configProjection } from '$lib/vars.js'

export const GET = async ({ url }) => {
    // if (url.searchParams.get('getConfig'))
    //     return new Response(JSON.stringify(await getConfig(configProjection({ _id: 0 }))), { status: 200 })
    return new Response(JSON.stringify({ message: 'API status 200 (OK) but response is empty.' }), { status: 200 })
}