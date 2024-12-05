"use server"

import prisma from "@/utils/db";

export async function addToFavorites(postId: number, userId: number) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        favorites: {
          connect: { id: postId }, // เชื่อมโยงโพสต์ไปยัง Favorites
        },
      },
    });

    return { success: true, message: "Added to favorites." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to add to favorites." };
  }
}

export async function removeFromFavorites(postId: number, userId: number) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        favorites: {
          disconnect: { id: postId }, // ยกเลิกการเชื่อมโยงโพสต์จาก Favorites
        },
      },
    });

    return { success: true, message: "Removed from favorites." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to remove from favorites." };
  }
}
