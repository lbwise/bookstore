<script lang="ts">
    import type { BookItem } from './types';
    export let bookItem: BookItem;
</script>

<div class="book-card">
    <h3>{bookItem.title}</h3>
    <a href={`/book/${bookItem.id}`}>View</a>
</div>
<style>
.book-card{
    text-align: center;
    margin: 10px 20px; 
    background: #61e8a2;
    border-radius: 30px;
    box-shadow: 2px 2px 5px #5a5858;
    height: 15vh;
    width: 10vw;
}
</style>