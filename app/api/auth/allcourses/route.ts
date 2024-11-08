// app/api/auth/allcourses/route.ts
import { NextResponse } from "next/server";
import { getClient } from "../../../../lib/db"; // Adjust the import path according to your folder structure

export async function GET() {
  const client = await getClient();

  try {
    const result = await client.query(`
      SELECT course_id, course_name, description, duration_hours, level, status,url
      FROM courses
    `);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  } finally {
    client.release();
  }
}
