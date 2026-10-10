"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (formData) => {
  const meal = {
    creator: formData.get("creator"),
    title: formData.get("title"),
    creator_email: formData.get("creator_email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };
  await saveMeal(meal);
  redirect('/meals');
};
