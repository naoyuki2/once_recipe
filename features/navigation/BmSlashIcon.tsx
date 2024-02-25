'use client'

import { BookmarkSlashIcon } from '@heroicons/react/24/solid'

export const BmSlashIcon = () => {
    const handleAlert = () => {
        alert('保存機能を使うにはログインしてください。')
    }
    return (
        <div className="text-center cursor-pointer" onClick={handleAlert}>
            <BookmarkSlashIcon className="h-[30px] w-[80px]" />
            <p>保存</p>
        </div>
    )
}
