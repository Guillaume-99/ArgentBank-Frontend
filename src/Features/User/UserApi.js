// appel api pour login et get user
async function login(username, password) {
    try {
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
        // renvoie du token dans body
        return data.body.token;
    } catch (error) {
        throw error;
    }
}

async function getUser(token) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
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

// appel API pour update user profile
async function updateUser(token, userName) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Impossible de mettre à jour le profil");
        }
        return data.body;
    } catch (error) {
        throw error;
    }
}

// appel API pour info utilisateur signup
async function signup(firstName, lastName, userName, email, password) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, userName, email, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Impossible de créer le compte");
        }
        return data.body;
    } catch (error) {
        throw error;
    }
}

export { login, getUser, updateUser, signup };
