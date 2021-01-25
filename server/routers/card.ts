export const makeCards = () => {
    const data = []
    for (let i = 0; i < 100; i++) {
        data.push({
            id: i,
            title: `Card Title :: ${i}`
        })
    }
    return data
}
