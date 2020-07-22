//conceitos de imutabilidade
const alunos = [
  {
    nome: "Rafael",
    nota: 7,
  },
  {
    nome: "José",
    nota: 9,
  },
  {
    nome: "Lucia",
    nota: 9,
  },
  {
    nome: "Marta",
    nota: 3,
  },
];

function getAprovados(listaAlunos) {
  return listaAlunos.filter((alunos) => alunos.nota >= 7);
}

console.log("\nAlunos aprovados");
console.log(getAprovados(alunos));

console.log("\nLista de Alunos: ");
console.log(alunos);
