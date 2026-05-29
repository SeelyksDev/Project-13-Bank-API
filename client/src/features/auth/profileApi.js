export const profileApi = async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) throw new Error("Impossible de récupérer le profil");

    const data = await response.json();
    return { firstName: data.body.firstName, lastName: data.body.lastName };
};
