import { MovieProps } from '../components/Movie/Movie';

interface exportCSVProps {
  data: MovieProps[];
  fileName: string;
  className: string;
}

function ExportCSV({ data, fileName, className }: exportCSVProps) {
  const downloadCSV = () => {
    const csvString = [
      ['Title', 'Year', 'Poster-Link'],
      ...data.map((item) => [item.Title, item.Year, item.Poster]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvString], { type: 'text/csv' });

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button className={className} onClick={downloadCSV}>
      Download
    </button>
  );
}

export default ExportCSV;
