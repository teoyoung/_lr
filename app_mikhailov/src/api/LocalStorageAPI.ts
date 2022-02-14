export function getLocalStoragePath<Data>(path: string[], defailt: Data): Data {
    const [layre_1, layre_2] = path;
    
    if(!localStorage[layre_1]){
        return defailt;
    }

    if(layre_2){
        if(!localStorage[layre_1]){
            return defailt;
        }
        return JSON.parse(localStorage[layre_1][layre_2]);
    }
    return JSON.parse(localStorage[layre_1]);
}

export function setLocalStoragePath<Data>(path: string[], data: Data): Data {
    const [layre_1, layre_2] = path;
    if(layre_2){
        if(!localStorage[layre_1]){
            localStorage[layre_1] = JSON.stringify({
                layre_2: data
            });
            return data;
        }
        localStorage[layre_1][layre_2] = JSON.stringify(data);
        return data;
    }
    localStorage[layre_1] = JSON.stringify(data);
    return data;
}