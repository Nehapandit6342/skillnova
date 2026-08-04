import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export const analyzeResume = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Analyzer and Career Advisor.

Analyze the following resume and return ONLY valid JSON.

Return EXACTLY this structure:

{
  "atsScore": number,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
 "recommendedProjects": [
  {
    "title": "",
    "description": "",
    "technologies": []
  }
]
  "recommendedInternships": [],
  "careerRoadmap": [],
  "improvementSuggestions": [],
   "learningPlan": []
}

Rules:
- ATS score between 0 and 100.
- Summary: 2-3 sentences.
- Strengths: maximum 5.
- Weaknesses: maximum 5.
- Missing skills: maximum 10.
- Recommend EXACTLY 5 unique portfolio projects.
- Projects MUST be personalized according to:
  • current skills
  • missing skills
  • career goal
  • education level
- Every project should help the student learn one or more missing skills.
- Avoid generic projects like:
  • Blog Website
  • Chat App
  • Weather App
  • Todo App
- Prefer modern, resume-worthy projects that impress recruiters.
- Mention technologies to use for every project.
- Each project should contain:
  - title
  - short description
  - recommended technologies
- Recommended internships: maximum 5.
- Recommend internship roles that directly match the student's skills, career goal, and missing skills.
- Prefer realistic job roles (e.g., Frontend Developer Intern, Full Stack Developer Intern, AI/ML Intern, Backend Developer Intern, UI/UX Intern, DevOps Intern).
- Career roadmap: maximum 6 ordered steps.
- Return ONLY valid JSON.
- No markdown.
- No explanation.
- Improvement suggestions: maximum 5.
- Suggestions should be practical and specific.
- Focus on improving ATS score.
- Mention missing sections, stronger wording, measurable achievements, technical skills, certifications, portfolio improvements, etc.
Learning Plan:
- Maximum 8 learning tasks.
- Ordered from beginner to advanced.
- Every task should contain

{
   "title":"",
   "description":"",
   "estimatedDuration":"",
   "priority":"High | Medium | Low"
}

Learning plan should be personalized using

- current skills
- missing skills
- career goal
- resume strengths
- weaknesses

Return ONLY JSON.

Resume:

${resumeText}
`;

  const completion = await client.chat.completions.create({
    model: "openai/gpt-oss-20b:free",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.3,
  });

  return completion.choices[0]?.message?.content;
};

export const getCareerRoadmap = async (userId) => {
  const student = await prisma.studentProfile.findUnique({
    where: {
      userId,
    },
    include: {
      resumeAnalysis: true,
    },
  });

  if (!student) {
    throw new Error("Student profile not found.");
  }

  if (!student.resumeAnalysis) {
    throw new Error("Resume analysis not found.");
  }

  return student.resumeAnalysis.careerRoadmap;
};
