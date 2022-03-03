export function copy<T>(source: T): T {
    return { ...source }
}

export function stringifyAndParse<T>(source: T): T {
    return JSON.parse(JSON.stringify(source))
}

export function compareObjectsByString(objectOne: any, objectTwo: any): boolean {
    return JSON.stringify(objectOne) === JSON.stringify(objectTwo);
}

export function compareObjectsAdvanced(objectOne: any, objectTwo: any): boolean {
    //TODO: compare two Objects, return if they are the same and if not return also the different elements

    return false;
}

export function deepCopyObject<T extends object>(source: T, dest: T) {
    let isSourceObject = typeof source === 'object' && source !== null;
    let isDestObject = typeof dest === 'object' && dest !== null;
    if (!isSourceObject || !isDestObject) {
        let exception = isSourceObject ? '' : 'source is not an object! ';
        exception += isDestObject ? '' : 'dest is not an object!';
        throw exception;
    }
    deepCopy((source as any), (dest as any))
}

function deepCopy(source: any, dest: any): void {
    if (source === null || typeof source !== 'object') {
        dest = source;
        return;
    }
    var destKeys = Object.keys(dest);
    for (const key in source) {
        if (dest[key] !== undefined) {
            destKeys.splice(destKeys.indexOf(key.toString()), 1);
        }
        (typeof source[key] === 'object' && source[key] !== null) ? deepCopy(source[key], dest[key]) : dest[key] = source[key]
    }
    for (const key of destKeys) {
        delete dest[key];
    }
    if(!compareObjectsByString(source, dest)) {
        throw 'Error occured! It is most likely that the objects are not from the same type';
    }
}