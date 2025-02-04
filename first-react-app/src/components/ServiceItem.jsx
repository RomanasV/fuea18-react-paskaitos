function ServiceItem(props) {
    return (
        <div className='service-item'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>{props.buttonText}</button>
        </div>
    )
}

export default ServiceItem