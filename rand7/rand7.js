const rand5 = () => {
    return Math.floor(Math.random() * 5)
}

const rand7 = () => {
    const rand25 = 5 * rand5() + rand5()

    if (rand25 > 20)
        return rand7()

    return rand25 % 7
}

for (let i = 0; i < 10; i ++)
    console.log(rand7())
