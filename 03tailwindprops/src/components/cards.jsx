import React from 'react'

// props
function Card(props){ // use props or use {userName} (destructuring)
    console.log(props.userName);
    
    return(
        <>
        <div className="flex flex-col items-center gap-6 p-7 rounded-2xl">
            <div>
            <img className="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s" />
            </div>
            <div className="flex items-center">
            <span className="text-2xl font-medium">{props.userName }</span>
            <span className="font-medium text-sky-500">{props.btnText || "visit me"}</span>
            <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                <span>No. 4</span>
                <span>·</span>
                <span>2025</span>
            </span>
            </div>
        </div>
        </>
    )
}
export default Card