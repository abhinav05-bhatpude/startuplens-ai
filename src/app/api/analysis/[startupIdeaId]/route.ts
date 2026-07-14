import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: Promise<{
    startupIdeaId: string;
  }>;
};

export async function GET(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { startupIdeaId } = await params;

    const analysis = await prisma.analysis.findFirst({
      where: {
        startupIdeaId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!analysis) {
      return NextResponse.json(
        {
          success: false,
          message: "Analysis not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: analysis,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch analysis",
      },
      { status: 500 }
    );
  }
}