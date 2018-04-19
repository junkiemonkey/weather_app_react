export const getDataFromStorage = () => {
  const tableData = localStorage.getItem('tableData');
  return JSON.parse(tableData) || [];
};

export const setDataToStorage = (data) => {
  localStorage.setItem('tableData', JSON.stringify(data));
};
