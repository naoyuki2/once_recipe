export const startOfDay = (today: Date) =>
    new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()))

export const endOfDay = (today: Date) =>
    new Date(
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
