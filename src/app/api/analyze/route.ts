import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/auth";
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
      startupName,
      problem,
      solution,
      targetAudience,
    } = body;

    if (
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

    const businessPlan =
      await analyzeStartup({
        startupName,
        problem,
        solution,
        targetAudience,
      });

    return NextResponse.json({
      success: true,
      message:
        "Business plan generated successfully.",
      data: businessPlan,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to generate business plan.",
      },
      { status: 500 }
    );
  }
}