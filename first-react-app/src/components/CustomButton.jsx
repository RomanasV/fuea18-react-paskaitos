function CustomButton(props) {
    const { children } = props
    
    return (
        <button>
            {children}
        </button>
    )
}

export default CustomButton