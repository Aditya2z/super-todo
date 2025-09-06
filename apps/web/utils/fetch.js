const API = import.meta.env.VITE_API_BASE;

export default async function fetchData(endpoint) {
  try {
    const res = await fetch(`${API}/${endpoint}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
