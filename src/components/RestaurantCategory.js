const RestaurantCategory = (props) => {
    const {title} = props?.data;
    console.log(props.data)
    return (
        <div className="bg-pink-50 p-2 w-6/12 mx-auto my-2 shadow-md flex justify-between rounded-lg p-5">
            <span className="font-semibold ">{title} ({props.data.itemCards.length})</span>
            <span> 🔽</span>
        </div>
    )
}

export default RestaurantCategory