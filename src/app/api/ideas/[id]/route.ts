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
      where: { id },
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

export async function PUT(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    const body = await request.json();

    const { title, problem, solution } = body;

    const updatedIdea = await prisma.startupIdea.update({
      where: { id },
      data: {
        title,
        problem,
        solution,
      },
    });

    return NextResponse.json({
      success: true,
      data: updatedIdea,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update startup idea",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: Params
) {
  try {
    const { id } = await params;

    await prisma.startupIdea.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Startup idea deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete startup idea",
      },
      { status: 500 }
    );
  }
}