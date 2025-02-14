export const fetchDipData = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("❌ ERRO: Token não encontrado. Usuário precisa fazer login.");
      return null;
    }
  
    try {
      const response = await fetch("http://localhost:8080/dips/search", {
        method: "GET"
      });
  
      if (!response.ok) {
        const errorText = await response.text();
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
  