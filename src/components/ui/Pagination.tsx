import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../context/themeContext';

interface paginationProps {
  pages: number[];
  currentPage: number;
  setPage: (page: number) => void;
}

export default function Pagination({ pages, currentPage, setPage }: paginationProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <ul className={`${theme} pages`}>
      {pages.map((page, index) => (
        <li key={index}>
          <Link
            to={`/page/${page}`}
            className={currentPage === page ? `${theme} page active_page` : `${theme} page`}
            onClick={() => setPage(page)}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
}
