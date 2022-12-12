const Planes = () => {
    return (
        <>
            <div className="planecontainer">
                <Plane classN="odd" id="p1"/>
                <Plane id = "p2"/>
                <Plane classN="odd" id= "p3" />
                <Plane id="p4"/>
            </div>
        </>
    )
}

const Plane = (props? : any) => {
    return (
            <div className={`plane ${props.classN}`} id={`pl${props.id}`} >
                <img src={require("../Assets/plane.png")} width="200px" height="100px" alt="plane" />
            </div>
    )
}

export default Planes;