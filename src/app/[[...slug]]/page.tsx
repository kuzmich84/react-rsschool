import { ClientOnly } from './client';
import '../../index.css';

const API_KEY = '61ba9e64';

export async function generateStaticParams() {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=movie`);
  const data = await response.json();
  const pageCount = Math.ceil(data.totalResults / 10);
  const pageCountSlug = [...Array(pageCount)]
    .map((_, i) => i)
    .map((item) => ({
      slug: ['page', `${item}`],
    }));
  return [{ slug: [''] }, ...pageCountSlug];
}

export default function HomePage() {
  return <ClientOnly />;
}
