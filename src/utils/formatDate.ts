export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000); //Convert Unix to milliseconds
  //Define the options for formating the date
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  //This ensures the data is formatted according to Us conventions
  return date.toLocaleDateString('en-Us', options);
};
