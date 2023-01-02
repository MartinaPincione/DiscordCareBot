// takes an array of items and chunk the items into a matrix
// useful for help imbed because using offset based pagination

export function chunk<T>(items: T[], chunk: number): T[][]{
    const chunks : T[][] = []

    for (let i =0 ; i< items.length; i += chunk){
        chunks.push(items.slice(i, i + chunk))
    }
    return chunks
}