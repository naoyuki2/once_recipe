import { getArchive } from '@/features/archive/api/getArchive'
import { isEmpty } from '@/utils/isEmpty'
import { postArchive } from '@/features/archive/api/postArchive'
import { fetchRakutenRecipe } from '@/features/rakuten/api/getRakutenRecipe'

export const getTodayRecipe = async () => {
    let todayRecipe = await getArchive()
    console.log('archive見に行ってきた')
    console.log(todayRecipe)
    if (isEmpty(todayRecipe)) {
        todayRecipe = await fetchRakutenRecipe()
        await postArchive(todayRecipe)
    }
    return todayRecipe
}
