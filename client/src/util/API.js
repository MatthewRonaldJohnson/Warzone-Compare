export default {
    getPlayerStats: async function (userId, platform) {
        userId = userId.replace("#", "%23");
        const rawData = await fetch(`/api/${userId}/${platform}`);
        return await rawData.json();;
    }
}