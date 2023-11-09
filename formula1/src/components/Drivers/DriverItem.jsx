const DriverItem = ({name, age, nationality, image}) => {
    return (
        <article className="col-12 col-md-6 col-lg-4">
            <div className="p-3 border rounded">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <h2>{nationality}</h2>
                <h1>{age}</h1>
            </div>
        </article>
    )
}

export default DriverItem