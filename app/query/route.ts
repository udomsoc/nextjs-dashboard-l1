import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
  const data = await sql`
    SELECT customers.name, invoices.date, invoices.status, invoices.amount
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount > 0
    ORDER BY customers.name;
  `;

  return data;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     "Uncomment this file and remove this line. You can delete this file when you are finished.",
  // });
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
