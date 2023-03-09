import '../Style.css'

function HomeCategory() {

    const categories = [{
        name: "Development",
        url: "https://www.npmjs.com/"
    },
    {
        name: "Development",
        url: "https://www.npmjs.com/"
    },
    {
        name: "Development",
        url: "https://www.npmjs.com/"
    },
    {
        name: "Development",
        url: "https://www.npmjs.com/"
    },
    {
        name: "English",
        url: "https://www.npmjs.com/"
    }, {
        name: "Math",
        url: "https://www.npmjs.com/"
    }, {
        name: "AI",
        url: "https://www.npmjs.com/"
    }, {
        name: "Blockchain",
        url: "https://www.npmjs.com/"
    }, {
        name: "User Experience",
        url: "https://www.npmjs.com/"
    }];



    return (
        <>
            <div className="container">

                <div className="">
                    <h1 className="display-6 mb-4 mt-3 ms-5 text-start">Top Categories</h1>
                </div>

                <div className="row">
                    {categories.map((category, index) => {
                        return (
                            <div key={index} className="card col-lg-3 ms-5 mb-3 col-10">
                                <div className="row">
                                    <div className="col-lg-4 col-4">
                                        <img src="https://picsum.photos/100" className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-lg-8 col-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-start">{category.name}</h5>
                                            <p className="card-text text-start">Learn {category.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}

export default HomeCategory
