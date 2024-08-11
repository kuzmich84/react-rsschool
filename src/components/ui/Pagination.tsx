import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import Link from 'next/link';

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
            href={`/page/${page}`}
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
