const today = new Date()

export const startOfDay = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()),
)
export const endOfDay = new Date(
    Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59,
        999,
    ),
)
