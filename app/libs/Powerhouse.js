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
    return null;
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
    return null;
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
    return null;
  }
};

export const getServicePage = async () => {
  try {
    const res = await fetch(
      "https://champions-logistics-cms.onrender.com/servicepage/"
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getSingleService = async (id) => {
  try {
    const res = await fetch(
      `https://champions-logistics-cms.onrender.com/servicepage/services/${id}`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllServices = async () => {
  try {
    const res = await fetch(
      "https://champions-logistics-cms.onrender.com/servicepage/services",
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
