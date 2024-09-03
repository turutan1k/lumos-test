export const getData = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/?results=10")
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        return response.json()
    } catch {
        return []
    }
}
