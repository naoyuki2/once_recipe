-- CreateTable
CREATE TABLE "archive_recipe" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foodImageUrl" TEXT NOT NULL,
    "recipeTitle" TEXT NOT NULL,
    "recipeDescription" TEXT NOT NULL,
    "recipeIndication" TEXT NOT NULL,
    "recipeCost" TEXT NOT NULL,
    "recipeMaterial" JSONB NOT NULL,
    "recipeUrl" TEXT NOT NULL,

    CONSTRAINT "archive_recipe_pkey" PRIMARY KEY ("createdAt")
);
