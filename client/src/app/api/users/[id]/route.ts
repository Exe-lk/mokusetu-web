import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, notFoundResponse } from '@/lib/api-response';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            pages: true,
          },
        },
      },
    });

      if (!user) {
        return notFoundResponse('User');
      }

    return successResponse(user);
  } catch (error) {
    console.error('Error fetching user:', error);
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
    const { email, name, role, avatar } = body;

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(email && { email }),
        ...(name !== undefined && { name }),
        ...(role && { role }),
        ...(avatar !== undefined && { avatar }),
      },
    });

    return successResponse(user, 'User updated successfully');
  } catch (error) {
    console.error('Error updating user:', error);
    return errorResponse(error);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.user.delete({
      where: { id },
    });

    return successResponse(null, 'User deleted successfully');
  } catch (error) {
    console.error('Error deleting user:', error);
    return errorResponse(error);
  }
}
