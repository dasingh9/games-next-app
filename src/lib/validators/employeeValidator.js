import { z } from 'zod';

export const employeeCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  department: z.string().optional(),
});

export const employeeUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  department: z.string().optional(),
  isActive: z.boolean().optional(),
});

export function validateCreate(data) {
  return employeeCreateSchema.parse(data);
}

export function validateUpdate(data) {
  return employeeUpdateSchema.parse(data);
}
