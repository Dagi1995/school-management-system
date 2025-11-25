import UseCard from "@/components/UseCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
        {/* User Statistics Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UseCard type="student"></UseCard>
          <UseCard type="teacher"></UseCard>
          <UseCard type="parent"></UseCard>
          <UseCard type="staff"></UseCard>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
