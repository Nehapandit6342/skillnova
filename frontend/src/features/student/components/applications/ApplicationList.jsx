import ApplicationCard from "./ApplicationCard";
import EmptyApplications from "./EmptyApplications";
import ApplicationSkeleton from "./ApplicationSkeleton";

export default function ApplicationList({ loading, applications }) {
  if (loading) {
    return (
      <div className="space-y-5">
        <ApplicationSkeleton />

        <ApplicationSkeleton />

        <ApplicationSkeleton />
      </div>
    );
  }

  if (applications.length === 0) {
    return <EmptyApplications />;
  }

  return (
    <div className="space-y-5">
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
}
