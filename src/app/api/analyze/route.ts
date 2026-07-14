import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { analyzeStartup } from "@/lib/ai/gemini";

export async function POST(request: NextRequest) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      startupIdeaId,
      startupName,
      problem,
      solution,
      targetAudience,
    } = body;

    if (
      !startupIdeaId ||
      !startupName ||
      !problem ||
      !solution ||
      !targetAudience
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    const report = await analyzeStartup({
      startupName,
      problem,
      solution,
      targetAudience,
    });

    const analysis = await prisma.analysis.create({
      data: {
        report,
        userId: session.user.id,
        startupIdeaId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Business plan generated successfully.",
      data: analysis,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate business plan.",
      },
      { status: 500 }
    );
  }
}