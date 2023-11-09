import DriverItem from "./DriverItem";

const DriverList = ({drivers}) => {
    return (
        <section className="row">
            {drivers.map(driver => <DriverItem key={driver.id} {...driver} />)}
        </section>
    )
}

export default DriverList;