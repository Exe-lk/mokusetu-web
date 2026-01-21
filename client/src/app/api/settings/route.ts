import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { successResponse, createdResponse, errorResponse } from '@/lib/api-response';

export async function GET() {
  try {
    const settings = await prisma.setting.findMany({
      orderBy: { key: 'asc' },
    });

    const settingsObject = settings.reduce((acc, setting) => {
      let value = setting.value;
      
      if (setting.type === 'json' && value) {
        try {
          value = JSON.parse(value);
        } catch (e) {
        }
      } else if (setting.type === 'boolean') {
        value = value === 'true' ? 'true' : 'false';
      } else if (setting.type === 'number') {
        value = value ? String(Number(value)) : '0';
      }
      acc[setting.key] = value;
      return acc;
    }, {} as Record<string, any>);

    return successResponse({ settings: settingsObject });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, value, type } = body;

    if (!key) {
      return errorResponse(new Error('Key is required'));
    }

    let stringValue = value;
    if (type === 'json') {
      stringValue = JSON.stringify(value);
    } else if (typeof value === 'boolean') {
      stringValue = String(value);
    } else if (typeof value === 'number') {
      stringValue = String(value);
    }

    const setting = await prisma.setting.upsert({
      where: { key },
      update: {
        value: stringValue,
        type: type || 'text',
      },
      create: {
        key,
        value: stringValue,
        type: type || 'text',
      },
    });

    return createdResponse(setting);
  } catch (error) {
    console.error('Error creating/updating setting:', error);
    return errorResponse(error);
  }
}
