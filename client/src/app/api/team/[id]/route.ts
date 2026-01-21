import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, notFoundResponse } from '@/lib/api-response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const teamMember = await prisma.teamMember.findUnique({
      where: { id },
    });

    if (!teamMember) {
      return notFoundResponse('Team member');
    }

    return successResponse(teamMember);
  } catch (error) {
    console.error('Error fetching team member:', error);
    return errorResponse(error);
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, role, bio, avatar, email, linkedin, twitter, active, order } = body;

    const teamMember = await prisma.teamMember.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(role && { role }),
        ...(bio !== undefined && { bio }),
        ...(avatar !== undefined && { avatar }),
        ...(email !== undefined && { email }),
        ...(linkedin !== undefined && { linkedin }),
        ...(twitter !== undefined && { twitter }),
        ...(active !== undefined && { active }),
        ...(order !== undefined && { order }),
      },
    });

    return successResponse(teamMember, 'Team member updated successfully');
  } catch (error) {
    console.error('Error updating team member:', error);
    return errorResponse(error);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.teamMember.delete({
      where: { id },
    });

    return successResponse(null, 'Team member deleted successfully');
  } catch (error) {
    console.error('Error deleting team member:', error);
    return errorResponse(error);
  }
}
