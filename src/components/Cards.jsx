function Cards(props)
{
    return(
     
             <div style={{backgroundColor:props.bgcolour}} className=" px-10 py-5 border rounded-md text-center flex-grow">
                             <h1 className="text-2xl font-medium">{props.title}</h1>
                             <p>{props.subtitle}</p>
            </div>
     
    )
}
export default Cards