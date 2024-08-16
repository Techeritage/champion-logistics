export const getHomePage = async () => {
  try {
    const res = await fetch(
      "https://champions-logistics-cms.onrender.com/homepage/",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
