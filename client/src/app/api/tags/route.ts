import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, createdResponse, errorResponse } from '@/lib/api-response';

export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { posts: true },
        },
      },
    });

    return successResponse({ tags });
  } catch (error) {
    console.error('Error fetching tags:', error);
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug } = body;

    if (!name) {
      return errorResponse(new Error('Name is required'), 400);
    }

    const tag = await prisma.tag.create({
      data: {
        name,
        slug: slug || name.toLowerCase().replace(/\s+/g, '-'),
      },
    });

    return createdResponse(tag);
  } catch (error) {
    console.error('Error creating tag:', error);
    return errorResponse(error);
  }
}
