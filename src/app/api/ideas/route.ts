import { NextRequest, NextResponse } from "next/server";
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
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch startup ideas",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { title, problem, solution, userId } = body;

    const idea = await prisma.startupIdea.create({
      data: {
        title,
        problem,
        solution,
        userId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: idea,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create startup idea",
      },
      { status: 500 }
    );
  }
}