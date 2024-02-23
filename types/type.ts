type UserType = {
    id: string
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
}

type RecipeNonJsonType = {
    Id: number
    recipeTitle: string
    recipeDescription: string
    recipeIndication: string
    recipeCost: string
    recipeMaterial: string[]
    recipeUrl: string
    foodImageUrl: string
}

export type { UserType, RecipeNonJsonType }
