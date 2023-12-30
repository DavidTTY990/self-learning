function ArrayMethods() {
    const arr = [1, 2, 3]

    const newArray = arr.map((item) => {
        console.log(item)
    })
    

    return (
        <div>
            { arr.map((item) => {
                return(<div key={item}>
                    {item}
                </div>)
            }) }
        </div>
    )
}

export default ArrayMethods