export type BookTypes = {
    id: number,
    title: string,
    image: string,
    authors: Author[],
    rating: {average: number },
}

export type Author = {
    name: string,
}