<template>
<div>
    <h1>{{texto}}</h1>
    <div class="voltar">
        <button class="btt_voltar">Voltar</button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        texto: String
    }
}
</script>

<style scoped>
    .btt {
        padding: 10px 20px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border-radius: 5px;
    }

    .btt_voltar{
        background-color: rgba(72, 119, 248, 0.897);
        border: 1px solid rgba(72, 119, 248, 0.897);;
    }
</style>
