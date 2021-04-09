export const pascalCaseObject = obj => {
    const upperCaseObject = {};
    for (const [key, val] of Object.entries(obj)) {
        let keyU = toTitleCase(key);
        if (val && Array.isArray(val)) {
            upperCaseObject[keyU] = [];
            for (var i = 0; i < val.length; i++) {
                upperCaseObject[keyU].push(pascalCaseObject(val[i]))
            }
        } else if (val && typeof val === 'object') {
            upperCaseObject[keyU] = pascalCaseObject(val);
        }
        else {
            upperCaseObject[keyU] = val;
        }
    }
    return upperCaseObject;
}

const toTitleCase = (word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
}