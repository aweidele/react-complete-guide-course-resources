"use server";
export const shareMeal = async (formData) => {
  const meal = {
    name: formData.get("name"),
    title: formData.get("title"),
    email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  console.log(meal);
};
