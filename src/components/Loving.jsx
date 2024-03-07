const Loving = ({ state }) => {
    console.log(state)
    return (
        <div>
            {state && <div className="text-center justify-center">
                <img src="https://static.vecteezy.com/system/resources/previews/000/285/139/original/heart-symbol-of-love-and-valentine-s-day-flat-red-icon-isolated-on-white-background-vector-illustration-vector.jpg"
                    className="mt-10 w-20 h-20 m-auto " />
                <h2 className="text-red-800 font-serif text-center ">Te amo hermosa</h2>
                <img src="https://media1.tenor.com/m/arqlNu8gyJYAAAAC/cat-cat-jumping.gif"
                />
            </div>}
        </div>
    )
}

export default Loving;