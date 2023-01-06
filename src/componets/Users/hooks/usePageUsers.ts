
export const usePageUsers = (totalCount:number , pageSize:number ) =>{
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages: Array<number> = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return pages
}