export const makeCard = () => {
    const data = []
    for (let i = 0; i < 100; i++) {
        data.push({
            id: i,
            name: `Card-${i}`,
            description: `이 카드의 이름은 Card-${i} 입니다.`
        })
    }
    return data
}
