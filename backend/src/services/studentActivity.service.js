import prisma from "../config/prisma.js";

export const getRecentActivities = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: { userId },
    include: {
      resumeAnalysis: true,
      applications: {
        include: {
          internship: {
            select: {
              title: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!student) {
    const error = new Error("Student profile not found");
    error.statusCode = 404;
    throw error;
  }

  const activities = [];

  if (student.resumeUploadedAt) {
    activities.push({
      type: "resume_upload",
      title: "Resume uploaded successfully",
      time: student.resumeUploadedAt,
    });
  }

  if (student.resumeAnalysis?.updatedAt) {
    activities.push({
      type: "resume_analysis",
      title: "AI Resume Analysis completed",
      time: student.resumeAnalysis.updatedAt,
    });
  }

  student.applications.forEach((application) => {
    activities.push({
      type: "application",
      title: `Applied for ${application.internship.title}`,
      time: application.createdAt,
    });
  });

  if (student.updatedAt) {
    activities.push({
      type: "profile_update",
      title: "Profile updated",
      time: student.updatedAt,
    });
  }

  activities.sort((a, b) => new Date(b.time) - new Date(a.time));

  return activities.slice(0, 5);
};
