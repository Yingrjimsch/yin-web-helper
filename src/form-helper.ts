export function mapNullToUndefined(source: any): any {
    for (const key in source) {
        if (source[key] == null) {
            source[key] = undefined;
        }
    }
    return source;
}

export const nullToEmptyString = (source: any) => source == null ? '' : source;