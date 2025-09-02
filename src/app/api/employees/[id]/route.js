import EmployeeService from '../../../../lib/services/EmployeeService.js';

const service = new EmployeeService();

export async function GET(req, { params }) {
  const { id } = await params;
  const employee = await service.getById(id);
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
  const { id } = await params;
  const updated = await service.update(id, data);
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
  const { id } = await params;
  const deleted = await service.delete(id);
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
