
function Category() {

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
            <div className="container col-xxl-8 px-4 py-5">

                <h1 className="display-6 mb-5 text-start">Top Categories</h1>

                <div className="row">
                    {categories.map((category, index) => {
                        return (
                            <div key={index} className="card col-lg-4 col-10 mb-3">
                                <div className="row">
                                    <div className="col-lg-4 col-4">
                                        <img src="https://picsum.photos/100" className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-lg-8 col-8">
                                        <div className="card-body text-start">
                                            <h5 className="card-title">{category.name}</h5>
                                            <p className="card-text">Learn {category.name}</p>
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

export default Category
