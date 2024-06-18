
// eslint-disable-next-line react/prop-types
function Image({url , alt}){
    return(
        <div className="h-full w-full">
            <img
                src={url}
                alt={alt}
                className="object-cover h-full w-full"
            />
        </div>
    )
}

export default Image;