 const getPositionBase = () => new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
});

export const getPosition = async () => {
    try {
        const {
            latitude,
            longitude
        } = (await getPositionBase()).coords;

        return {
            latitude,
            longitude
        }
    } catch (e) {
        return {
            latitude: 41.5,
            longitude: -90.547
        }
    }
}