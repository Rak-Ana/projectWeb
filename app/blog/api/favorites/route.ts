import { NextResponse } from "next/server";
import prisma from "@/utils/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // ดึงข้อมูลจากฐานข้อมูล
    const favorites = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
      include: { favorites: true },
    });

    return NextResponse.json(favorites?.favorites || []);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch favorites" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { postId, userId, action } = body;

    if (!postId || !userId || !action) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    if (action === "add") {
      await prisma.user.update({
        where: { id: userId },
        data: { favorites: { connect: { id: postId } } },
      });
      return NextResponse.json({ success: true, message: "Added to favorites." });
    } else if (action === "remove") {
      await prisma.user.update({
        where: { id: userId },
        data: { favorites: { disconnect: { id: postId } } },
      });
      return NextResponse.json({ success: true, message: "Removed from favorites." });
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update favorites" }, { status: 500 });
  }
}
