import { json2csv } from 'json-2-csv';
//Function to convert data to csv and trigger a download
export const exportToCsv = (data: any[], filename: string) => {
  // conver JSON data to CSV
  const csv = json2csv(data);
  // Crete Blob objet using csv data
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  //Set the href attribute to the Blob
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  link.style.visibility = 'hidden';

  //Append the link to the document body
  document.body.appendChild(link);
  link.click();
  // Remove element from document
  document.body.removeChild(link);
};
