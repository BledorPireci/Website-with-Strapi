export const generateImagePath = function(url: string): string {
    return `${process.env.NEXT_PUBLIC_STRAPI_PATH}${url}`
}
