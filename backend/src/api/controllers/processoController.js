
export function createProcess(req, res) {
  // Lógica para criar um novo processo
  res.send('Processo criado');
}

export function getProcess(req, res) {
  // Lógica para obter os detalhes de um processo
  res.send('Detalhes do processo');
}

export function updateProcess(req, res) {
  // Lógica para atualizar um processo existente
  res.send('Processo atualizado');
}

export function deleteProcess(req, res) {
  // Lógica para deletar um processo
  res.send('Processo deletado');
}
