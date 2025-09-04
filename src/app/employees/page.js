async function getEmployees() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/employees`, {
            cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to fetch employees');
        const data = await res.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return { error: error.message };
    }
};

export default async function ListEmployees() {
    const employeesOrError = await getEmployees();
    if (employeesOrError.error) {
        return <div>Error: {employeesOrError.error}</div>;
    }
    const employees = employeesOrError;
    return (
        <div className="container mt-4">
            <h2>List Employees</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
