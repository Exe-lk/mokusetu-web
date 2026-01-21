import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, errorResponse, notFoundResponse } from '@/lib/api-response';

function parseServiceData(service: any) {
  return {
    ...service,
    cardContents: service.cardContents ? JSON.parse(service.cardContents) : [],
    servicesList: service.servicesList ? JSON.parse(service.servicesList) : [],
    whyChoosePoints: service.whyChoosePoints ? JSON.parse(service.whyChoosePoints) : [],
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    const service = await prisma.service.findUnique({
      where: { slug },
    });

    if (!service) {
      return notFoundResponse('Service');
    }

    return successResponse(parseServiceData(service));
  } catch (error) {
    console.error('Error fetching service by slug:', error);
    return errorResponse(error);
  }
}
