const Planes = () => {
    return (
        <>
            <div className="planecontainer">
                <Plane classN="odd"/>
                <Plane />
                <Plane classN="odd" />
                <Plane />
            </div>
        </>
    )
}

const Plane = (props? : any) => {
    return (
            <div className={`plane ${props.classN}`}>
                <img src={require("../Assets/plane.png")} width="200px" height="100px" alt="plane" />
            </div>
    )
}

export default Planes;