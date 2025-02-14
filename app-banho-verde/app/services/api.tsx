export const fetchClientData = async () => {
  const token = localStorage.getItem("token"); // Recupera o token salvo

  console.log("🔍 Token Recuperado:", token);

  if (!token) {
    console.error("❌ ERRO: Token não encontrado. Usuário precisa fazer login.");
    return null;
  }

  try {
    const response = await fetch("http://localhost:8080/clients/search", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // Token no cabeçalho
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Tenta capturar o erro retornado pela API
      console.error(`❌ ERRO: Falha na requisição (${response.status}) - ${errorText}`);
      return null;
    }

    const data = await response.json();

    return data;
    
  } catch (error) {
    alert("❌ ERRO GERAL: Erro ao buscar dados do cliente" +  error);
    return null;
  }
};
