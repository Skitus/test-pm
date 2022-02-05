import {createPages} from "./createPage";
import "./Pagination.scss";
import {useDispatch} from "react-redux";
import {setCurrentPageCandidate} from "../../bll/listOfCandidates/listOfCandidates.slice";

const PaginationUsers = ({ currentPage, pagesCount }) => {
    const dispatch = useDispatch();
    const pages = [];
    const FIRST_PAGE = 1;
    createPages(pages, pagesCount, currentPage);
    return (
        <div className="pagination-wrapper">
            {currentPage >= 5 ? (
                <>
                    <button
                        className="pages-items"
                        onClick={() => dispatch(setCurrentPageCandidate(FIRST_PAGE))}
                    >
                        {FIRST_PAGE}
                    </button>
                    <span className="three-dot">&hellip;</span>
                </>
            ) : ('')}
            {pages.map((page) => (
                <button
                    className={currentPage === page ? 'active' : 'pages-items'}
                    key={page}
                    onClick={() => dispatch(setCurrentPageCandidate(page))}
                >
                    {page}
                </button>
            ))}
            {currentPage === pagesCount || currentPage + 3 >= pagesCount ? null
                : (
                    <>
                        <span>&hellip;</span>
                        <button
                            className="pages-items"
                            onClick={() => dispatch(setCurrentPageCandidate(pagesCount))}
                        >
                            {pagesCount}
                        </button>
                    </>
                )}
        </div>
    );
};

export default PaginationUsers;