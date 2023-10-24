<script lang="ts">
    import BookCard from '$lib/bookCard.svelte';
    import type { BookItem } from '$lib/types';
    import { db } from '$lib/db.js';
    console.log('database CONN:', db);
    export let data; 
    const books: BookItem[] = data.books;
    let searchValue = '';
</script>
<section>
    <h1>Books search</h1>
    <div class="search">
        <input bind:value={searchValue} type="text" name="search">
        <button on:click={() => {console.log(searchValue)}} class="search-btn">search</button>
    </div>
    <a href="/newBook" class="add-book">
        Add Book
    </a>
    <div class="search-results">
        {#each books as book}
           <BookCard bookItem={book}/> 
        {/each}
    </div>
</section>
<style>

.search-results {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

.add-book {
    margin: 10px 5px;
    background: rgb(23, 121, 23);
    height: 4vh;
    width: 5vw;
}

.search-btn {
    background: #2769be;
    border-radius: 20px;
    color: #fff;
    height: 4vh;
    width: 7vw;
}
</style>