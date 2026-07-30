export function calculateProfileCompletion(profile) {
  const student = profile?.studentProfile;

  const fields = [
    profile?.name,
    profile?.email,
    student?.degree,
    student?.college,
    student?.location,
    student?.profileImage,
    student?.skills?.length > 0,
    student?.resume,
  ];

  const completed = fields.filter(Boolean).length;

  return Math.round((completed / fields.length) * 100);
}
