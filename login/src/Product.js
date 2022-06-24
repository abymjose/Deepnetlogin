const Product = () => {
    return (
        <div className="main-box">
            <div className="row">
                <div className="col-md-12 text-center"><h1>Add Product</h1></div>

            </div>

            <div className="row">
                <div className="col-md-6 text-center">Name</div>
                <div className="col-md-6">
                    <input type="text" name="Name" className="form-control" />
                </div>
            </div>
           
            <div className="row">
                <div className="col-md-6 text-center">Price</div>
                <div className="col-md-6">
                    <input type="text" name="Price" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-center">Quantity</div>
                <div className="col-md-6">
                    <input type="number" name="Quantity" className="form-control" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-center">Category</div>
                <div className="col-md-6">
                    <input type="text" name="Category" className="form-control" />
                </div>
            </div>
            <div className="row">
                    <div className="col-md-12 text-center">
                        <input type="submit" name="submit" value="Submit"  className="btn btn-success"/>
                    </div>
                </div>


        </div>
    )
}
export default Product;