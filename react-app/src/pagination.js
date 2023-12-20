const Pages = ({total,limit,handlePage})=>{
    const num_of_pages = Math.ceil(total.current/limit.current)
    let pages = []
    for (let i = 1; i <= num_of_pages; i++) {
        pages.push(i)
    }
    return (
        <nav>
            <ul className="pagination mb-0 justify-content-end">
                {pages.map((page)=>(
                    <li className="page-item" key={page}  onClick={handlePage} ><a className="page-link" href="#" data-attr-index={page}>{page}</a></li>
                ))}  
            </ul>
        </nav>
    )
}

export default Pages;