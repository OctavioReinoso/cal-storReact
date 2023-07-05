const itemsCatalogo = [

    {
        id: 1,
        title: "Remera blanca",
        description: "...",
        price: 7000,
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVGNi_ae99fJaAQZrw7pqEhKlQ89o6R-BQw&usqp=CAU"
    },
    {
        id: 2,
        title: "Jean",
        description: "...",
        price: 12000,
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJvGhUuiRK80Ts4RAhtm24lJro7lJRoh4-DarpezSZ4YZpHEqostldvtQoye5kflNcN4&usqp=CAU"
    },
    {
        id: 3,
        title: "Zapatillas blanca",
        description: "...",
        price: 20000,
        pictureURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7aso1U3W2I17aEkSY3vYXNIm-ZhRvIumzlUAW38-FxrVVUJQ6HoSR-ZOqd16-i8FPn8&usqp=CAU"
    }
]


export const getItemsCatalogo = () => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemsCatalogo);
        }, 2000);
    })
    
}




    //     {
//         "id": 1,
//         "tittle": "Remera blanca",
//         "description": "...",
//         "price": "$7000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVGNi_ae99fJaAQZrw7pqEhKlQ89o6R-BQw&usqp=CAU"
//     },
//     {
//         "id": 2,
//         "tittle": "Remera negra",
//         "description": "...",
//         "price": "$7000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXbevI-PsAP2AHrdgO6QyReHJNfRrIFBCtw&usqp=CAU"
//     },
//     {
//         "id": 3,
//         "tittle": "Remera gris",
//         "description": "...",
//         "price": "$7000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiyG_YD7D-0xqJkpZhNgfENLCGZXuekojTQ&usqp=CAU"
//     },
//     {
//         "id": 4,
//         "tittle": "Jean",
//         "description": "...",
//         "price": "$12000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJvGhUuiRK80Ts4RAhtm24lJro7lJRoh4-DarpezSZ4YZpHEqostldvtQoye5kflNcN4&usqp=CAU"
//     },
//     {
//         "id": 5,
//         "tittle": "Pantalon cargo",
//         "description": "...",
//         "price": "$12000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQswBK_TH_-_qeD7uIhb4ShBy7Dwp-qglgrlSexYuVqbwMgo8SBnp2IbrUocH2kaFO6ipg&usqp=CAU"
//     },
//     {
//         "id": 6,
//         "tittle": "Pantalon Jogger",
//         "description": "...",
//         "price": "$12000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS1x7RpvKaz5000AWGBJFvqDmJt0HNWM9Z0M8hmQRqZqVMj5ao3WJR9LO8rx5E8X8LVM&usqp=CAU"
//     },
//     {
//         "id": 7,
//         "tittle": "Zapatillas blanca",
//         "description": "...",
//         "price": "$20000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7aso1U3W2I17aEkSY3vYXNIm-ZhRvIumzlUAW38-FxrVVUJQ6HoSR-ZOqd16-i8FPn8&usqp=CAU"
//     },
//     {
//         "id": 8,
//         "tittle": "Zapatillas gris",
//         "description": "...",
//         "price": "$20000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmFmiYYMfDyzkclk-jYsKdsM_5Mo9O0RZxqCgweh4Lc0y-7a3K76EWabDczIqrkRm1dYA&usqp=CAU"
//     },
//     {
//         "id": 9,
//         "tittle": "Zapatillas blanca/rojas",
//         "description": "...",
//         "price": "$20000",
//         "pictureURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGv9dTol2cbSdGPhy_I29ujiEJvxlt-GFZbIJB1SB7eqAREPQSd-hCRmnPW6ZzPISRv88&usqp=CAU"
//     }
// ]

