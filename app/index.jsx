import { Redirect } from "expo-router";
import { criarTabela } from "../src/db/database";
import { useEffect } from "react";
  
export default function Index() {
  useEffect(() => {
    criarTabela();
  }, []);

  return <Redirect href="/login" />;
}

  