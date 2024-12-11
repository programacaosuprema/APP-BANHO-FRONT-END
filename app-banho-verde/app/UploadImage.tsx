import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const uploadImage = async (uri) => {
    try {
        const response = await fetch(uri);
        const blob = await response.blob();

        const storageRef = ref(storage, `images/${Date.now()}`);
        const snapshot = await uploadBytes(storageRef, blob);

        // Obter URL para download
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("Imagem salva em:", downloadURL);
        return downloadURL; // Retorna a URL para salvar no seu backend
    } catch (error) {
        console.error("Erro ao fazer upload:", error);
    }
};
