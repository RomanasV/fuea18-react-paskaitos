function ServiceItem(props) {
    // const title = props.title
    // const description = props.description
    // const buttonText = props.buttonText

    const { title, description, buttonText } = props

    if (!title && !description && !buttonText) {
        return
    }

    // const serviceTitle = title && <h3>{title}</h3>
    // const serviceDescription = description ? description : 'No description yet...'
    // const serviceButtonText = buttonText && <button>{buttonText}</button>
    
    return (
        <div className='service-item'>
            {/* {serviceTitle} */}
            {/* <p>{serviceDescription}</p> */}
            {/* {serviceButtonText} */}
            

            {title && <h3>{title}</h3>}

            <p>
                {description ? description : 'No description yet...'}
            </p>

            {buttonText && <button>{buttonText}</button>}
        </div>
    )
}

export default ServiceItem