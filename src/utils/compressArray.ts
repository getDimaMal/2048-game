export function compressArray(arr: number[]) {
    const stack: number[] = [];
    const shift: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            shift.push(null);
            continue;
        }

        const last = stack.pop();

        if (last === arr[i]) stack.push(last + arr[i]);
        else stack.push(...(last ? [last, arr[i]] : [arr[i]]));

        shift.push(stack.length - 1 - i);
    }

    return {
        shift,
        stack: [...stack, ...(Array(arr.length - stack.length).fill(0))],
    };
}