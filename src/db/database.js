import * as SQLite from "expo-sqlite";

// =========================
// ABRIR BANCO
// =========================

export const db = SQLite.openDatabaseSync("autenticacao.db");

// =========================
// INICIALIZAR BANCO
// =========================

export function criarTabela() {

  try {

    // =========================
    // TABELA USUÁRIOS
    // =========================

    db.execSync(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        nome TEXT NOT NULL,
        login TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL,

        email TEXT,
        celular TEXT,

        perguntaSeguranca TEXT,
        respostaSeguranca TEXT
      );
    `);

    // =========================
    // TABELA CONTATOS
    // =========================

    db.execSync(`
      CREATE TABLE IF NOT EXISTS contatos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        nomeCompleto TEXT NOT NULL,

        celular TEXT,
        telefone TEXT,

        email TEXT,

        cep TEXT,
        endereco TEXT,
        numero TEXT,
        complemento TEXT,

        bairro TEXT,
        cidade TEXT,
        uf TEXT,

        observacao TEXT
      );
    `);

    console.log("Banco inicializado com sucesso");

  } catch (error) {

    console.log("Erro ao inicializar banco:", error);

  }

}

// =========================
// INSERIR USUÁRIO
// =========================

export const inserirUsuario = (
  nome,
  login,
  senha,
  email,
  celular,
  perguntaSeguranca,
  respostaSeguranca
) => {

  try {

    const resultado = db.runSync(
      `
      INSERT INTO usuarios (
        nome,
        login,
        senha,
        email,
        celular,
        perguntaSeguranca,
        respostaSeguranca
      )
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        nome,
        login,
        senha,
        email,
        celular,
        perguntaSeguranca,
        respostaSeguranca
      ]
    );

    return resultado;

  } catch (error) {

    console.log("Erro ao inserir usuário:", error);
    return null;

  }

};

// =========================
// LOGIN USUÁRIO
// =========================

export const logarUsuario = (
  login,
  senha
) => {

  try {

    const usuario = db.getFirstSync(
      `
      SELECT * FROM usuarios
      WHERE login = ? AND senha = ?
      `,
      [login, senha]
    );

    return usuario;

  } catch (error) {

    console.log("Erro ao logar usuário:", error);
    return null;

  }

};

// =========================
// TROCAR SENHA
// =========================

export const esqueciSenha = (
  login,
  respostaSeguranca,
  novaSenha
) => {

  try {

    const usuario = db.getFirstSync(
      `
      SELECT * FROM usuarios
      WHERE login = ? AND respostaSeguranca = ?
      `,
      [login, respostaSeguranca]
    );

    if (!usuario) {

      return false;

    }

    db.runSync(
      `
      UPDATE usuarios
      SET senha = ?
      WHERE login = ?
      `,
      [novaSenha, login]
    );

    return true;

  } catch (error) {

    console.log("Erro ao trocar senha:", error);
    return false;

  }

};

// =========================
// INSERIR CONTATO
// =========================

export const inserirContato = (
  nomeCompleto,
  celular,
  telefone,
  email,
  cep,
  endereco,
  numero,
  complemento,
  bairro,
  cidade,
  uf,
  observacao
) => {

  try {

    const resultado = db.runSync(
      `
      INSERT INTO contatos (
        nomeCompleto,
        celular,
        telefone,
        email,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        observacao
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        nomeCompleto,
        celular,
        telefone,
        email,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        observacao
      ]
    );

    return resultado;

  } catch (error) {

    console.log("Erro ao inserir contato:", error);
    return null;

  }

};

// =========================
// LISTAR CONTATOS
// =========================

export const listarContatos = () => {

  try {

    const contatos = db.getAllSync(
      `
      SELECT * FROM contatos
      ORDER BY nomeCompleto
      `
    );

    return contatos;

  } catch (error) {

    console.log("Erro ao listar contatos:", error);
    return [];

  }

};

// =========================
// BUSCAR CONTATO POR ID
// =========================

export const buscarContatoPorId = (id) => {

  try {

    const contato = db.getFirstSync(
      `
      SELECT * FROM contatos
      WHERE id = ?
      `,
      [id]
    );

    return contato;

  } catch (error) {

    console.log("Erro ao buscar contato:", error);
    return null;

  }

};

// =========================
// DELETAR CONTATO
// =========================

export const deletarContato = (id) => {

  try {

    db.runSync(
      `
      DELETE FROM contatos
      WHERE id = ?
      `,
      [id]
    );

    return true;

  } catch (error) {

    console.log("Erro ao deletar contato:", error);
    return false;

  }

};

// =========================
// ATUALIZAR CONTATO
// =========================

export const atualizarContato = (
  id,
  nomeCompleto,
  celular,
  telefone,
  email,
  cep,
  endereco,
  numero,
  complemento,
  bairro,
  cidade,
  uf,
  observacao
) => {

  try {

    db.runSync(
      `
      UPDATE contatos
      SET
        nomeCompleto = ?,
        celular = ?,
        telefone = ?,
        email = ?,
        cep = ?,
        endereco = ?,
        numero = ?,
        complemento = ?,
        bairro = ?,
        cidade = ?,
        uf = ?,
        observacao = ?
      WHERE id = ?
      `,
      [
        nomeCompleto,
        celular,
        telefone,
        email,
        cep,
        endereco,
        numero,
        complemento,
        bairro,
        cidade,
        uf,
        observacao,
        id
      ]
    );

    return true;

  } catch (error) {

    console.log("Erro ao atualizar contato:", error);
    return false;

  }

};