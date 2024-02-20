-- CreateTable
CREATE TABLE "archive_recipe" (
    "recipeTitle" TEXT NOT NULL,
    "foodImageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "archive_recipe_pkey" PRIMARY KEY ("createdAt")
);
