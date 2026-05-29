export const updateProfileApi = async (token, firstName, lastName) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) throw new Error("Impossible de modifier le profil");

    const data = await response.json();
    return { firstName: data.body.firstName, lastName: data.body.lastName };
};
