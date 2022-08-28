const Warning = (props) => {
    return (
        <>
            <div className='warning-title'>
                <p>Invalid input</p>
            </div>
            <div>
                <p>{props.text}</p>
                <div className='warning-close'>Okay</div>
            </div>
        </>
    )
};

export default Warning;