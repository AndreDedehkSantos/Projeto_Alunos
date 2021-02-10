<template>
    <div>
        <div style="display: flex; width: 50%">
            <h1>{{texto}}</h1>
            <div class="voltar">
                <button class="btt btt_voltar" @click="voltar()">Voltar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        texto: String
    },
    methods:{
        voltar(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
    .voltar{
        width: 50%;
        position: absolute;
        margin-top: 30px;
    }
    .btt {
        padding: 10px 20px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border-radius: 5px;
    }
    .btt_voltar{
        float: right;
        background-color: rgba(230, 88, 22, 0.897);
        border: 1px solid rgba(230, 88, 22, 0.897);;
    }
    .btt_voltar:hover{
        float: right;
        background-color: white;
        color: rgba(230, 88, 22, 0.897);;
    }
</style>
