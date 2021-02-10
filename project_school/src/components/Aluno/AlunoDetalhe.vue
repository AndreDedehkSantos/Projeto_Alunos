<template>
    <div>
        <Titulo :texto="`Aluno: ${aluno.nome}`" />
        <button  class="btt btt_primary" @click="editar()">Editar</button>
        <table>
            <tbody>
                <tr>
                    <td class="colPequeno">Matrícula:</td>
                    <td>
                        <label>{{aluno.id}}</label>
                    </td>
                </tr>
                <tr>
                    <td class="colPequeno">Nome:</td>
                    <td>
                        <label>{{aluno.nome}}</label><br>
                        <input v-if="editando" v-model="aluno.nome" type="text" /> 
                        <input v-else v-model="aluno.nome" type="text" hidden />   
                    </td>
                </tr>
                <tr>
                    <td class="colPequeno">Sobrenome:</td>
                    <td>
                        <label>{{aluno.sobrenome}}</label><br>
                        <input v-if="editando" v-model="aluno.sobrenome" type="text" />
                        <input v-else v-model="aluno.sobrenome" type="text" hidden />    
                    </td>
                </tr>
                <tr>
                    <td class="colPequeno">Data de Nascimento:</td>
                    <td>
                        <label>{{aluno.dtNasc}}</label><br>
                        <input v-if="editando" v-model="aluno.dtNasc" type="text" />
                        <input v-else v-model="aluno.dtNasc" type="text" hidden />    
                    </td>
                </tr>
                <tr>
                    <td class="colPequeno">Professor:</td>
                    <td>
                        <label>{{aluno.professor.nome}}</label><br>
                        <select v-if="editando" v-model="aluno.professor">
                                <option v-for="(professor, index) in professores" :key="index" v-bind:value="professor">
                                    {{professor.nome}}
                                </option>
                        </select>
                        <select v-else v-model="aluno.professor" hidden>
                                <option v-for="(professor, index) in professores" :key="index" v-bind:value="professor">
                                    {{professor.nome}}
                                </option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="margin-top: 10px;">
            <div v-if="editando">
                <button class="btt btt_save" @click="salvar(aluno)">Salvar</button>
                <button class="btt btt_cancell" @click="cancelar()">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Titulo from '../_share/Titulo'
    export default {
        components: {
            Titulo
        },
        props: {
            
        },
        data() {
            return {
                professores:[],
                aluno: {},
                id: this.$route.params.id,
                editando: false
            }
        },
        created(){
            this.$http.get("http://localhost:3000/alunos/" + this.id)
                .then(res => res.json())
                .then(aluno => this.aluno = aluno);
            
            this.$http.get("http://localhost:3000/professores")
                .then(res => res.json())
                .then(professor => this.professores = professor);
            this.alunoAntigo = this.aluno;
        },
        methods :{
            editar() {
                this.editando = !this.editando;
            },
            salvar(_aluno) {
                let _alunoEditar = {
                    id: _aluno.id,
                    nome: _aluno.nome,
                    sobrenome: _aluno.sobrenome,
                    dtNasc: _aluno.dtNasc,
                    professor: _aluno.professor
                }
                this.$http.put(`http://localhost:3000/alunos/${_alunoEditar.id}`, _alunoEditar);
            },
            cancelar(){
                this.editando = !this.editando;
            }
        }
    }
</script>

<style scoped>
    input, select{
        margin: 0px;
        padding: 5px 10px;
        font-size: 0.9em;
        border: 1px solid silver;
        border-radius: 5px;
        width: 95%;
        font-family: Montserrat;
        background-color: rgb(245, 245, 245);
    }
    select{
        height: 38px;
        width: 100%;
    }
    .colPequeno{
        width: 20%;
        text-align: right;
        background-color: rgb(125, 217, 245);
        font-weight: bold;
    }

    .btt {
        padding: 10px 20px;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border-radius: 5px;
    }

    .btt_primary{
        background-color: rgba(72, 119, 248, 0.897);
        border: 1px solid rgba(72, 119, 248, 0.897);;
    }

    .btt_primary:hover{
        background-color: white;
        color:  rgba(72, 119, 248, 0.897);
    }
    .btt_cancell{
        background-color: rgba(235, 51, 51, 0.897);
        margin-left: 5px;
        border: 1px solid rgba(235, 51, 51, 0.897);
    }

    .btt_cancell:hover{
        background-color: white;
        color: rgba(235, 51, 51, 0.897);
    }
    .btt_save{
        background-color: rgba(22, 163, 40, 0.897);
        border: 1px solid  rgba(22, 163, 40, 0.897);
    }
    .btt_save:hover{
        color: rgba(22, 163, 40, 0.897); ;
        background-color: white;
    }

</style>