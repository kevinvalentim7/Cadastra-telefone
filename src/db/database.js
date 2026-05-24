import { router } from 'expo-router';
import * as SQLite from 'expo-sqlite';

// =========================
// ABRIR BANCO
// =========================

export const db = SQLite.openDatabaseSync('autenticacao.db');

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
};

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
  }

};

// =========================
// LOGIN USUÁRIO
// =========================

export const logarUsuario = (login, senha) => {

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
  }

};

// =========================
// LISTAR CONTATOS
// =========================

export const listarContatos = () => {

  try {

    return db.getAllSync(`
      SELECT * FROM contatos
      ORDER BY nomeCompleto
    `);

  } catch (error) {
    console.log("Erro ao listar contatos:", error);
    return [];
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

  } catch (error) {
    console.log("Erro ao deletar contato:", error);
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

  } catch (error) {
    console.log("Erro ao atualizar contato:", error);
  }

};