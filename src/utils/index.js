export const shallowCopy = (obj) => {
    let _obj = {};
    for (let k in obj) {
        // noinspection JSUnfilteredForInLoop
        _obj[k] = obj[k]
    }
    return _obj;
};