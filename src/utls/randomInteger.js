export function randomInteger(pMin = 1, pMax) {
    if (pMax < pMin) {
        let t = pMin;
        pMin = pMax;
        pMax = t;
    }
    return Math.floor(Math.random() * (pMax + 1 - pMin) + pMin);
}
