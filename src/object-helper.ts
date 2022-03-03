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
        /*if (source.hasOwnProperty(key)) {
            if (Array.isArray(source[key])) {
                for (let i = 0; i < Object.values(source[key]).length; i++) {
                    if (dest[key][i] === 'object' && source[key] !== null) {
                        deepCopy(source[key][i], dest[key][i]);
                    } else {
                        dest[key] = source[key]
                    }
                }
            } else if (typeof source[key] === 'object' && source[key] !== null) {
                deepCopy(source[key], dest[key]);
            } else {
                dest[key] = source[key];
                
            }
        }*/
    }
    for (const key of destKeys) {
        delete dest[key];
    }
    if(!compareObjectsByString(source, dest)) {
        console.log(source);
        console.log(dest);
        throw 'Error occured! It is most likely that the objects are not from the same type';
    }
}