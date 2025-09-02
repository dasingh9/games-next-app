import initDB from '../../../lib/db/dbConnect.js';

await initDB();
import EmployeeService from '../../../lib/services/EmployeeService.js';

const service = new EmployeeService();

export async function GET() {
  const employees = await service.getAll();
  return new Response(JSON.stringify(employees), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  try {
    const data = await req.json();
    const created = await service.create(data);
    return new Response(JSON.stringify(created), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
