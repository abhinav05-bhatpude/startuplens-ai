import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: NextRequest,
  { params }: Params
) {
  const { id } = await params;

  return NextResponse.json({
    success: true,
    message: "Dynamic Idea API is working 🚀",
    ideaId: id,
  });
}