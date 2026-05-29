export const loginApi = async (email, password) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Email ou mot de passe incorrect");
    }

    const data = await response.json();
    return { token: data.body.token };
};
