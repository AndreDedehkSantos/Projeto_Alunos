import Vue from 'vue';
import Router from 'vue-router';

import Sobre from './components/Sobre/Sobre';
import Alunos from './components/Aluno/Alunos';
import AlunoDetalhe from './components/Aluno/AlunoDetalhe';
import Professor from './components/Professor/Professor';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/professores',
            nome: 'Professores',
            component: Professor
        },
        {
            path: '/todosalunos',
            nome: 'Alunosall',
            component: Alunos
        },
        {
            path: '/alunos/:prof_id',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/alunodetalhe/:id',
            nome: 'AlunosDetalhe',
            component: AlunoDetalhe
        },
        {
            path: '/sobre',
            nome: 'Sobre',
            component: Sobre
        }
    ]
})