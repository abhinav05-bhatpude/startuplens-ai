import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const idea = await prisma.startupIdea.findUnique({
      where: {
        id,
      },
    });

    if (!idea) {
      return NextResponse.json(
        {
          success: false,
          message: "Startup idea not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: idea,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch startup idea",
      },
      { status: 500 }
    );
  }
}