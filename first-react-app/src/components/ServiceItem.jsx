function ServiceItem(props) {
    // const title = props.title
    // const description = props.description
    // const buttonText = props.buttonText

    const { title, description, buttonText } = props

    return (
        <div className='service-item'>
            <h3>{title}</h3>
            <p>{description}</p>
            <button>{buttonText}</button>
        </div>
    )
}

export default ServiceItem