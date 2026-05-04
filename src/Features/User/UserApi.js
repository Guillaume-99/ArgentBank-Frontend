// appel api pour login et get user
import { loginSuccess } from "./UserSlice";

async function login(username, password) {
    try {
        console.log("Tentative de login avec:", { username, password });
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Identifiants invalides");
        }
        console.log("Token reçu:", data.body.token);
        console.log("Données complètes de la réponse:", data);
        return data.body.token;
    } catch (error) {
        throw error;
    }
}

async function getUser(token) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Impossible de récupérer le profil");
        }
        return data.body;
    } catch (error) {
        throw error;
    }
}

export { login, getUser };
