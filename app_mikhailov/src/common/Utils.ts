export const GeneratedItems = <Set, Get extends {uid: string}>(items: Set[]): {[kye: string]: Get} => {
    const map: Get | {} = {};
    for (const item of items) {
        const uid = UIDGenerated();
        map[uid] = {...item, uid};
    }
    return map;    
}

export const UIDGenerated = (): string => {
    return `${Math.random() * Math.random() + Math.random()}`;
}