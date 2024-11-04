// import { getClient } from './db';

// interface Course {
//   course_id: number;
//   course_name: string;
//   course_code: string;
//   description: string | null;
//   duration_hours: number;
//   price: number;
//   category_id: number;
//   level: 'Beginner' | 'Intermediate' | 'Advanced';
//   created_at: Date;
//   updated_at: Date;
//   status: 'Active' | 'Inactive';
// }

// export const getCourses = async (): Promise<Course[]> => {
//   const client = await getClient();
//   try {
//     const result = await client.query<Course>('SELECT * FROM courses');
//     return result.rows;
//   } catch (error) {
//     console.error('Error fetching courses:', error);
//     throw new Error('Failed to fetch courses');
//   } finally {
//     client.release();
//   }
// };

// export const getCoursesByCategory = async (categoryId: number): Promise<Course[]> => {
//   const client = await getClient();
//   try {
//     const result = await client.query<Course>('SELECT * FROM courses WHERE category_id = $1', [categoryId]);
//     return result.rows;
//   } catch (error) {
//     console.error('Error fetching courses by category:', error);
//     throw new Error('Failed to fetch courses by category');
//   } finally {
//     client.release();
//   }
// };

// // New function to get courses by their status (Complete/Upcoming)
// export const getCoursesByStatus = async (userId: number, status: 'Completed' | 'In Progress'): Promise<Course[]> => {
//   const client = await getClient();
//   try {
//     const result = await client.query<Course>(
//       'SELECT c.* FROM courses c JOIN user_courses uc ON c.course_id = uc.course_id WHERE uc.status = $1 AND uc.user_id = $1',
//       [status, userId]
//     );
//     return result.rows;
//   } catch (error) {
//     console.error(`Error fetching ${status} courses for user ${userId}:`, error);
//     throw new Error(`Failed to fetch ${status} courses for user ${userId}`);
//   } finally {
//     client.release();
//   }
// };

