export function getRGBValues (str: string | undefined) {
    if (!str) return null;
    var vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
    return {
      'r': parseInt(vals[0]),
      'g': parseInt(vals[1]),
      'b': parseInt(vals[2])
    };
  }

export function setRGBValues(vals : any) {
    return `rgb(${vals.r}, ${vals.g}, ${vals.b})`
}

export function clamp(a : number | null, b: number | null, c: number) {
    if (!a) a = 0;
    if (!b) b = 1;
    return ((c < a) ? a : ((c > b) ? b : c));
}
export function inverseLerp (x: number, y: number, a: number) {
    return clamp(0, 1, (a - x) / (y - x));
}
export function Lerp(a: number, b: number, x: number) {
    return a + (b - a) * x;
}