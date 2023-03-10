import { Link } from "react-router-dom";

function Category() {

    const categories = ["ENGLISH", "BLOCKCHAIN", "DEVELOPMENT", "MATH", "AI", "DESIGN", "GUITAR", "GERMAN", "POEM"];

    return (

        <>
            <div className="container col-xxl-8 px-4 py-5">
                <h1 className="display-6 mb-5 text-start">Top Categories</h1>

                <div className="row">
                    {categories.map((category, index) => {
                        return (
                            <div key={index} className="card col-lg-4 col-10 mb-3">
                                <Link to={`/tutors/${category}`} style={{ textDecoration: 'none', color: "black" }} >
                                    <div className="row">
                                        <div className="col-lg-4 col-4">
                                            <img
                                                src={`https://picsum.photos/120`}
                                                className="img-fluid"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="col-lg-8 col-8">
                                            <div className="card-body text-start">
                                                <h5 className="card-title">{category}</h5>
                                                <p className="card-text">Learn {category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>

    );
}

export default Category
