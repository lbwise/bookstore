export async function load() {
    return {
        books: await (await fetch('http://localhost:3000/books')).json(),
    };
}