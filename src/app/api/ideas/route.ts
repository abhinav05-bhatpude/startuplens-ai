import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const ideas = await prisma.startupIdea.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: ideas,
    });
  } catch (error) {
    console.error("Error fetching ideas:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch startup ideas",
      },
      { status: 500 }
    );
  }
}