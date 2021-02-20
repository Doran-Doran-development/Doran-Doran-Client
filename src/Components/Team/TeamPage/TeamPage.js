import React, { useState } from 'react'
import ItemPage from './ItemPage/ItemPage'

const TeamPage = () => {
    const [page, setPage] = useState(1);

    return (
        <div>
            <ItemPage id={page} setId={setPage} length={10} />
        </div>  
    )
}

export default TeamPage
