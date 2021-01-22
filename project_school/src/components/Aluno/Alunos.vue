<template>
<div class="hello">
    <titulo :texto="StrTitulo" />
    <div v-if="professor_id != undefined">
        <input type="text" placeholder="Nome do aluno" v-model="nome" @keyup.enter="addAluno()">
        <button class="btn btn_input" @click="addAluno()">Adicionar</button>
    </div>

    <table>
        <thead>
            <th>Mat.</th>
            <th>Nome</th>
            <th>Opções</th>
        </thead>
        <tbody v-if="alunos.length">
            <tr v-for="(aluno, index) in alunos" :key="index">
                <td>{{aluno.id}}</td>
                <router-link :to="`alunoDetalhe/${aluno.id}`" tag="td" style="cursor: pointer">
                    {{aluno.nome}} {{aluno.sobrenome}}
                </router-link>
                <td>
                    <button class="btn btn_danger" @click="remover(aluno)">Remover</button>
                </td>
            </tr>
        </tbody>
        <tfoot v-else>
            Nenhum Aluno Encontrado
        </tfoot>
    </table>

</div>
</template>

<script>
import Titulo from '../_share/Titulo'

export default {
    components: {
        Titulo
    },
    data() {
        return {
            titulo: 'Aluno',
            nome: '',
            alunos: [],
            professor_id: this.$route.params.prof_id,
            professor: {},
            StrTitulo: ''
        }
    },
    created() {
        if (this.professor_id) {
            this.$http.get("http://localhost:3000/alunos?professor.id=" + this.professor_id)
                .then(res => res.json())
                .then(alunos => this.alunos = alunos);
             this.$http.get('http://localhost:3000/professores/' + this.professor_id)
                .then(res => res.json())
                .then(professor => {
                    this.professor = professor;
                    this.StrTitulo = 'Professor: ' + professor.nome;
                })
        } else {
            this.$http.get('http://localhost:3000/alunos')
                .then(res => res.json())
                .then(alunos => this.alunos = alunos);
            this.StrTitulo = 'Alunos';
        }
    },
    props: {},
    methods: {
        addAluno(){
            let _aluno = {
                nome: this.nome,
                sobrenome: "",
                professor: {
                    id:this.professor.id,
                    nome: this.professor.nome
                }
            };
            this.$http.post("http://localhost:3000/alunos", _aluno)
                .then(res => res.json())
                .then(aluno => {
                    this.alunos.push(aluno);
                    this.nome = "";
                });
        },
        remover(aluno) {
            this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`)
                .then(() => {
                    let indice = this.alunos.indexOf(aluno);
                    this.alunos.splice(indice, 1);
                })
        }
    }
}
</script>

<style scoped>
input {
    width: calc(100% - 195px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    color: #687f7f;
    display: inline;
}

.btn_input {
    width: 153px;
    border: 0px;
    padding: 20px;
    font-size: 1.3em;
    background-color: rgb(116, 155, 155);
}

.btn_input:hover {
    padding: 20px;
    margin: 0px;
    border: 0px;
}
</style>
