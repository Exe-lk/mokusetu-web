import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, createdResponse, errorResponse } from '@/lib/api-response';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const active = searchParams.get('active');

    const where: any = {};
    
    if (active !== null) {
      where.active = active === 'true';
    }

    const teamMembers = await prisma.teamMember.findMany({
      where,
      orderBy: { order: 'asc' },
    });

    return successResponse({ teamMembers });
  } catch (error) {
    console.error('Error fetching team members:', error);
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, bio, avatar, email, linkedin, twitter, active, order } = body;

    if (!name || !role) {
      return errorResponse(new Error('Name and role are required'), 400);
    }

    const teamMember = await prisma.teamMember.create({
      data: {
        name,
        role,
        bio,
        avatar,
        email,
        linkedin,
        twitter,
        active: active ?? true,
        order: order ?? 0,
      },
    });

    return createdResponse(teamMember);
  } catch (error) {
    console.error('Error creating team member:', error);
    return errorResponse(error);
  }
}
