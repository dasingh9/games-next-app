import initDB from '../../../../lib/db/dbConnect.js';

await initDB();
import EmployeeService from '../../../../lib/services/EmployeeService.js';

const service = new EmployeeService();

export async function GET(req, { params }) {
  const employee = await service.getById(params.id);
  if (!employee) {
    return new Response(JSON.stringify({ error: 'Employee not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response(JSON.stringify(employee), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const updated = await service.update(params.id, data);
    if (!updated) {
      return new Response(JSON.stringify({ error: 'Employee not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify(updated), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req, { params }) {
  const deleted = await service.delete(params.id);
  if (!deleted) {
    return new Response(JSON.stringify({ error: 'Employee not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return new Response(JSON.stringify(deleted), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
