"use server";

export async function submitName(formData: FormData): Promise<string> {
  const name = formData.get("name") as string;
  return `Hello ${name}!`;
}
