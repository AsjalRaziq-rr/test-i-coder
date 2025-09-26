'use client'

import CourseList from '../components/CourseList'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Online Courses</h1>
        <CourseList />
      </div>
    </main>
  )
}