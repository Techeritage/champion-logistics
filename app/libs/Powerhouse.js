export const getHomePage = async () => {
  try {
    const res = await fetch(
      "https://champions-logistics-cms.onrender.com/homepage/"
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    return {}; // Return a fallback value or handle the error appropriately
  }
};

export const getContactPage = async () => {
  try {
    const res = await fetch(
      "https://champions-logistics-cms.onrender.com/contactpage/"
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAboutPage = async () => {
  try {
    const res = await fetch(
      "https://champions-logistics-cms.onrender.com/aboutpage/"
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
