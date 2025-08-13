let nome = "Larissa"
let idade = 20
let cidade = "Fortaleza"
let profissao = "manicure"
let anoAtual = 2025
let anoNascimento = anoAtual - idade 
let salario = 1500 
let bonus = 300
let salarioBonus = parseInt(salario) + parseInt(bonus) 
let salarioAno = salarioBonus * 12
let salarioAnoDobro = salarioAno * 2 

alert(`  ========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento: ${anoNascimento}
Cidade: ${cidade}
Profissão: ${profissao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${salarioBonus}
Total ano: U$${salarioAno}
Total anual (salário dobrado): U$${salarioAnoDobro}
========================================= 
 `)