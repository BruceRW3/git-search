export const fetchUser = async (userName, page) => {
  if (!userName) return 
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${userName}&per_page=5&page=${page}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}