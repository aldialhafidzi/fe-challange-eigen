export function qs(obj: { [key: string]: string }) {
    const params = new URLSearchParams(obj);
    return params.toString();
}