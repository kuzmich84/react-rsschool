interface linkDownLoadProps {
  link: string;
  fileName: string;
}

export default function LinkDownload({ link, fileName }: linkDownLoadProps) {
  return <a href={link} download={fileName}></a>;
}
