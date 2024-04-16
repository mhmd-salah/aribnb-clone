export const getExplore = async () => {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/4G1G`);
    const expoloreData = await res.json();
    return expoloreData;
  } catch (error) {
    console.log(error)
  }
};
export const getLive = async () => {
  try {
    const res = await fetch(`https://www.jsonkeeper.com/b/VHHT`);
    const liveData = await res.json();
    return liveData;
  } catch (error) {
    console.log(error)
  }
};
export const getSearchResult = async () => {
  try {
    const res = await fetch("https://www.jsonkeeper.com/b/5NPS")
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}; 