import { Link } from 'react-router-dom';

interface paginationProps {
  pages: number[];
  currentPage: number;
  setPage: (page: number) => void;
}

export default function Pagination({ pages, currentPage, setPage }: paginationProps) {
  return (
    <ul className="pages">
      {pages.map((page, index) => (
        <li key={index}>
          <Link
            to={`/page/${page}`}
            className={currentPage === page ? 'page active_page' : 'page'}
            onClick={() => setPage(page)}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}
