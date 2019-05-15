export async function delay(timeout: number) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

export async function executeSequence<T>(array: T[], callback: (item: T, index: number) => any) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        await callback(item, index)
    }
}
