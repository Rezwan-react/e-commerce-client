import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductsCard from "../ProductsCard/ProductsCard";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Pagination() {
    const itemsPerPage = 12;

    const [itemOffset, setItemOffset] = useState(0);

    // Calculate current items
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Handle page change
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-4 gap-8 pt-8">
                        {currentItems &&
                            currentItems.map((item) => (
                                <ProductsCard key={item} data={item} />
                            ))}
                    </div>

                    <div className="flex justify-center mt-6">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< Prev"
                            renderOnZeroPageCount={null}
                            containerClassName="flex gap-2"
                            pageClassName="px-3 py-1 border rounded cursor-pointer"
                            activeClassName="bg-blue-500 text-white"
                            previousClassName="px-3 py-1 border rounded cursor-pointer"
                            nextClassName="px-3 py-1 border rounded cursor-pointer"
                            disabledClassName="opacity-50 cursor-not-allowed"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pagination;
