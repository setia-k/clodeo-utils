/**
 * Web only, Download a file from a URL or Blob
 * @param file {string|Blob} URL or Blob
 * @param filename
 */
function downloadFile(file: string | Blob, filename: string) {
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');

  if (file instanceof Blob) {
    file = window.URL.createObjectURL(file);
  }

  link.setAttribute('href', file);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export default downloadFile;
